"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { useDeviceCapability } from "@/app/hooks/useDeviceCapability";

interface MotionProviderProps {
  children: ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  const { prefersReducedMotion } = useDeviceCapability();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
