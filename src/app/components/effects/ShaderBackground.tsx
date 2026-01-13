// @ts-nocheck - Experimental component with incomplete type definitions from shaders/react
"use client";

import { useEffect, useState, Component, ReactNode } from "react";
import {
  Shader,
  Ascii,
  CRTScreen,
  Godrays,
  SineWave,
  Swirl,
} from "shaders/react";

// Error boundary to catch shader failures
class ShaderErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Shader error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

interface ShaderBackgroundProps {
  variant?: "hero" | "dark" | "subtle";
  className?: string;
}

export default function ShaderBackground({
  variant = "hero",
  className = "",
}: ShaderBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <Shader>
          <CRTScreen
            brightness={2.2}
            colorShift={5}
            contrast={1.1}
            pixelSize={140}
            scanlineFrequency={200}
            scanlineIntensity={0.3}
          >
            <Swirl
              blend={70}
              coarseX={40}
              coarseY={40}
              colorA="#f0efeb"
              colorB="#e8e7e3"
              detail={1.5}
              fineX={60}
              fineY={60}
              mediumX={50}
              mediumY={50}
            />
            <Ascii characters="·:;+=x#@ " fontFamily="JetBrains Mono">
              <Godrays
                center={{ x: 0.8, y: 0.2 }}
                density={0.04}
                rayColor="#92B090"
                speed={0.5}
              />
              <SineWave
                amplitude={0.04}
                color="#71946A"
                frequency={0.4}
                softness={0.9}
                thickness={0.06}
              />
            </Ascii>
          </CRTScreen>
        </Shader>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <Shader>
          <CRTScreen
            brightness={2.0}
            colorShift={8}
            contrast={1.2}
            pixelSize={120}
            scanlineFrequency={180}
            scanlineIntensity={0.4}
          >
            <Swirl
              blend={80}
              coarseX={45}
              coarseY={45}
              colorA="#100C08"
              colorB="#1a1714"
              detail={2.0}
              fineX={55}
              fineY={55}
              mediumX={50}
              mediumY={50}
            />
            <Ascii characters="01 " fontFamily="JetBrains Mono">
              <Godrays
                center={{ x: 0.5, y: 0 }}
                density={0.06}
                rayColor="#92B090"
                speed={0.8}
              />
              <SineWave
                amplitude={0.05}
                color="#92B090"
                frequency={0.5}
                softness={0.85}
                thickness={0.07}
              />
            </Ascii>
          </CRTScreen>
        </Shader>
      </div>
    );
  }

  // Subtle variant
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Shader>
        <Swirl
          blend={60}
          coarseX={30}
          coarseY={30}
          colorA="#f0efeb"
          colorB="#f7f7f7"
          detail={1.2}
          fineX={70}
          fineY={70}
          mediumX={50}
          mediumY={50}
        />
        <SineWave
          amplitude={0.02}
          color="#92B090"
          frequency={0.3}
          softness={0.95}
          thickness={0.03}
        />
      </Shader>
    </div>
  );
}

// Matrix-style binary rain shader for dramatic sections
export function MatrixShader({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden opacity-30 ${className}`}>
      <Shader>
        <Ascii characters="01 " fontFamily="JetBrains Mono">
          <Godrays
            center={{ x: 0.5, y: 0 }}
            density={0.1}
            rayColor="#92B090"
            speed={1.5}
          />
        </Ascii>
      </Shader>
    </div>
  );
}

// CSS fallback for when shaders fail
function SectionShaderFallback({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 100% 50%, rgba(146, 176, 144, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 50%, rgba(113, 148, 106, 0.1) 0%, transparent 50%)
          `,
        }}
      />
      {/* Scanline effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(146, 176, 144, 0.03) 2px,
            rgba(146, 176, 144, 0.03) 4px
          )`,
        }}
      />
    </div>
  );
}

// Binary matrix ASCII shader for section backgrounds - sage green theme
export function SectionAsciiShader({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [shaderSupported, setShaderSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Check if WebGL is supported
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setShaderSupported(false);
      }
    } catch {
      setShaderSupported(false);
    }
  }, []);

  if (!mounted) return null;

  // Use CSS fallback if WebGL not supported
  if (!shaderSupported) {
    return <SectionShaderFallback className={className} />;
  }

  return (
    <ShaderErrorBoundary
      fallback={<SectionShaderFallback className={className} />}
    >
      <div
        className={`absolute inset-0 overflow-hidden opacity-60 ${className}`}
      >
        <Shader>
          <CRTScreen
            brightness={2.0}
            colorShift={6}
            contrast={1}
            curvature={0}
            pixelSize={1500}
            scaleToFill={0}
            scanlineFrequency={250}
            scanlineIntensity={0.15}
          >
            <Swirl
              blend={92}
              coarseX={50}
              coarseY={50}
              colorA="#050505"
              colorB="#080808"
              detail={1.5}
              fineX={50}
              fineY={50}
              mediumX={50}
              mediumY={50}
            />
            <Ascii
              characters="01010101010101010101010101 "
              fontFamily="JetBrains Mono"
              cellSize={8}
              spacing={0.3}
            >
              <Godrays
                center={{ x: 1, y: 0.5 }}
                density={0.04}
                rayColor="#92B090"
                speed={0.6}
              />
              <SineWave
                amplitude={0.04}
                color="#71946A"
                frequency={0.4}
                position={{ x: 0.5, y: 0 }}
                softness={0.9}
                thickness={0.05}
              />
            </Ascii>
          </CRTScreen>
        </Shader>
      </div>
    </ShaderErrorBoundary>
  );
}

// Organic flowing shader for elegant sections
export function FlowShader({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Shader>
        <Swirl
          blend={50}
          coarseX={35}
          coarseY={35}
          colorA="#f0efeb"
          colorB="#e5e4e0"
          detail={2.5}
          fineX={65}
          fineY={65}
          mediumX={50}
          mediumY={50}
        />
        <SineWave
          amplitude={0.08}
          color="#92B090"
          frequency={0.25}
          softness={0.92}
          thickness={0.04}
        />
        <SineWave
          amplitude={0.05}
          color="#71946A"
          frequency={0.35}
          softness={0.88}
          thickness={0.03}
        />
      </Shader>
    </div>
  );
}
