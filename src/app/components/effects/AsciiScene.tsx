"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { useTexture } from "@react-three/drei";
import { Vector2, Mesh } from "three";
import { AsciiEffect } from "./AsciiEffect";

// Robot image plane that responds to scroll
function RobotPlane({
  imagePath,
  position,
  scale,
  parallaxSpeed = 0.1,
  mirrored = false,
}: {
  imagePath: string;
  position: [number, number, number];
  scale: [number, number, number];
  parallaxSpeed?: number;
  mirrored?: boolean;
}) {
  const texture = useTexture(imagePath);
  const meshRef = useRef<Mesh>(null);
  const scrollRef = useRef(0);
  const initialY = position[1];

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Parallax effect based on scroll
      const parallaxOffset = scrollRef.current * parallaxSpeed * 0.01;
      meshRef.current.position.y = initialY - parallaxOffset;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[mirrored ? -scale[0] : scale[0], scale[1], scale[2]]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

// Floating particles in the scene
function Particles({ count = 80 }: { count?: number }) {
  const particlesRef = useRef<
    { x: number; y: number; z: number; speed: number; phase: number }[]
  >([]);
  const timeRef = useRef(0);

  // Initialize particles once
  if (particlesRef.current.length === 0) {
    particlesRef.current = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 10,
      z: Math.random() * 2 - 4,
      speed: 0.2 + Math.random() * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  useFrame((_, delta) => {
    timeRef.current += delta;
  });

  return (
    <>
      {particlesRef.current.map((p, i) => (
        <mesh
          key={i}
          position={[
            p.x + Math.sin(timeRef.current * p.speed + p.phase) * 0.15,
            p.y + Math.cos(timeRef.current * p.speed * 0.5 + p.phase) * 0.15,
            p.z,
          ]}
        >
          <sphereGeometry args={[0.015, 4, 4]} />
          <meshBasicMaterial
            color="#92b090"
            transparent
            opacity={0.25 + Math.sin(timeRef.current + i) * 0.1}
          />
        </mesh>
      ))}
    </>
  );
}

// Main scene content
function SceneContent() {
  const { viewport } = useThree();

  return (
    <>
      {/* Dark background */}
      <color attach="background" args={["#050505"]} />

      {/* Ambient light */}
      <ambientLight intensity={1} />

      {/* Floating particles */}
      <Particles count={60} />

      {/* Robot images */}
      <Suspense fallback={null}>
        {/* Left robot - profile view */}
        <RobotPlane
          imagePath="/images/robot-face2.png"
          position={[-viewport.width * 0.26, 0, 0]}
          scale={[viewport.height * 0.95, viewport.height * 0.95, 1]}
          parallaxSpeed={0.12}
          mirrored={false}
        />

        {/* Bottom right robot - robot-face3 */}
        <RobotPlane
          imagePath="/images/robot-face3.png"
          position={[viewport.width * 0.32, -viewport.height * 0.25, -0.5]}
          scale={[viewport.height * 0.7, viewport.height * 0.7, 1]}
          parallaxSpeed={0.08}
          mirrored={false}
        />
      </Suspense>
    </>
  );
}

export default function AsciiScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState(new Vector2(0, 0));
  const [resolution, setResolution] = useState(new Vector2(1920, 1080));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = rect.height - (e.clientY - rect.top);
        setMousePos(new Vector2(x, y));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      const rect = container.getBoundingClientRect();
      setResolution(new Vector2(rect.width, rect.height));

      const handleResize = () => {
        const rect = container.getBoundingClientRect();
        setResolution(new Vector2(rect.width, rect.height));
      };
      window.addEventListener("resize", handleResize);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent />

        {/* ASCII Effect with PostFX - Sage Green Theme */}
        <EffectComposer>
          <AsciiEffect
            style="dense"
            cellSize={4}
            invert={false}
            color={false}
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              scanlineIntensity: 0.04,
              scanlineCount: 350,
              targetFPS: 0,
              jitterIntensity: 0,
              jitterSpeed: 1,
              mouseGlowEnabled: true,
              mouseGlowRadius: 280,
              mouseGlowIntensity: 1.0,
              vignetteIntensity: 0.2,
              vignetteRadius: 1.5,
              colorPalette: 1, // Sage green
              curvature: 0,
              aberrationStrength: 0.0008,
              noiseIntensity: 0.012,
              noiseScale: 120,
              noiseSpeed: 0.4,
              waveAmplitude: 0,
              waveFrequency: 10,
              waveSpeed: 1,
              glitchIntensity: 0,
              glitchFrequency: 0,
              brightnessAdjust: 0.12,
              contrastAdjust: 1.4,
            }}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
