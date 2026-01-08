"use client";

import { useEffect, useState } from "react";
import ASCIIBackground from "./components/effects/ASCIIBackground";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Wedge from "./components/sections/Wedge";
import ParadigmShift from "./components/sections/ParadigmShift";
import Capabilities from "./components/sections/Capabilities";
import Testimonials from "./components/sections/Testimonials";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ASCII Background Effect */}
      {mounted && <ASCIIBackground opacity={0.08} speed={0.3} density={0.8} />}

      {/* Noise overlay */}
      <div className="noise-overlay fixed inset-0 pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Wedge />
        <ParadigmShift />
        <Capabilities />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
