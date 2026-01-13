"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";

interface MagneticCursorProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
}

export default function MagneticCursor({
  children,
  className = "",
  strength = 0.3,
  radius = 100,
}: MagneticCursorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < radius) {
        const pull = (1 - distance / radius) * strength;
        x.set(distanceX * pull);
        y.set(distanceY * pull);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, strength, radius]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

// Custom cursor component
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      setIsHidden(false);
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [data-cursor-hover]",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-200 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isHovering ? "scale-150" : "scale-100"}`}
        style={{
          width: 40,
          height: 40,
          border: "1px solid var(--accent-primary)",
          borderRadius: "50%",
        }}
      />
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-primary)] rounded-full transition-opacity duration-200 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          width: 4,
          height: 4,
        }}
      />
    </>
  );
}
