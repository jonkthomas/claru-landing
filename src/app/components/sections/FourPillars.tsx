"use client";

import { motion } from "framer-motion";
import {
  Database,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import TextScramble from "../effects/TextScramble";
import Button from "../ui/Button";

const pillars = [
  {
    id: "acquire",
    number: "01",
    title: "ACQUIRE",
    subtitle: "Source the Impossible",
    description: "Collect diverse, high-quality data at any scale.",
    capabilities: [
      "Human data collection (egocentric video, physical world)",
      "Web-scale data harvesting & licensing",
      "Synthetic data generation (Unreal Engine, AI models)",
    ],
    icon: Database,
    accentColor: "var(--accent-primary)",
  },
  {
    id: "prepare",
    number: "02",
    title: "PREPARE",
    subtitle: "Structure for Scale",
    description: "Transform raw data into ML-ready datasets.",
    capabilities: [
      "Billion-scale deduplication & filtering",
      "Multimodal alignment (video-text, image-audio)",
      "Quality scoring & dataset optimization",
    ],
    icon: Layers,
    accentColor: "var(--accent-secondary)",
  },
  {
    id: "enrich",
    number: "03",
    title: "ENRICH",
    subtitle: "Add Human Intelligence",
    description: "Expert annotation that captures nuance.",
    capabilities: [
      "RLHF & preference ranking",
      "Frame-level video annotation",
      "Expert annotation (STEM, creative, domain specialists)",
    ],
    icon: Sparkles,
    accentColor: "var(--accent-primary)",
  },
  {
    id: "validate",
    number: "04",
    title: "VALIDATE",
    subtitle: "Ensure Quality & Safety",
    description: "Rigorous testing before deployment.",
    capabilities: [
      "Red teaming & safety testing",
      "Benchmark curation & golden datasets",
      "Post-training evaluation & bias detection",
    ],
    icon: ShieldCheck,
    accentColor: "var(--accent-secondary)",
  },
];

// Arrow component for desktop flow visualization
function FlowArrow({ index }: { index: number }) {
  if (index >= pillars.length - 1) return null;

  return (
    <motion.div
      className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
    >
      <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-medium)] flex items-center justify-center">
        <ChevronRight className="w-5 h-5 text-[var(--accent-primary)]" />
      </div>
    </motion.div>
  );
}

// Mobile flow arrow (vertical)
function MobileFlowArrow({ index }: { index: number }) {
  if (index >= pillars.length - 1) return null;

  return (
    <motion.div
      className="lg:hidden flex justify-center py-4"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <div className="w-px h-8 bg-gradient-to-b from-[var(--accent-primary)] to-transparent relative">
        <ChevronRight className="w-4 h-4 text-[var(--accent-primary)] absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-90" />
      </div>
    </motion.div>
  );
}

interface PillarCardProps {
  pillar: (typeof pillars)[0];
  index: number;
}

function PillarCard({ pillar, index }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <motion.div
      id={pillar.id}
      className="relative h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="h-full flex flex-col p-6 lg:p-8 rounded-2xl bg-[var(--bg-secondary)]/80 backdrop-blur-sm border border-[var(--border-subtle)] relative overflow-hidden group"
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className="absolute inset-[-1px] rounded-2xl"
            style={{
              background: `linear-gradient(135deg, var(--accent-primary), transparent, var(--accent-primary))`,
              opacity: 0.4,
            }}
          />
        </div>

        {/* Background pattern on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(146, 176, 144, 0.08) 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/15 flex items-center justify-center border border-[var(--accent-primary)]/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
            </motion.div>
            <span className="font-mono text-xs text-[var(--text-muted)] opacity-60">
              {pillar.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold mb-1 tracking-tight">
            <TextScramble text={pillar.title} scrambleOnHover={true} />
          </h3>

          {/* Subtitle */}
          <p className="text-[var(--accent-secondary)] text-sm font-mono mb-3">
            {pillar.subtitle}
          </p>

          {/* Description */}
          <p className="text-[var(--text-tertiary)] text-sm mb-5">
            {pillar.description}
          </p>

          {/* Capabilities list */}
          <ul className="space-y-2.5 flex-grow">
            {pillar.capabilities.map((capability, capIndex) => (
              <motion.li
                key={capIndex}
                className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 + capIndex * 0.05 }}
              >
                <span className="text-[var(--accent-primary)] mt-1 flex-shrink-0 font-mono text-xs">
                  +
                </span>
                <span className="leading-relaxed">{capability}</span>
              </motion.li>
            ))}
          </ul>

          {/* Corner ASCII decoration */}
          <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[var(--accent-primary)] opacity-20">
            [{pillar.number}]
          </div>
        </div>
      </motion.div>

      {/* Flow arrow for desktop */}
      <FlowArrow index={index} />
    </motion.div>
  );
}

export default function FourPillars() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-transparent"
    >
      {/* ASCII decoration */}
      <div className="absolute top-8 left-8 text-[var(--accent-secondary)] opacity-10 font-mono text-xs hidden lg:block">
        <pre>{`+-[ DATA LIFECYCLE ]----+
| 01 -> 02 -> 03 -> 04  |
+-----------------------+`}</pre>
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
            {"// THE COMPLETE DATA ENGINE"}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Four Pillars.{" "}
            <span className="italic text-[var(--accent-secondary)]">
              <TextScramble text="One Partner." scrambleOnHover={true} />
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            From raw footage to production-ready datasets, we handle every stage
            of the data lifecycle.
          </p>
        </motion.div>

        {/* Desktop: Horizontal 4-column grid with flow arrows */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 relative">
          {/* Flow line behind cards */}
          <motion.div
            className="absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--border-medium)] to-transparent -translate-y-1/2 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Mobile: Vertical stack with flow arrows */}
        <div className="lg:hidden space-y-0">
          {pillars.map((pillar, index) => (
            <div key={pillar.id}>
              <PillarCard pillar={pillar} index={index} />
              <MobileFlowArrow index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA - TLP Framework */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-[var(--text-muted)] font-mono mb-6">
            <span className="text-[var(--accent-primary)]">*</span> End-to-end
            data partnership tailored to your model&apos;s needs
          </p>
          <Button href="#contact" variant="cta-glitch" size="md">
            Start Your Data Partnership →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
