"use client";

import Logo from "../ui/Logo";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16">
      {/* Top border */}
      <div className="section-divider mb-12" />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo size="md" className="text-[var(--text-primary)]" />
            <p className="text-sm text-[var(--text-tertiary)] font-mono">
              The Human Cortex for Your Digital Brain.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-6">
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-[var(--border-medium)]">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
          <p className="text-center text-sm text-[var(--text-muted)] font-mono">
            &copy; {currentYear} Claru. All rights reserved.
          </p>
        </div>

        {/* ASCII art decoration */}
        <pre className="mt-8 text-center font-mono text-[8px] text-[var(--border-subtle)] leading-tight select-none">
          {`
    ╔══════════════════════════════════════════════════════════╗
    ║                                                          ║
    ║    ░█▀▀░░█░░░░█▀█░░█▀▄░░█░█░                             ║
    ║    ░█░░░░█░░░░█▀█░░█▀▄░░█░█░                             ║
    ║    ░▀▀▀░░▀▀▀░░▀░▀░░▀░▀░░▀▀▀░                             ║
    ║                                                          ║
    ║            Expert Human Intelligence for AI              ║
    ║                                                          ║
    ╚══════════════════════════════════════════════════════════╝
          `}
        </pre>
      </div>
    </footer>
  );
}
