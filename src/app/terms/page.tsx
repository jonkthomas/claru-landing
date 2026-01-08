import type { Metadata } from "next";
import Logo from "../components/ui/Logo";

export const metadata: Metadata = {
  title: "Terms of Service - Claru",
  description:
    "Terms of Service for Claru - Expert Human Intelligence for AI Labs",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border-subtle)]">
        <div className="container py-6">
          <a href="/">
            <Logo size="sm" className="text-[var(--text-primary)]" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-[var(--text-tertiary)] font-mono mb-12">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                By accessing or using the Claru website and services, you agree
                to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                2. Services Description
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Claru provides expert human intelligence services for AI
                development, including but not limited to data annotation,
                evaluation dataset creation, and embedded expert teams. Specific
                service terms are outlined in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                <li>Provide accurate and complete information</li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                All content on this website, including text, graphics, logos,
                and software, is the property of Claru or its licensors and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                To the maximum extent permitted by law, Claru shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or relating to your use of our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                6. Confidentiality
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Both parties agree to maintain the confidentiality of any
                proprietary or confidential information exchanged during the
                course of our business relationship. This obligation survives
                the termination of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                7. Modifications
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this website. Your
                continued use of our services after any changes indicates your
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                8. Governing Law
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                These terms shall be governed by and construed in accordance
                with the laws of the State of Delaware, United States, without
                regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                9. Contact
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
                <a
                  href="mailto:legal@claru.ai"
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  legal@claru.ai
                </a>
                .
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
            <a
              href="/"
              className="font-mono text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              &larr; Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
