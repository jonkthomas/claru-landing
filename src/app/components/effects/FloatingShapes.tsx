"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingShapesProps {
  variant?: "hero" | "section";
  className?: string;
}

export default function FloatingShapes({
  variant = "hero",
  className = "",
}: FloatingShapesProps) {
  const shapes = useMemo(() => {
    if (variant === "hero") {
      return [
        // Large background orbs
        {
          type: "orb",
          size: 600,
          x: "10%",
          y: "20%",
          color: "rgba(146, 176, 144, 0.15)",
          duration: 25,
          delay: 0,
        },
        {
          type: "orb",
          size: 400,
          x: "80%",
          y: "60%",
          color: "rgba(113, 148, 106, 0.12)",
          duration: 30,
          delay: 2,
        },
        {
          type: "orb",
          size: 300,
          x: "60%",
          y: "10%",
          color: "rgba(146, 176, 144, 0.1)",
          duration: 20,
          delay: 1,
        },
        // Geometric shapes
        {
          type: "ring",
          size: 120,
          x: "15%",
          y: "70%",
          color: "rgba(90, 122, 84, 0.2)",
          duration: 15,
          delay: 0,
        },
        {
          type: "ring",
          size: 80,
          x: "85%",
          y: "25%",
          color: "rgba(90, 122, 84, 0.15)",
          duration: 18,
          delay: 3,
        },
        // Small dots
        {
          type: "dot",
          size: 8,
          x: "25%",
          y: "40%",
          color: "rgba(146, 176, 144, 0.5)",
          duration: 8,
          delay: 0,
        },
        {
          type: "dot",
          size: 6,
          x: "70%",
          y: "80%",
          color: "rgba(146, 176, 144, 0.4)",
          duration: 10,
          delay: 2,
        },
        {
          type: "dot",
          size: 10,
          x: "90%",
          y: "50%",
          color: "rgba(90, 122, 84, 0.3)",
          duration: 12,
          delay: 1,
        },
        // Crosses
        {
          type: "cross",
          size: 20,
          x: "30%",
          y: "85%",
          color: "rgba(90, 122, 84, 0.25)",
          duration: 14,
          delay: 0,
        },
        {
          type: "cross",
          size: 16,
          x: "75%",
          y: "15%",
          color: "rgba(90, 122, 84, 0.2)",
          duration: 16,
          delay: 2,
        },
      ];
    }

    // Section variant - more subtle
    return [
      {
        type: "orb",
        size: 300,
        x: "5%",
        y: "30%",
        color: "rgba(146, 176, 144, 0.08)",
        duration: 30,
        delay: 0,
      },
      {
        type: "orb",
        size: 200,
        x: "90%",
        y: "70%",
        color: "rgba(113, 148, 106, 0.06)",
        duration: 25,
        delay: 2,
      },
      {
        type: "dot",
        size: 6,
        x: "20%",
        y: "80%",
        color: "rgba(146, 176, 144, 0.3)",
        duration: 10,
        delay: 1,
      },
    ];
  }, [variant]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </div>
  );
}

interface ShapeProps {
  type: string;
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
  delay: number;
}

function FloatingShape({
  type,
  size,
  x,
  y,
  color,
  duration,
  delay,
}: ShapeProps) {
  const floatAnimation = {
    y: [0, -20, 0, 15, 0],
    x: [0, 10, 0, -10, 0],
    rotate: type === "cross" ? [0, 90, 180, 270, 360] : [0, 5, 0, -5, 0],
    scale: [1, 1.05, 1, 0.98, 1],
  };

  const baseStyle = {
    left: x,
    top: y,
    width: size,
    height: size,
  };

  if (type === "orb") {
    return (
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          ...baseStyle,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
        }}
        animate={floatAnimation}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    );
  }

  if (type === "ring") {
    return (
      <motion.div
        className="absolute rounded-full"
        style={{
          ...baseStyle,
          border: `1px solid ${color}`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          ...floatAnimation,
          scale: [1, 1.1, 1, 0.95, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    );
  }

  if (type === "dot") {
    return (
      <motion.div
        className="absolute rounded-full"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          background: color,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          ...floatAnimation,
          opacity: [0.5, 1, 0.5, 0.8, 0.5],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    );
  }

  if (type === "cross") {
    return (
      <motion.div
        className="absolute"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          transform: "translate(-50%, -50%)",
        }}
        animate={floatAnimation}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <div
          className="absolute top-1/2 left-0 w-full h-[1px]"
          style={{ background: color, transform: "translateY(-50%)" }}
        />
        <div
          className="absolute left-1/2 top-0 h-full w-[1px]"
          style={{ background: color, transform: "translateX(-50%)" }}
        />
      </motion.div>
    );
  }

  return null;
}

// Animated grid lines component
export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Horizontal lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-10"
          style={{ top: `${(i + 1) * 12.5}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-[var(--accent-primary)] to-transparent opacity-10"
          style={{ left: `${(i + 1) * 16.67}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}

// Morphing blob component
export function MorphingBlob({
  className = "",
  color = "rgba(146, 176, 144, 0.15)",
  size = 400,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
