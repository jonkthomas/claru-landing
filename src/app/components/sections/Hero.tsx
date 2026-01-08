"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const companies = ["Reka AI", "Moonvalley"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/50 via-transparent to-[var(--bg-primary)]/50 z-10 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 136, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Logo size="lg" animate className="text-[var(--text-primary)]" />
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            The Human Cortex for{" "}
            <span className="text-[var(--accent-primary)] glow-text">
              Your Digital Brain.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Frontier models have hit a wall with commodity data. Stop feeding
            your R&D to a black box. We provide the embedded, expert-grade
            intelligence you need to solve{" "}
            <span className="text-[var(--text-primary)]">reasoning</span>,{" "}
            <span className="text-[var(--text-primary)]">coding</span>, and{" "}
            <span className="text-[var(--text-primary)]">physical reality</span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="#contact" size="lg">
              [ Initialize Your Squad ]
            </Button>
            <Button href="#offerings" variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm text-[var(--text-tertiary)] font-mono">
              Trusted by frontier AI labs
            </p>
            <div className="flex items-center gap-8">
              {companies.map((company, index) => (
                <motion.span
                  key={company}
                  className="text-[var(--text-secondary)] font-mono text-sm opacity-60 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ opacity: 1 }}
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[var(--border-medium)] rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-[var(--accent-primary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
