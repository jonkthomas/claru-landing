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
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 relative overflow-hidden rounded-full";

  const variantClasses = {
    primary:
      "bg-[var(--bg-dark)] text-[var(--text-on-dark)] border border-[var(--bg-dark)] hover:bg-[var(--bg-dark-secondary)] hover:border-[var(--bg-dark-secondary)]",
    secondary:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--bg-dark)] hover:bg-[var(--bg-dark)] hover:text-[var(--text-on-dark)]",
    ghost:
      "bg-transparent text-[var(--text-secondary)] border-none hover:text-[var(--text-primary)]",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
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
        whileHover={{ y: -2, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
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
        !disabled ? { y: -2, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" } : {}
      }
      whileTap={!disabled ? { y: 0 } : {}}
    >
      {content}
    </motion.button>
  );
}
