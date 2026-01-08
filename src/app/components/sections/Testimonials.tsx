"use client";

import { motion } from "framer-motion";
import FadeIn from "../effects/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were building video generation models and hit a wall. Traditional data vendors gave us inconsistent quality and zero context. Claru dropped a squad of visual effects experts into our Slack channel. They understood our architecture, joined our syncs, and helped us ship features we'd been stuck on for months. They're not a vendor - they're part of the team now.",
    author: "Naeem Talukdar",
    title: "CEO",
    company: "Moonvalley",
    featured: true,
  },
  {
    quote:
      "The difference is night and day. With our previous vendor, we'd wait a week for labeled data, then spend another week fixing errors. With Claru, our experts are in our standup every morning. When there's an edge case, we debug it together in real-time.",
    author: "Senior Research Scientist",
    title: "",
    company: "Reka AI",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="section relative">
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Built for the Labs{" "}
            <span className="text-[var(--accent-primary)]">
              Building the Future.
            </span>
          </h2>
        </FadeIn>

        {/* Testimonials */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.2}>
              <motion.div
                className={`relative p-8 md:p-10 lg:p-12 ${
                  testimonial.featured
                    ? "border border-[var(--accent-primary)]/30 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]"
                    : "border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
                }`}
                whileHover={{
                  borderColor: testimonial.featured
                    ? "var(--accent-primary)"
                    : "var(--border-medium)",
                }}
              >
                {/* Quote decoration */}
                <div className="absolute -top-4 left-8 md:left-10">
                  <div
                    className={`w-8 h-8 flex items-center justify-center ${
                      testimonial.featured
                        ? "bg-[var(--accent-primary)]"
                        : "bg-[var(--bg-elevated)]"
                    }`}
                  >
                    <Quote
                      className={`w-4 h-4 ${
                        testimonial.featured
                          ? "text-[var(--bg-primary)]"
                          : "text-[var(--text-tertiary)]"
                      }`}
                    />
                  </div>
                </div>

                {/* ASCII Quote Marks */}
                <pre className="absolute top-6 right-8 font-mono text-[40px] text-[var(--border-subtle)] leading-none select-none">
                  {`"`}
                </pre>

                {/* Quote Text */}
                <blockquote
                  className={`text-lg md:text-xl leading-relaxed mb-8 ${
                    testimonial.featured
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center font-mono text-sm ${
                      testimonial.featured
                        ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                        : "bg-[var(--bg-elevated)] text-[var(--text-tertiary)]"
                    }`}
                  >
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p
                      className={`font-semibold ${
                        testimonial.featured
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[var(--text-tertiary)] font-mono">
                      {testimonial.title ? `${testimonial.title}, ` : ""}
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Featured badge */}
                {testimonial.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-xs text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2 py-1">
                      FEATURED
                    </span>
                  </div>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
