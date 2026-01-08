"use client";

import { motion } from "framer-motion";
import FadeIn from "../effects/FadeIn";
import { X, Check } from "lucide-react";

const blackBoxItems = [
  { label: "Transactional", description: "You pay per task." },
  { label: "Opaque", description: "Who labeled this? No idea." },
  { label: "Slow", description: "Feedback takes days to loop." },
  { label: "Commodity", description: "Random crowd workers." },
];

const glassBoxItems = [
  { label: "Relational", description: "You lease a team." },
  { label: "Transparent", description: "You know their names." },
  { label: "Instant", description: "Real-time debug loops." },
  { label: "Expert", description: "PhDs, Coders, Pilots." },
];

export default function ParadigmShift() {
  return (
    <section className="section relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The Paradigm{" "}
            <span className="text-[var(--accent-primary)]">Shift</span>
          </h2>
        </FadeIn>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Black Box (Them) */}
          <FadeIn direction="left">
            <motion.div
              className="relative p-8 lg:p-10 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
              whileHover={{ borderColor: "var(--border-medium)" }}
            >
              {/* Faded overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8 relative">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    The Black Box
                  </h3>
                  <p className="text-sm text-[var(--text-tertiary)] font-mono">
                    // them
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-6 relative">
                {blackBoxItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-mono text-sm text-red-400/60 mt-1">
                      -
                    </span>
                    <div>
                      <span className="font-semibold text-[var(--text-secondary)]">
                        {item.label}:
                      </span>{" "}
                      <span className="text-[var(--text-tertiary)]">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ASCII decoration */}
              <pre className="absolute bottom-4 right-4 font-mono text-[8px] text-[var(--text-muted)] opacity-30">
                {`
  ╔═══════╗
  ║  ???  ║
  ║  ???  ║
  ╚═══════╝
                `}
              </pre>
            </motion.div>
          </FadeIn>

          {/* Glass Box (Us) */}
          <FadeIn direction="right">
            <motion.div
              className="relative p-8 lg:p-10 border border-[var(--accent-primary)]/30 bg-[var(--bg-secondary)]"
              whileHover={{
                borderColor: "var(--accent-primary)",
                boxShadow: "0 0 40px rgba(0, 255, 136, 0.1)",
              }}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-8 relative">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    The Glass Box
                  </h3>
                  <p className="text-sm text-[var(--accent-primary)] font-mono">
                    // us
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-6 relative">
                {glassBoxItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-mono text-sm text-[var(--accent-primary)] mt-1">
                      +
                    </span>
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">
                        {item.label}:
                      </span>{" "}
                      <span className="text-[var(--text-secondary)]">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ASCII decoration */}
              <pre className="absolute bottom-4 right-4 font-mono text-[8px] text-[var(--accent-primary)] opacity-30">
                {`
  ╔═══════╗
  ║ CLEAR ║
  ║ TRANS ║
  ╚═══════╝
                `}
              </pre>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
