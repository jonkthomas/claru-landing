"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  animate = false,
}: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const logoText = "CLARU";

  if (animate) {
    return (
      <motion.div
        className={`font-mono font-bold tracking-wider ${sizeClasses[size]} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {logoText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{
              textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <div
      className={`font-mono font-bold tracking-wider ${sizeClasses[size]} ${className}`}
      style={{
        textShadow: "0 0 20px rgba(0, 255, 136, 0.2)",
      }}
    >
      {logoText}
    </div>
  );
}
