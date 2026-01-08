"use client";

import { motion } from "framer-motion";
import FadeIn from "../effects/FadeIn";
import { Terminal, Eye, Bot } from "lucide-react";

const capabilities = [
  {
    icon: Terminal,
    title: "Text & Code",
    asciiIcon: `
    ┌─────────┐
    │ > _     │
    │ $ code  │
    │ > run   │
    └─────────┘
    `,
    items: [
      "Complex Reasoning (CoT)",
      "RLHF & Pairwise Ranking",
      "Python/SQL/C++ Debugging",
      "Red Teaming & Safety",
    ],
  },
  {
    icon: Eye,
    title: "Vision & Video",
    asciiIcon: `
    ┌─────────┐
    │  ◉   ◉  │
    │ ┌─────┐ │
    │ │frame│ │
    └─┴─────┴─┘
    `,
    items: [
      "Temporal Segmentation",
      "Physics Consistency Checks",
      "Scenario Staging",
      "Frame-by-Frame Analysis",
    ],
  },
  {
    icon: Bot,
    title: "Robotics & World",
    asciiIcon: `
    ┌─────────┐
    │  [═══]  │
    │   ╱╲    │
    │  ╱  ╲   │
    │ ═    ═  │
    └─────────┘
    `,
    items: [
      "Teleoperation (Remote Driving)",
      "Sim-to-Real Validation",
      "3D Point Cloud Annotation",
      "Edge Case Trajectories",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section relative">
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Universal Reality{" "}
            <span className="text-[var(--accent-primary)]">Support</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] font-mono">
            From Reasoning Chains to Robot Arms.
          </p>
        </FadeIn>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.title} delay={index * 0.15}>
              <motion.div
                className="card h-full flex flex-col group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon Header */}
                <div className="mb-6 relative">
                  {/* Lucide Icon */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <capability.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>

                  {/* ASCII Icon */}
                  <pre className="font-mono text-[10px] text-[var(--text-tertiary)] leading-tight group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {capability.asciiIcon}
                  </pre>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {capability.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3 flex-grow">
                  {capability.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3 text-[var(--text-secondary)]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[var(--accent-primary)] font-mono text-sm mt-0.5">
                        &gt;
                      </span>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="h-0.5 w-0 bg-[var(--accent-primary)] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
