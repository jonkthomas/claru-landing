"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { AlertTriangle, Database, Clock } from "lucide-react";
import FadeIn from "../effects/FadeIn";
import Button from "../ui/Button";

const SectionAsciiShader = dynamic(
  () =>
    import("../effects/ShaderBackground").then((mod) => mod.SectionAsciiShader),
  { ssr: false },
);

interface PainPoint {
  number: string;
  icon: typeof AlertTriangle;
  stat: string;
  title: string;
  description: string;
  ascii: string;
}

const painPoints: PainPoint[] = [
  {
    number: "01",
    icon: Database,
    stat: "100x",
    title: "The Data Multiplier Problem",
    description:
      "Training video models requires 100x more data than LLMs—and most of it doesn't exist yet.",
    ascii: "[ ]",
  },
  {
    number: "02",
    icon: AlertTriangle,
    stat: "CEILING",
    title: "The Quality Ceiling",
    description:
      "Crowdsourced annotators can't handle frame-level temporal consistency. Your model quality ceiling is your data quality ceiling.",
    ascii: "[!]",
  },
  {
    number: "03",
    icon: Clock,
    stat: "HOURS",
    title: "The Scale Constraint",
    description:
      "Robotics datasets are measured in hours, not terabytes. The real world is hard to scale.",
    ascii: "[~]",
  },
];

export default function ProblemAgitation() {
  return (
    <section
      id="problem"
      className="section relative overflow-hidden bg-transparent"
    >
      {/* ASCII shader background */}
      <SectionAsciiShader />

      {/* ASCII decoration */}
      <div className="absolute top-8 left-8 text-[var(--accent-secondary)] opacity-10 font-mono text-xs hidden lg:block">
        <pre>{`┌─ CHALLENGE ──┐
│ ▲ WARNING    │
└──────────────┘`}</pre>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <motion.span
            className="inline-block text-sm font-mono text-[var(--accent-secondary)] mb-4 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"// THE PROBLEM"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Visual AI has a{" "}
            <span className="italic text-[var(--accent-secondary)]">
              data problem.
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            The challenges that held back language models are exponentially
            harder for video, vision, and robotics.
          </p>
        </FadeIn>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {painPoints.map((point, index) => (
            <PainPointCard key={point.number} point={point} index={index} />
          ))}
        </div>

        {/* Bridge Text */}
        <FadeIn delay={0.4} className="text-center">
          <div className="relative inline-block">
            {/* Decorative lines */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--border-accent)] to-transparent -z-10" />

            <div className="bg-[var(--bg-primary)] px-8 py-6 rounded-xl border border-[var(--border-accent)] relative">
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[var(--accent-primary)]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[var(--accent-primary)]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-[var(--accent-primary)]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[var(--accent-primary)]" />

              <p className="font-mono text-[var(--accent-primary)] text-sm md:text-base">
                <span className="text-[var(--text-muted)]">{"> "}</span>
                The visual AI data problem is different.
              </p>
              <p className="text-[var(--text-primary)] text-lg md:text-xl font-semibold mt-2">
                We built Claru specifically to solve it.
              </p>
            </div>
          </div>

          {/* CTA - TLP Framework: Repeat CTAs */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button href="#contact" variant="cta-glitch" size="md">
              See How We Solve It →
            </Button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

interface PainPointCardProps {
  point: PainPoint;
  index: number;
}

function PainPointCard({ point, index }: PainPointCardProps) {
  const Icon = point.icon;

  return (
    <FadeIn delay={index * 0.15}>
      <motion.div
        className="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border-subtle)] relative overflow-hidden group"
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Warning stripe accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-tertiary)] via-[var(--accent-primary)] to-[var(--accent-tertiary)] opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Background pattern on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(146, 176, 144, 0.08) 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/15 border border-[var(--border-accent)] flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
              </motion.div>
              <span className="font-mono text-xs text-[var(--accent-primary)] opacity-60">
                {point.ascii}
              </span>
            </div>
            <span className="font-mono text-sm text-[var(--text-muted)]">
              {point.number}
            </span>
          </div>

          {/* Stat highlight */}
          <div className="mb-4">
            <span className="font-mono text-2xl md:text-3xl font-bold text-[var(--accent-secondary)] tracking-tight">
              {point.stat}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold mb-3 text-[var(--text-primary)]">
            {point.title}
          </h3>

          {/* Description - using JetBrains Mono for technical text */}
          <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
            {point.description}
          </p>
        </div>

        {/* Corner ASCII decoration */}
        <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[var(--accent-primary)] opacity-20">
          [{point.number}]
        </div>
      </motion.div>
    </FadeIn>
  );
}
