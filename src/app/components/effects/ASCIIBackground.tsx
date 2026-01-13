"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";

interface ASCIIBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  opacity?: number;
  variant?: "light" | "dark"; // For different section backgrounds
  color?: string; // Custom color override
}

export default function ASCIIBackground({
  className = "",
  density = 0.5,
  speed = 0.2,
  opacity = 0.08,
  variant = "light",
  color,
}: ASCIIBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // More interesting character set with symbols
  const ASCII_CHARS = useMemo(() => " ·:;+=x#@", []);

  const getCharForBrightness = useCallback(
    (brightness: number): string => {
      const index = Math.floor(brightness * (ASCII_CHARS.length - 1));
      return ASCII_CHARS[Math.min(Math.max(0, index), ASCII_CHARS.length - 1)];
    },
    [ASCII_CHARS],
  );

  // Simplified noise with wave patterns
  const noise = useCallback(
    (x: number, y: number, t: number): number => {
      const scale = 0.015;
      const timeScale = speed * 0.0003;
      const nx = x * scale;
      const ny = y * scale;
      const nt = t * timeScale;

      // Layered wave patterns
      let value = 0;
      value += Math.sin(nx * 1.2 + nt * 0.7) * 0.35;
      value += Math.sin(ny * 0.8 + nt * 0.5) * 0.35;
      value += Math.sin((nx + ny) * 0.6 + nt * 0.4) * 0.2;
      value += Math.sin(nx * ny * 0.02 + nt * 0.2) * 0.1;

      return (value + 1) / 2;
    },
    [speed],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Cell sizing based on density
    const cellWidth = Math.floor(14 / density);
    const cellHeight = Math.floor(22 / density);

    let cols = 0;
    let rows = 0;
    let lastTime = 0;
    const targetFPS = 24;
    const frameInterval = 1000 / targetFPS;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      cols = Math.ceil(rect.width / cellWidth);
      rows = Math.ceil(rect.height / cellHeight);
    };

    // Color based on variant or custom color
    const getColor = (alpha: number): string => {
      if (color) {
        return color.replace(")", `, ${alpha})`).replace("rgb(", "rgba(");
      }
      if (variant === "dark") {
        // Sage green on dark backgrounds
        return `rgba(146, 176, 144, ${alpha})`;
      }
      // Dark sage/black on light backgrounds
      return `rgba(90, 122, 84, ${alpha})`;
    };

    const render = (timestamp: number) => {
      animationRef.current = requestAnimationFrame(render);

      const delta = timestamp - lastTime;
      if (delta < frameInterval) return;
      lastTime = timestamp - (delta % frameInterval);

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const fontSize = Math.floor(cellHeight * 0.75);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const noiseVal = noise(x, y, timestamp);

          if (noiseVal < 0.35) continue;

          const char = getCharForBrightness(noiseVal);
          if (char === " ") continue;

          const alpha = noiseVal * opacity;
          ctx.fillStyle = getColor(alpha);
          ctx.fillText(char, x * cellWidth, y * cellHeight);
        }
      }
    };

    resize();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    window.addEventListener("resize", handleResize);
    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, opacity, noise, getCharForBrightness, variant, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
