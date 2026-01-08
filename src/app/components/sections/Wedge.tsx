"use client";

import { motion } from "framer-motion";
import FadeIn from "../effects/FadeIn";

const offerings = [
  {
    number: "01",
    title: "The Golden Set",
    subtitle: "The Ruler for Your Reality.",
    description:
      "You can't improve what you can't measure. We build pristine, expert-verified \"Answer Keys\" that serve as the undeniable ground truth for your model's evaluation.",
    tagline: "Stop grading on a curve.",
    icon: `
      ╔════════════╗
      ║  ████████  ║
      ║  ██    ██  ║
      ║  ████████  ║
      ║  ██    ██  ║
      ║  ████████  ║
      ╚════════════╝
    `,
  },
  {
    number: "02",
    title: "The Embedded Squad",
    subtitle: "Slack-Ops, Not Tickets.",
    description:
      'Lease a dedicated pod of pre-aligned experts who live in your Slack, join your standups, and share your context. No "Project Managers" in the middle. Just engineers talking to experts.',
    tagline: "End the game of telephone.",
    icon: `
      ┌──────┐┌──────┐
      │ ◉  ◉ ││ ◉  ◉ │
      │  ──  ││  ──  │
      └──────┘└──────┘
         ││      ││
      ┌──┴┴──────┴┴──┐
      │   CONNECTED   │
      └──────────────┘
    `,
  },
  {
    number: "03",
    title: "The Frontier Standard",
    subtitle: "Battle-Tested Methodologies.",
    description:
      "We don't guess at quality. We install the exact operational playbooks, QA hierarchies, and dispute flows used to build the world's leading models.",
    tagline: "Skip the learning curve.",
    icon: `
      ┌─────────────┐
      │ > VERIFIED  │
      │ > TESTED    │
      │ > DEPLOYED  │
      │ ═══════════ │
      │ STATUS: OK  │
      └─────────────┘
    `,
  },
];

export default function Wedge() {
  return (
    <section id="offerings" className="section relative">
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            You don&apos;t need more data.{" "}
            <span className="text-[var(--accent-primary)]">
              You need Truth.
            </span>
          </h2>
        </FadeIn>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <FadeIn key={offering.number} delay={index * 0.15}>
              <motion.div
                className="card h-full flex flex-col relative group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-primary)]/5 to-transparent" />
                </div>

                {/* Number */}
                <div className="font-mono text-[var(--accent-primary)] text-sm mb-4 relative z-10">
                  {offering.number}
                </div>

                {/* ASCII Icon */}
                <pre className="font-mono text-[10px] text-[var(--text-tertiary)] mb-6 leading-tight relative z-10 opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent-primary)] transition-all duration-300">
                  {offering.icon}
                </pre>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 relative z-10">
                  {offering.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[var(--accent-primary)] font-mono text-sm mb-4 relative z-10">
                  {offering.subtitle}
                </p>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 flex-grow relative z-10">
                  {offering.description}
                </p>

                {/* Tagline */}
                <div className="pt-4 border-t border-[var(--border-subtle)] relative z-10">
                  <p className="font-mono text-sm text-[var(--text-tertiary)] italic">
                    {offering.tagline}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
