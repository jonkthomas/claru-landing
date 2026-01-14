"use client";

import { useEffect, useRef } from "react";
import { useDeviceCapability } from "@/app/hooks/useDeviceCapability";

const MATRIX_CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const ASCII_CHARS = ".,:;i1tfLCG08@#";

interface MatrixRainProps {
  className?: string;
  density?: number; // 0-1, how many columns have rain
  speed?: number; // multiplier for fall speed
  opacity?: number; // base opacity
}

export default function MatrixRain({
  className = "",
  density = 0.4,
  speed = 1,
  opacity = 0.6,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const dropsRef = useRef<
    { y: number; speed: number; length: number; active: boolean }[]
  >([]);

  const { isMobile, prefersReducedMotion } = useDeviceCapability();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile: larger font = fewer columns = less computation
    const fontSize = isMobile ? 16 : 14;
    // Mobile: target ~15 FPS, desktop: ~30 FPS
    const targetFrameTime = isMobile ? 67 : 33;

    let cols = 0;
    let rows = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / (fontSize * 0.7));
      rows = Math.floor(canvas.height / fontSize);

      // Initialize drops
      dropsRef.current = Array(cols)
        .fill(null)
        .map(() => ({
          y: Math.random() * -50,
          speed: 0.3 + Math.random() * 0.5,
          length: 5 + Math.floor(Math.random() * 15),
          active: Math.random() < density,
        }));
    };

    resize();
    window.addEventListener("resize", resize);

    // Render a single static frame for reduced motion
    const renderStaticFrame = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      // Draw scattered static characters
      for (let i = 0; i < dropsRef.current.length; i++) {
        const drop = dropsRef.current[i];
        if (!drop.active) continue;

        const x = i * fontSize * 0.7;
        const staticY = Math.floor(Math.random() * rows);

        ctx.fillStyle = `rgba(146, 176, 144, ${opacity * 0.5})`;
        const char =
          ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
        ctx.fillText(char, x, staticY * fontSize);
      }
    };

    // If reduced motion, render static frame and stop
    if (prefersReducedMotion) {
      renderStaticFrame();
      return () => {
        window.removeEventListener("resize", resize);
      };
    }

    const animate = (timestamp: number) => {
      // FPS throttling
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed < targetFrameTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp - (elapsed % targetFrameTime);
      // Fade effect for trail
      ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const drop = dropsRef.current[i];
        if (!drop.active) continue;

        const x = i * fontSize * 0.7;

        // Draw the trail
        for (let j = 0; j < drop.length; j++) {
          const trailY = drop.y - j;
          if (trailY < 0 || trailY > rows) continue;

          const y = trailY * fontSize;

          // Fade based on position in trail
          const trailFade = 1 - j / drop.length;
          const alpha = opacity * trailFade;

          // Color - bright green for head, fading to sage
          if (j === 0) {
            // Head of the drop - brightest
            ctx.fillStyle = `rgba(146, 255, 144, ${alpha})`;
          } else if (j < 3) {
            // Near head - bright green
            ctx.fillStyle = `rgba(146, 200, 144, ${alpha * 0.8})`;
          } else {
            // Trail - sage green
            ctx.fillStyle = `rgba(146, 176, 144, ${alpha * 0.5})`;
          }

          // Random character
          const charSet = Math.random() < 0.3 ? MATRIX_CHARS : ASCII_CHARS;
          const char = charSet[Math.floor(Math.random() * charSet.length)];

          ctx.fillText(char, x, y);
        }

        // Move drop
        drop.y += drop.speed * speed;

        // Reset when off screen
        if (drop.y - drop.length > rows) {
          drop.y = Math.random() * -20;
          drop.speed = 0.3 + Math.random() * 0.5;
          drop.length = 5 + Math.floor(Math.random() * 15);
          // Randomly toggle active state
          drop.active = Math.random() < density;
        }
      }

      // Occasional new drop activation
      if (Math.random() < 0.02) {
        const inactiveDrops = dropsRef.current.filter((d) => !d.active);
        if (inactiveDrops.length > 0) {
          const randomDrop =
            inactiveDrops[Math.floor(Math.random() * inactiveDrops.length)];
          randomDrop.active = true;
          randomDrop.y = -5;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed, opacity, isMobile, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
