import type { Metadata } from "next";
import Logo from "../components/ui/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy - Claru",
  description:
    "Privacy Policy for Claru - Expert Human Intelligence for AI Labs",
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-[var(--text-tertiary)] font-mono mb-12">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                1. Introduction
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Claru (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
                respects your privacy and is committed to protecting your
                personal data. This privacy policy explains how we collect, use,
                and safeguard your information when you visit our website or use
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                <li>Contact information (name, email address, company name)</li>
                <li>
                  Technical data (IP address, browser type, device information)
                </li>
                <li>Usage data (how you interact with our website)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                4. Data Security
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                5. Your Rights
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                6. Contact Us
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:privacy@claru.ai"
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  privacy@claru.ai
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
