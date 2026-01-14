"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import { SectionSkeleton } from "./components/ui/Skeleton";

// Dynamic imports for below-the-fold sections with loading skeletons
const ProblemAgitation = dynamic(
  () => import("./components/sections/ProblemAgitation"),
  { ssr: false, loading: () => <SectionSkeleton /> },
);

const FourPillars = dynamic(() => import("./components/sections/FourPillars"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

const Capabilities = dynamic(
  () => import("./components/sections/Capabilities"),
  { ssr: false, loading: () => <SectionSkeleton /> },
);

const Testimonials = dynamic(
  () => import("./components/sections/Testimonials"),
  { ssr: false, loading: () => <SectionSkeleton minHeight="min-h-[40vh]" /> },
);

const FinalCTA = dynamic(() => import("./components/sections/FinalCTA"), {
  ssr: false,
  loading: () => <SectionSkeleton minHeight="min-h-[50vh]" />,
});

// Dynamic imports for effects and providers
const LenisProvider = dynamic(
  () => import("./components/providers/LenisProvider"),
  { ssr: false },
);

const CustomCursor = dynamic(
  () =>
    import("./components/effects/MagneticCursor").then(
      (mod) => mod.CustomCursor,
    ),
  { ssr: false },
);

const HeroBackground = dynamic(
  () => import("./components/effects/HeroBackground"),
  { ssr: false },
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LenisProvider>
      {/* Canvas ASCII animation - robots on desktop, matrix rain on mobile */}
      <HeroBackground />

      {/* Custom cursor - desktop only */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* Noise overlay for texture */}
      <div className="noise-overlay-animated" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <ProblemAgitation />
        <FourPillars />
        <Capabilities />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </LenisProvider>
  );
}
