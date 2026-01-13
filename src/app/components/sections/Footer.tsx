"use client";

import Logo from "../ui/Logo";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-16 md:py-24 bg-[var(--bg-secondary)]/80 backdrop-blur-sm z-10"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero">
              <Logo size="md" className="text-[var(--text-primary)]" />
            </a>
            <p className="text-sm text-[var(--text-tertiary)]">
              The complete data engine for frontier visual AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Navigation
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Legal
            </h4>
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
          <p className="text-center text-sm text-[var(--text-muted)]">
            &copy; {currentYear} Claru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
