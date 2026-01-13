"use client";

import { useEffect, useRef, useState } from "react";

const ASCII_CHARS = " .,:;i1tfLCG08@#";

interface ASCIIRobotProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function ASCIIRobot({
  className = "",
  width = 400,
  height = 500,
}: ASCIIRobotProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/robot-face.png";

    img.onload = () => {
      setImageLoaded(true);

      const fontSize = 7;
      const cols = Math.floor(canvas.width / (fontSize * 0.6));
      const rows = Math.floor(canvas.height / fontSize);

      const offscreen = document.createElement("canvas");
      offscreen.width = cols;
      offscreen.height = rows;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, cols, rows);
      const imageData = offCtx.getImageData(0, 0, cols, rows);

      const animate = () => {
        timeRef.current += 0.02;
        const time = timeRef.current;

        // Clear canvas
        ctx.fillStyle = "rgba(5, 5, 5, 0.95)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

        // Animation parameters - subtle head tilt and arm movement
        const headTilt = Math.sin(time * 0.5) * 0.015; // Subtle side-to-side head tilt
        const armOffset = Math.sin(time * 0.7) * 2; // Arm movement

        const centerX = cols / 2;
        const centerY = rows / 2;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const dx = x - centerX;
            const dy = y - centerY;

            // Apply head tilt rotation
            const rotatedX = dx * Math.cos(headTilt) - dy * Math.sin(headTilt);
            const rotatedY = dx * Math.sin(headTilt) + dy * Math.cos(headTilt);

            // Apply arm movement to lower portion (arms area)
            let armAdjust = 0;
            if (y > rows * 0.6 && Math.abs(dx) > cols * 0.15) {
              // Lower sides = arm area
              armAdjust = armOffset * (dx > 0 ? 1 : -1) * 0.3;
            }

            let sampleX = Math.round(centerX + rotatedX + armAdjust);
            let sampleY = Math.round(centerY + rotatedY);

            // Clamp to bounds
            sampleX = Math.max(0, Math.min(cols - 1, sampleX));
            sampleY = Math.max(0, Math.min(rows - 1, sampleY));

            const idx = (sampleY * cols + sampleX) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];
            const a = imageData.data[idx + 3];

            if (a < 10) continue;

            let brightness = (r + g + b) / 3;

            // Subtle breathing glow
            const breathe = Math.sin(time * 0.8) * 5;
            brightness += breathe;

            // Eye glow for brightest spots
            if (brightness > 180) {
              const eyePulse = (Math.sin(time * 1.5) + 1) * 10;
              brightness = Math.min(255, brightness + eyePulse);
            }

            brightness = Math.max(0, Math.min(255, brightness));

            const charIndex = Math.floor(
              (brightness / 255) * (ASCII_CHARS.length - 1),
            );
            const char = ASCII_CHARS[charIndex];

            if (char === " " && brightness < 20) continue;

            // Sage green coloring with slight variation
            const hue = 100 + Math.sin(x * 0.05 + y * 0.05 + time * 0.5) * 15;
            const saturation = 20 + (brightness / 255) * 15;
            const lightness = (brightness / 255) * 50 + 15;
            const alpha = 0.6 + (brightness / 255) * 0.4;

            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
            ctx.fillText(char, x * fontSize * 0.6, y * fontSize);
          }
        }

        // Subtle vignette
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          canvas.height * 0.3,
          canvas.width / 2,
          canvas.height / 2,
          canvas.height * 0.7,
        );
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(1, "rgba(5,5,5,0.6)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    img.onerror = () => {
      console.error("Failed to load robot image");
    };

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`${className} ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    />
  );
}
