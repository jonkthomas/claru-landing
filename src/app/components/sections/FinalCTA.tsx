"use client";

import FadeIn from "../effects/FadeIn";
import ContactForm from "../form/ContactForm";

export default function FinalCTA() {
  return (
    <section id="contact" className="section relative">
      {/* Section divider */}
      <div className="section-divider mb-16 md:mb-24" />

      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Stop Buying Labels.{" "}
            <span className="text-[var(--accent-primary)]">
              Start Leasing Intelligence.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Your model is only as good as the mind that teaches it.
            <br />
            Get the human cortex your digital brain deserves.
          </p>
        </FadeIn>

        {/* Form Container */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-8 md:p-12 relative">
              {/* Terminal decoration */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[var(--bg-tertiary)] border-b border-[var(--border-subtle)] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 font-mono text-xs text-[var(--text-muted)]">
                  claru://contact
                </span>
              </div>

              <div className="pt-8">
                <ContactForm />
              </div>

              {/* ASCII border decoration */}
              <pre className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[8px] text-[var(--border-medium)]">
                {`═══════════════════════════════════════`}
              </pre>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
