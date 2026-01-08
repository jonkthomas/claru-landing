"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-mono font-medium transition-all duration-300 relative overflow-hidden";

  const variantClasses = {
    primary:
      "bg-[var(--accent-primary)] text-[var(--bg-primary)] border border-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] hover:border-[var(--accent-secondary)]",
    secondary:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] border-none hover:text-[var(--text-primary)]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={allClasses}
        whileHover={{ y: -2, boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" }}
        whileTap={{ y: 0 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        !disabled ? { y: -2, boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" } : {}
      }
      whileTap={!disabled ? { y: 0 } : {}}
    >
      {content}
    </motion.button>
  );
}
