"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Quote, TrendingUp, Target, Briefcase } from "lucide-react";
import TextScramble, { GlitchText } from "../effects/TextScramble";
import { RevealOnScroll, ParallaxSection } from "../effects/ScrollAnimations";

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

const researcherBackgrounds = [
  { name: "OpenAI", highlight: true },
  { name: "Google DeepMind", highlight: true },
  { name: "Meta AI", highlight: true },
  { name: "Snap Research", highlight: true },
  { name: "Apple ML", highlight: false },
  { name: "NVIDIA", highlight: false },
];

const metrics = [
  {
    value: "10M+",
    label: "annotations delivered",
    icon: TrendingUp,
  },
  {
    value: ">98%",
    label: "annotation accuracy",
    icon: Target,
  },
  {
    value: "50+",
    label: "visual AI projects completed",
    icon: Briefcase,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="section relative overflow-hidden bg-transparent"
    >
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--accent-primary)]/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-[var(--accent-primary)]/3 blur-2xl" />
        </div>
      </motion.div>

      <div className="container relative">
        {/* Section Header */}
        <RevealOnScroll
          animation="slide-up"
          className="text-center mb-12 md:mb-16"
        >
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {isInView ? (
              <GlitchText
                text="Trusted by frontier AI teams"
                className="text-[var(--text-primary)]"
                glitchOnHover
              />
            ) : (
              <span className="text-[var(--text-primary)]">
                Trusted by frontier AI teams
              </span>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Powering research from the world&apos;s most ambitious AI labs
          </p>
        </RevealOnScroll>

        {/* Researcher Background Logos - ambiguous association */}
        <RevealOnScroll animation="fade" className="mb-16 md:mb-20">
          <p className="text-center text-[var(--text-tertiary)] text-sm font-mono uppercase tracking-wider mb-6">
            Serving researchers from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {researcherBackgrounds.map((org, index) => (
              <ResearcherBadge key={org.name} org={org} index={index} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Metrics Section */}
        <RevealOnScroll animation="slide-up" className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </RevealOnScroll>

        {/* Testimonials */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ParallaxSection
              key={testimonial.author}
              speed={0.05 * (index + 1)}
              direction="up"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ResearcherBadgeProps {
  org: { name: string; highlight: boolean };
  index: number;
}

function ResearcherBadge({ org, index }: ResearcherBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        className={`
          px-4 py-2 font-mono text-sm tracking-wide
          transition-all duration-300 cursor-default
          ${
            org.highlight
              ? "text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
              : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
          }
        `}
        whileHover={{ scale: 1.05 }}
      >
        {isHovered ? (
          <TextScramble text={org.name} autoPlay delay={0} />
        ) : (
          org.name
        )}
      </motion.div>
    </motion.div>
  );
}

interface MetricCardProps {
  metric: {
    value: string;
    label: string;
    icon: typeof TrendingUp;
  };
  index: number;
}

function MetricCard({ metric, index }: MetricCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-6 md:p-8 text-center border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden group"
        whileHover={{
          borderColor: "var(--accent-primary)",
          boxShadow: "0 0 40px rgba(146, 176, 144, 0.15)",
        }}
      >
        {/* Animated top line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        {/* Value */}
        <div className="mb-2">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--accent-primary)] font-mono">
            {isHovered ? (
              <TextScramble text={metric.value} autoPlay delay={0} />
            ) : (
              metric.value
            )}
          </span>
        </div>

        {/* Label */}
        <p className="text-[var(--text-secondary)] text-sm md:text-base font-mono">
          {metric.label}
        </p>

        {/* Corner decoration */}
        <div className="absolute bottom-2 right-2 opacity-20">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-[var(--accent-primary)]"
          >
            <path
              d="M0 20L20 0M6 20L20 6M12 20L20 12"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative p-8 md:p-10 lg:p-12 overflow-hidden ${
          testimonial.featured
            ? "border border-[var(--accent-primary)]/30 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]"
            : "border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
        }`}
        whileHover={{
          borderColor: testimonial.featured
            ? "var(--accent-primary)"
            : "var(--border-medium)",
          boxShadow: testimonial.featured
            ? "0 0 60px rgba(146, 176, 144, 0.15)"
            : "none",
        }}
      >
        {/* Scan line effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Quote decoration with animation */}
        <motion.div
          className="absolute -top-4 left-8 md:left-10"
          animate={{ y: isHovered ? -2 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>

        {/* ASCII Quote Marks with animation */}
        <motion.pre
          className="absolute top-6 right-8 font-mono text-[40px] text-[var(--border-subtle)] leading-none select-none"
          animate={{
            opacity: isHovered ? 0.5 : 0.2,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {`"`}
        </motion.pre>

        {/* Quote Text with typewriter-like reveal */}
        <blockquote
          className={`text-lg md:text-xl leading-relaxed mb-8 relative z-10 ${
            testimonial.featured
              ? "text-[var(--text-primary)]"
              : "text-[var(--text-secondary)]"
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Avatar with animation */}
          <motion.div
            className={`w-12 h-12 flex items-center justify-center font-mono text-sm ${
              testimonial.featured
                ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                : "bg-[var(--bg-elevated)] text-[var(--text-tertiary)]"
            }`}
            animate={{
              scale: isHovered ? 1.05 : 1,
              borderColor: isHovered ? "var(--accent-primary)" : "transparent",
            }}
            transition={{ duration: 0.3 }}
            style={{ border: "1px solid transparent" }}
          >
            {testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </motion.div>

          <div>
            <p
              className={`font-semibold ${
                testimonial.featured
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)]"
              }`}
            >
              {isHovered ? (
                <TextScramble text={testimonial.author} autoPlay delay={0} />
              ) : (
                testimonial.author
              )}
            </p>
            <p className="text-sm text-[var(--text-tertiary)] font-mono">
              {testimonial.title ? `${testimonial.title}, ` : ""}
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Featured badge with animation */}
        {testimonial.featured && (
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              y: isHovered ? 0 : 0,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-mono text-xs text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2 py-1 border border-[var(--accent-primary)]/20">
              FEATURED
            </span>
          </motion.div>
        )}

        {/* Corner decorations */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--accent-primary)]"
          >
            <path
              d="M0 24L24 0M8 24L24 8M16 24L24 16"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
