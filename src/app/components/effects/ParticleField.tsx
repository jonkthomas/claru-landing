"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
}

export default function ParticleField({
  className = "",
  particleCount = 80, // Reduced from 150
  particleColor = "#00ff88",
}: ParticleFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      rect.width / rect.height,
      0.1,
      1000,
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Disabled for performance
      powerPreference: "high-performance",
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(1); // Fixed at 1 for performance
    container.appendChild(renderer.domElement);

    // Particle geometry
    const particles = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particles[i3] = (Math.random() - 0.5) * rect.width;
      particles[i3 + 1] = (Math.random() - 0.5) * rect.height;
      particles[i3 + 2] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));

    // Simple particle material - no custom shaders needed
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(particleColor),
      size: 3,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation - throttled to 30fps
    let animationId: number;
    let lastTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      // Simple rotation for movement effect
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animationId = requestAnimationFrame(animate);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const rect = container.getBoundingClientRect();
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        renderer.setSize(rect.width, rect.height);
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [particleCount, particleColor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
