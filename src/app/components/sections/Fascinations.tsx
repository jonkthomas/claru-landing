"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Button from "../ui/Button";

// TLP Framework: 18+ Fascination bullets using varied filters
const fascinations = [
  // J1 - Mechanism
  {
    text: "The 'frame-bridging' technique that catches temporal inconsistencies human reviewers miss",
    filter: "mechanism",
  },
  // J2 - Statement + Interest + Benefit
  {
    text: "Why VFX-trained annotators spot 3x more edge cases than crowdsourced workers",
    filter: "statement",
  },
  // J3 - What
  {
    text: "What frontier labs actually need from annotation partners (hint: it's not more labels)",
    filter: "what",
  },
  // J4 - What never
  {
    text: "What never works for scaling robotics datasets—and the counterintuitive approach that does",
    filter: "what-never",
  },
  // J5 - Right? Wrong
  {
    text: "More data = better models—right? Wrong. Here's what actually moves the needle",
    filter: "right-wrong",
  },
  // J6 - Why
  {
    text: "Why 93% of video annotation vendors fail at temporal consistency",
    filter: "why",
  },
  // J7 - When
  {
    text: "When to use synthetic data vs. human collection (the decision framework we use)",
    filter: "when",
  },
  // J8 - Specific Question
  {
    text: "Can your current vendor handle frame-level preference ranking? Most can't",
    filter: "question",
  },
  // J9 - If/Then
  {
    text: "If you're training video models on web-scraped data, you're hitting a ceiling you can't see",
    filter: "if-then",
  },
  // J10 - Quickest/Easiest
  {
    text: "The fastest path from research prototype to production-grade dataset",
    filter: "quickest",
  },
  // J11 - Number
  {
    text: "3 annotation errors that add months to your training cycle (and how to prevent them)",
    filter: "number",
  },
  // J12 - Big Promise
  {
    text: "The dataset architecture used by labs shipping state-of-the-art video models",
    filter: "big-promise",
  },
  // J13 - How
  {
    text: "How to get expert-level domain annotation without building an in-house team",
    filter: "how",
  },
  // J14 - Caution
  {
    text: "CAUTION: The 'scale fast' trap that corrupts 80% of visual AI training sets",
    filter: "caution",
  },
  // J15 - Truth
  {
    text: "The truth about off-the-shelf datasets (and why frontier labs avoid them)",
    filter: "truth",
  },
  // J16 - Best
  {
    text: "The single best predictor of annotation quality (it's not what you think)",
    filter: "best",
  },
  // J17 - Surprising
  {
    text: "The surprising reason smaller, curated datasets often outperform massive ones",
    filter: "surprising",
  },
  // J18 - Are you
  {
    text: "Are you leaving 40% of your model performance on the table with poor data prep?",
    filter: "are-you",
  },
];

export default function Fascinations() {
  return (
    <section
      id="fascinations"
      className="section relative overflow-hidden bg-transparent"
    >
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      {/* ASCII decoration */}
      <div className="absolute top-8 right-8 text-[var(--accent-secondary)] opacity-10 font-mono text-xs hidden lg:block text-right">
        <pre>{`┌─ INSIGHTS ────┐
│ ★ EXCLUSIVE   │
│ ▶ LEARN MORE  │
└───────────────┘`}</pre>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
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
            {"// WHAT WE'VE LEARNED"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Insider Knowledge from{" "}
            <span className="italic text-[var(--accent-secondary)]">
              50+ Visual AI Projects
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Hard-won lessons from partnering with frontier labs on their most
            challenging data problems.
          </p>
        </motion.div>

        {/* Fascinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
          {fascinations.map((fascination, index) => (
            <FascinationCard
              key={index}
              fascination={fascination}
              index={index}
            />
          ))}
        </div>

        {/* CTA - TLP Framework */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[var(--text-secondary)] mb-6 font-mono text-sm">
            Ready to apply these insights to your project?
          </p>
          <Button href="#contact" variant="cta-glitch" size="lg">
            Book a Strategy Call — Limited Q1 Capacity
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface FascinationCardProps {
  fascination: { text: string; filter: string };
  index: number;
}

function FascinationCard({ fascination, index }: FascinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="h-full p-5 rounded-lg bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)] relative overflow-hidden group cursor-default"
        whileHover={{
          borderColor: "var(--accent-primary)",
          backgroundColor: "rgba(146, 176, 144, 0.08)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Hover glow */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-3">
          <motion.div
            className="flex-shrink-0 w-6 h-6 rounded bg-[var(--accent-primary)]/15 flex items-center justify-center mt-0.5"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Zap className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          </motion.div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
            {fascination.text}
          </p>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-2 right-2 font-mono text-[8px] text-[var(--accent-primary)] opacity-20 group-hover:opacity-40 transition-opacity">
          [{String(index + 1).padStart(2, "0")}]
        </div>
      </motion.div>
    </motion.div>
  );
}
