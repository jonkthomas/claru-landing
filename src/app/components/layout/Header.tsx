"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const pillarLinks = [
  {
    href: "/pillars/acquire",
    label: "Acquire",
    description: "Data sourcing & collection",
  },
  {
    href: "/pillars/prepare",
    label: "Prepare",
    description: "Deduplication & filtering",
  },
  {
    href: "/pillars/enrich",
    label: "Enrich",
    description: "Expert annotation & RLHF",
  },
  {
    href: "/pillars/validate",
    label: "Validate",
    description: "Red teaming & QA",
  },
];

const navLinks = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="relative z-10">
              <Logo size="sm" className="text-[var(--text-primary)]" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 flex items-center gap-1">
                  Services
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg p-2 min-w-[220px] shadow-xl">
                    {pillarLinks.map((pillar) => (
                      <Link
                        key={pillar.href}
                        href={pillar.href}
                        className="block px-3 py-2 rounded hover:bg-[var(--bg-primary)] transition-colors"
                      >
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          {pillar.label}
                        </span>
                        <span className="block text-xs text-[var(--text-tertiary)]">
                          {pillar.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--text-primary)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Button href="#contact" size="sm">
                Book a Consultation
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  className="w-6 h-0.5 bg-[var(--text-primary)] block"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-[var(--text-primary)] block"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-[var(--text-primary)] block"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 py-20 overflow-y-auto">
              {/* Services Section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                  Services
                </span>
              </motion.div>
              {pillarLinks.map((pillar, index) => (
                <Link
                  key={pillar.href}
                  href={pillar.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-xl text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                      {pillar.label}
                    </span>
                    <span className="block text-xs text-[var(--text-tertiary)]">
                      {pillar.description}
                    </span>
                  </motion.div>
                </Link>
              ))}
              <div className="w-12 h-px bg-[var(--border-subtle)] my-2" />
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-xl text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: (index + 4) * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  href="#contact"
                  size="lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
