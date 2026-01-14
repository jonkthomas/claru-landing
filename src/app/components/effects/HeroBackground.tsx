"use client";

import { useDeviceCapability } from "@/app/hooks/useDeviceCapability";
import dynamic from "next/dynamic";

// Lazy load both backgrounds - only one will be used based on device
const ASCIIRobotBackground = dynamic(() => import("./ASCIIRobotBackground"), {
  ssr: false,
});

const MatrixRain = dynamic(() => import("./MatrixRain"), { ssr: false });

/**
 * Hero background that switches between:
 * - Desktop: Full ASCII robot faces (human + robot)
 * - Mobile: Lightweight Matrix rain effect
 *
 * This improves mobile performance by avoiding heavy image loading
 * and complex per-pixel processing on smaller devices.
 */
export default function HeroBackground() {
  const { isMobile, prefersReducedMotion } = useDeviceCapability();

  // On reduced motion, show nothing (static dark background is fine)
  if (prefersReducedMotion) {
    return null;
  }

  // Mobile: lightweight matrix rain
  if (isMobile) {
    return (
      <MatrixRain
        density={0.25} // Lower density for performance
        speed={0.6} // Slower for subtlety
        opacity={0.4} // More subtle
      />
    );
  }

  // Desktop: full ASCII robot faces
  return <ASCIIRobotBackground />;
}
