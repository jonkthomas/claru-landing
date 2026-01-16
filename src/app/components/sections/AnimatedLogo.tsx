"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          {/* Animated logo GIF with edge fade */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src="/images/logo-animated-small.gif"
              alt="Claru animated logo"
              fill
              className="object-contain"
              unoptimized
              style={{
                maskImage:
                  "radial-gradient(circle, black 40%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 40%, transparent 70%)",
              }}
            />
          </div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 font-mono text-sm text-[var(--text-tertiary)] tracking-[0.3em]"
          >
            CLARU
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
