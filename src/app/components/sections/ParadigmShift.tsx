"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { X, Check, Minus, Plus } from "lucide-react";
import TextScramble from "../effects/TextScramble";

const blackBoxItems = [
  { label: "Transactional", description: "You pay per task.", ascii: "[ ]" },
  { label: "Opaque", description: "Who labeled this? No idea.", ascii: "███" },
  { label: "Slow", description: "Feedback takes days to loop.", ascii: "..." },
  { label: "Commodity", description: "Random crowd workers.", ascii: "???" },
];

const glassBoxItems = [
  { label: "Relational", description: "You lease a team.", ascii: "[✓]" },
  { label: "Transparent", description: "You know their names.", ascii: "░░░" },
  { label: "Instant", description: "Real-time debug loops.", ascii: ">>>" },
  { label: "Expert", description: "PhDs, Coders, Pilots.", ascii: "***" },
];

export default function ParadigmShift() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const vsRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="section relative overflow-hidden bg-transparent"
    >
      {/* ASCII decoration top */}
      <div className="absolute top-8 left-8 text-[var(--accent-secondary)] opacity-10 font-mono text-xs hidden lg:block">
        <pre>{`╔══════════════╗
║  COMPARING   ║
║  PARADIGMS   ║
╚══════════════╝`}</pre>
      </div>

      <div className="absolute top-8 right-8 text-[var(--accent-secondary)] opacity-10 font-mono text-xs hidden lg:block text-right">
        <pre>{`┌──────────────┐
│  SELECT ONE  │
│  ▶ OPTION 2  │
└──────────────┘`}</pre>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-sm font-mono text-[var(--accent-secondary)] mb-4 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"// CHOOSE YOUR PATH"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            The Paradigm{" "}
            <TextScramble
              text="Shift"
              className="italic text-[var(--accent-secondary)]"
              scrambleOnHover={true}
            />
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Black Box (Them) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ComparisonCard
              type="black"
              title="The Black Box"
              subtitle="Traditional vendors"
              items={blackBoxItems}
              icon={X}
            />
          </motion.div>

          {/* Glass Box (Us) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ComparisonCard
              type="glass"
              title="The Glass Box"
              subtitle="The Claru way"
              items={glassBoxItems}
              icon={Check}
            />
          </motion.div>

          {/* Center divider */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-[var(--border-medium)] flex items-center justify-center bg-[var(--bg-primary)] shadow-lg"
              style={{ rotate: vsRotate }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-bold font-mono text-[var(--accent-secondary)]">
                VS
              </span>
            </motion.div>
          </div>

          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-red-200 via-transparent to-[var(--accent-primary)] opacity-30" />
        </div>
      </div>
    </section>
  );
}

interface ComparisonCardProps {
  type: "black" | "glass";
  title: string;
  subtitle: string;
  items: { label: string; description: string; ascii: string }[];
  icon: typeof X;
}

function ComparisonCard({
  type,
  title,
  subtitle,
  items,
  icon: Icon,
}: ComparisonCardProps) {
  const isGlass = type === "glass";

  return (
    <motion.div
      className={`relative p-8 lg:p-10 rounded-2xl overflow-hidden group ${
        isGlass
          ? "bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 backdrop-blur-sm"
          : "bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)] backdrop-blur-sm"
      }`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border glow for glass card */}
      {isGlass && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(45deg, var(--accent-primary), transparent, var(--accent-primary))",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Card inner */}
      <div className="relative rounded-xl">
        <div>
          {/* ASCII corner decoration */}
          <div
            className={`absolute top-2 right-2 font-mono text-[10px] opacity-30 ${
              isGlass ? "text-[var(--accent-primary)]" : "text-red-400"
            }`}
          >
            {isGlass ? "[ACTIVE]" : "[LEGACY]"}
          </div>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isGlass ? "bg-[var(--accent-primary)]/20" : "bg-red-500/20"
              }`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon
                className={`w-6 h-6 ${
                  isGlass ? "text-[var(--accent-primary)]" : "text-red-400"
                }`}
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                <TextScramble text={title} scrambleOnHover={true} />
              </h3>
              <p
                className={`text-sm font-mono ${isGlass ? "text-[var(--accent-primary)]" : "text-[var(--text-tertiary)]"}`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                  isGlass
                    ? "hover:bg-white/10"
                    : "hover:bg-[var(--bg-tertiary)]/50"
                }`}
                initial={{ opacity: 0, x: isGlass ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* ASCII indicator */}
                <span
                  className={`font-mono text-xs mt-1 w-8 ${
                    isGlass ? "text-[var(--accent-primary)]" : "text-red-400"
                  }`}
                >
                  {item.ascii}
                </span>
                <div className="flex-1">
                  <span className="font-semibold text-[var(--text-primary)]">
                    {item.label}
                  </span>
                  <p className="text-sm mt-0.5 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
                {/* Side icon */}
                {isGlass ? (
                  <Plus className="w-4 h-4 text-[var(--accent-primary)] mt-1" />
                ) : (
                  <Minus className="w-4 h-4 text-red-400 mt-1" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom ASCII art */}
          <div
            className={`mt-6 pt-4 border-t font-mono text-[10px] ${
              isGlass
                ? "border-white/10 text-[var(--accent-primary)]"
                : "border-[var(--border-subtle)] text-red-400"
            } opacity-40`}
          >
            {isGlass
              ? "▓▓▓▓▓▓▓▓▓▓ 100% TRANSPARENT"
              : "████████░░ 80% OBSCURED"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
