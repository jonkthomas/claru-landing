"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import ProblemAgitation from "./components/sections/ProblemAgitation";
import FourPillars from "./components/sections/FourPillars";
import Capabilities from "./components/sections/Capabilities";
import Testimonials from "./components/sections/Testimonials";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

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

const ASCIIRobotBackground = dynamic(
  () => import("./components/effects/ASCIIRobotBackground"),
  { ssr: false },
);

const SubtleAsciiShader = dynamic(
  () =>
    import("./components/effects/ShaderBackground").then(
      (mod) => mod.SubtleAsciiShader,
    ),
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
      {/* Canvas ASCII animation with robot images */}
      <ASCIIRobotBackground />

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
