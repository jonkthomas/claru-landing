"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";

interface ASCIIBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  opacity?: number;
}

export default function ASCIIBackground({
  className = "",
  density = 1,
  speed = 0.5,
  opacity = 0.15,
}: ASCIIBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // ASCII character sets for different brightness levels
  const ASCII_CHARS = useMemo(
    () =>
      " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
    [],
  );

  // Get character based on brightness (0-1)
  const getCharForBrightness = useCallback(
    (brightness: number): string => {
      const index = Math.floor(brightness * (ASCII_CHARS.length - 1));
      return ASCII_CHARS[Math.min(Math.max(0, index), ASCII_CHARS.length - 1)];
    },
    [ASCII_CHARS],
  );

  // Simplex-like noise function for organic movement
  const noise = useCallback(
    (x: number, y: number, t: number): number => {
      const scale = 0.015;
      const timeScale = speed * 0.0008;

      const nx = x * scale;
      const ny = y * scale;
      const nt = t * timeScale;

      // Multiple octaves of sine waves for organic noise
      let value = 0;

      // Large scale waves
      value += Math.sin(nx * 0.8 + nt * 0.5) * 0.3;
      value += Math.sin(ny * 0.6 + nt * 0.4) * 0.3;
      value += Math.sin((nx + ny) * 0.4 + nt * 0.3) * 0.2;

      // Medium scale
      value += Math.sin(nx * 1.5 - nt * 0.6) * 0.15;
      value += Math.sin(ny * 1.2 + nt * 0.5) * 0.15;

      // Fine detail
      value += Math.sin(nx * 3.0 + ny * 2.0 + nt * 0.8) * 0.08;
      value += Math.sin(nx * 2.5 - ny * 1.5 - nt * 0.7) * 0.08;

      // Radial component for center focus
      const centerX = 0.5;
      const centerY = 0.5;
      const dx = (x / 100 - centerX) * 2;
      const dy = (y / 100 - centerY) * 2;
      const distFromCenter = Math.sqrt(dx * dx + dy * dy);
      const radialFade = Math.max(0, 1 - distFromCenter * 0.5);

      value *= 0.7 + radialFade * 0.3;

      // Normalize to 0-1
      return (value + 1.2) / 2.4;
    },
    [speed],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellWidth = Math.floor(8 / density);
    const cellHeight = Math.floor(14 / density);

    let cols = 0;
    let rows = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      cols = Math.ceil(rect.width / cellWidth);
      rows = Math.ceil(rect.height / cellHeight);
    };

    const render = (timestamp: number) => {
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Set font
      const fontSize = Math.floor(cellHeight * 0.85);
      ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", "SF Mono", monospace`;
      ctx.textBaseline = "top";

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const noiseVal = noise(x, y, timestamp);
          const char = getCharForBrightness(noiseVal);

          // Skip empty characters for performance
          if (char === " ") continue;

          // Calculate color based on noise value
          const brightness = noiseVal;

          // Create color with green accent for bright areas
          let r, g, b;
          if (brightness > 0.65) {
            // Accent green for bright spots
            const accentStrength = (brightness - 0.65) / 0.35;
            r = Math.floor(50 * (1 - accentStrength));
            g = Math.floor(80 + 175 * accentStrength);
            b = Math.floor(50 + 86 * accentStrength);
          } else {
            // Gray for darker areas
            const gray = Math.floor(40 + brightness * 60);
            r = gray;
            g = gray;
            b = gray;
          }

          const alpha = brightness * opacity * 0.8;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fillText(char, x * cellWidth, y * cellHeight);
        }
      }

      animationRef.current = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, opacity, noise, getCharForBrightness]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
