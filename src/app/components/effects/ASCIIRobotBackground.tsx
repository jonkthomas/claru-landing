"use client";

import { useEffect, useRef } from "react";

// More detailed ASCII character set for better gradients
const ASCII_CHARS =
  " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

export default function ASCIIRobotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const scrollRef = useRef<number>(0);
  const imageDataRef = useRef<ImageData | null>(null);
  const imageData2Ref = useRef<ImageData | null>(null); // Second robot
  const dimensionsRef = useRef<{ cols: number; rows: number }>({
    cols: 0,
    rows: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 10;
    let cols = 0;
    let rows = 0;

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / (fontSize * 0.6));
      rows = Math.floor(canvas.height / fontSize);
      dimensionsRef.current = { cols, rows };
      loadImage();
    };

    const loadImage = () => {
      const { cols, rows } = dimensionsRef.current;

      // --- LEFT IMAGE (HUMAN) ---
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "/images/robot-face2.png"; // Keeping filename but this is the "Human" side

      img.onload = () => {
        const offscreen = document.createElement("canvas");
        offscreen.width = cols;
        offscreen.height = rows;
        const offCtx = offscreen.getContext("2d");
        if (!offCtx) return;

        offCtx.fillStyle = "rgba(0,0,0,0)";
        offCtx.clearRect(0, 0, cols, rows);

        // SYMMETRY CONFIGURATION
        const imgAspect = img.width / img.height;
        // make them visually equal height (~76.5% of screen, 10% smaller than right side)
        const targetHeight = rows * 0.765;
        const targetWidth = targetHeight * imgAspect;

        // Push slightly off-screen left to frame the content
        const offsetX = -cols * 0.05;
        // Center vertically + move down 10%
        const offsetY = (rows - targetHeight) / 2 + rows * 0.1;

        offCtx.drawImage(img, offsetX, offsetY, targetWidth, targetHeight);
        imageDataRef.current = offCtx.getImageData(0, 0, cols, rows);
      };

      // --- RIGHT IMAGE (ROBOT) ---
      const img2 = new Image();
      img2.crossOrigin = "anonymous";
      img2.src = "/images/robot-face7.png";

      img2.onload = () => {
        const offscreen2 = document.createElement("canvas");
        offscreen2.width = cols;
        offscreen2.height = rows;
        const offCtx2 = offscreen2.getContext("2d");
        if (!offCtx2) return;

        offCtx2.fillStyle = "rgba(0,0,0,0)";
        offCtx2.clearRect(0, 0, cols, rows);

        const img2Aspect = img2.width / img2.height;
        const targetHeight2 = rows * 0.85; // Match height percentage
        const targetWidth2 = targetHeight2 * img2Aspect; // No extra stretch

        // Push slightly off-screen right
        // Canvas width (cols) - Image width + offset
        const offsetX2 = cols - targetWidth2 + cols * 0.05;

        // Align vertical center exactly same as left
        const offsetY2 = (rows - targetHeight2) / 2;

        offCtx2.drawImage(
          img2,
          offsetX2,
          offsetY2,
          targetWidth2,
          targetHeight2,
        );

        imageData2Ref.current = offCtx2.getImageData(0, 0, cols, rows);
      };
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      timeRef.current += 0.015;
      const time = timeRef.current;
      const { cols, rows } = dimensionsRef.current;
      const imageData = imageDataRef.current;
      const scroll = scrollRef.current;

      // Deep dark background
      ctx.fillStyle = "rgba(5, 5, 5, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      const parallaxOffset = scroll * 0.1;
      const centerX = cols / 2;

      // --- RENDER LEFT (HUMAN) ---
      if (imageData) {
        const breathe = Math.sin(time * 0.5) * 0.5; // Slow breath

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            // VIGNETTE: Fade out as we get closer to center
            const distFromCenter = (centerX - x) / centerX; // 1.0 at left edge, 0.0 at center
            if (x > centerX) continue; // Don't verify left image pixels on right side

            // Mask opacity: clear the middle 40% of screen entirely
            let maskAlpha = 1;
            const safeZone = 0.3; // 30% from center
            const normalizedX = x / cols;
            if (normalizedX > 0.5 - safeZone) {
              maskAlpha = Math.max(0, 1 - (normalizedX - (0.5 - safeZone)) * 8);
            }
            if (maskAlpha <= 0) continue;

            const parallaxY = Math.round(parallaxOffset / fontSize);
            let sampleY = y + parallaxY;
            sampleY = Math.max(0, Math.min(rows - 1, sampleY));

            const idx = (sampleY * cols + x) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];

            // Boost visibility for human side (was too dark)
            let brightness = (r + g + b) / 3;
            if (brightness < 10) continue;

            // Contrast curve to make shapes solid
            brightness = (brightness - 50) * 1.5 + 80;
            brightness = Math.max(0, Math.min(255, brightness));

            if (brightness > 180) {
              const glow = Math.sin(time * 2 + x * 0.1) * 15;
              brightness = Math.min(255, brightness + glow);
            }
            brightness += breathe * 5;

            const charIndex = Math.floor(
              (brightness / 255) * (ASCII_CHARS.length - 1),
            );
            const char = ASCII_CHARS[charIndex];
            if (!char || (char === " " && brightness < 40)) continue;

            // SILVERISH SAGE GREEN PALETTE for Human
            // Hue 115-125 (Sage/Muted Green)
            const hue = 120 + Math.sin(x * 0.05 + time) * 5;
            const sat = 25 + (brightness / 255) * 15; // Lower saturation for silver tone
            const light = 55 + (brightness / 255) * 35;
            const alpha = (0.3 + (brightness / 255) * 0.7) * maskAlpha;

            ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
            const renderY = y * fontSize - parallaxOffset * 0.05;
            ctx.fillText(char, x * fontSize * 0.6, renderY);
          }
        }
      }

      // --- RENDER RIGHT (ROBOT) ---
      const imageData2 = imageData2Ref.current;
      if (imageData2) {
        const breathe2 = Math.sin(time * 0.5 + Math.PI) * 0.5; // Alternating breath

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            if (x < centerX) continue; // Optimization: only right side

            // Mask opacity: mirrored logic
            let maskAlpha = 1;
            const safeZone = 0.3;
            const normalizedX = x / cols;
            if (normalizedX < 0.5 + safeZone) {
              maskAlpha = Math.max(0, (normalizedX - 0.5) * 8); // simplified fade in
            }
            if (maskAlpha <= 0) continue;

            const parallaxY = Math.round((parallaxOffset * 0.8) / fontSize);
            let sampleY = y + parallaxY;
            sampleY = Math.max(0, Math.min(rows - 1, sampleY));

            const idx = (sampleY * cols + x) * 4;
            const r = imageData2.data[idx];
            const g = imageData2.data[idx + 1];
            const b = imageData2.data[idx + 2];
            const a = imageData2.data[idx + 3];

            if (a < 10) continue;

            let brightness = (r + g + b) / 3;
            // Robot side is usually clearer, keep distinct
            brightness = (brightness - 20) * 1.2 + 20;
            brightness = Math.max(0, Math.min(255, brightness));

            if (brightness > 180) {
              // Electric glitch effect
              const glitch = Math.random() > 0.99 ? 50 : 0;
              brightness = Math.min(255, brightness + glitch);
            }
            brightness += breathe2 * 5;

            const charIndex = Math.floor(
              (brightness / 255) * (ASCII_CHARS.length - 1),
            );
            const char = ASCII_CHARS[charIndex];
            if (!char || (char === " " && brightness < 20)) continue;

            // SILVERISH SAGE GREEN PALETTE for Robot
            // Hue 110-130 (Sage/Muted Green with slight variation)
            const hue = 118 + Math.sin(y * 0.05 - time) * 8;
            const sat = 30 + (brightness / 255) * 20; // Slightly higher saturation than human side
            const light = 60 + (brightness / 255) * 30;
            const alpha = (0.4 + (brightness / 255) * 0.6) * maskAlpha;

            ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
            const renderY = y * fontSize - parallaxOffset * 0.04;
            ctx.fillText(char, x * fontSize * 0.6, renderY);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
