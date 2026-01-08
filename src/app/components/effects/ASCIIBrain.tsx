"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const brainFrames = [
  `
                        ╭──────────────────────╮
                   ╭────┤  NEURAL CORTEX ACTIVE │────╮
              ╭────┘    ╰──────────────────────╯    └────╮
         ╭────┘    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    └────╮
    ╭────┘     ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓     └────╮
   ╭┘      ▓▓▓▓░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▓▓▓▓      └╮
  ╭┘    ▓▓▓░░▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒░░▓▓▓    └╮
 ╭┘   ▓▓░░▒▒▓▓████████▓▓▒▒▒▒▒▒▒▒▒▒▓▓████████▓▓▒▒░░▓▓   └╮
 │  ▓▓░░▒▓▓████▀▀▀▀████▓▓▒▒▒▒▒▒▒▒▓▓████▀▀▀▀████▓▓▒░░▓▓  │
╭┘  ▓░░▒▓███▀        ▀███▓▒▒▒▒▒▒▓███▀        ▀███▓▒░░▓  └╮
│  ▓░░▒▓██▀   ◉  ◉   ▀██▓▒▒▒▒▒▒▓██▀   ◉  ◉   ▀██▓▒░░▓  │
│  ▓░░▒▓██            ██▓▒▒▒▒▒▒▓██            ██▓▒░░▓  │
│  ▓░░▒▓██▄          ▄██▓▒▒▒▒▒▒▓██▄          ▄██▓▒░░▓  │
╰╮ ▓░░▒▓███▄        ▄███▓▒▒▒▒▒▒▓███▄        ▄███▓▒░░▓ ╭╯
 │ ▓▓░░▒▓████▄▄▄▄████▓▓▒▒░░░░▒▒▓▓████▄▄▄▄████▓▓▒░░▓▓ │
 ╰╮ ▓▓░░▒▒▓▓████████▓▓▒▒░░▓▓░░▒▒▓▓████████▓▓▒▒░░▓▓ ╭╯
  ╰╮ ▓▓▓░░▒▒▒▒▓▓▓▓▒▒▒▒░░▓▓▓▓▓▓░░▒▒▒▒▓▓▓▓▒▒▒▒░░▓▓▓ ╭╯
   ╰╮  ▓▓▓▓░░░░░░░░░░▓▓▓      ▓▓▓░░░░░░░░░░▓▓▓▓  ╭╯
    ╰────╮ ▓▓▓▓▓▓▓▓▓▓▓            ▓▓▓▓▓▓▓▓▓▓▓ ╭────╯
         ╰────╮                            ╭────╯
              ╰────╮  HUMAN INTELLIGENCE ╭────╯
                   ╰────────────────────╯
`,
  `
                        ╭──────────────────────╮
                   ╭────┤  NEURAL CORTEX ACTIVE │────╮
              ╭────┘    ╰──────────────────────╯    └────╮
         ╭────┘    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    └────╮
    ╭────┘     ▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒     └────╮
   ╭┘      ▒▒▒▒░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▒▒▒▒      └╮
  ╭┘    ▒▒▒░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░▒▒▒    └╮
 ╭┘   ▒▒░░▓▓▓▓████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓████████▓▓▓▓░░▒▒   └╮
 │  ▒▒░░▓▓▓████▀▀▀▀████▓▓▓▓▓▓▓▓▓▓▓▓████▀▀▀▀████▓▓▓░░▒▒  │
╭┘  ▒░░▓▓███▀        ▀███▓▓▓▓▓▓▓▓███▀        ▀███▓▓░░▒  └╮
│  ▒░░▓▓██▀   ●  ●   ▀██▓▓▓▓▓▓▓▓██▀   ●  ●   ▀██▓▓░░▒  │
│  ▒░░▓▓██            ██▓▓▓▓▓▓▓▓██            ██▓▓░░▒  │
│  ▒░░▓▓██▄          ▄██▓▓▓▓▓▓▓▓██▄          ▄██▓▓░░▒  │
╰╮ ▒░░▓▓███▄        ▄███▓▓▓▓▓▓▓▓███▄        ▄███▓▓░░▒ ╭╯
 │ ▒▒░░▓▓████▄▄▄▄████▓▓▓▓░░░░▓▓▓▓████▄▄▄▄████▓▓░░▒▒ │
 ╰╮ ▒▒░░▓▓▓▓████████▓▓▓▓░░▒▒░░▓▓▓▓████████▓▓▓▓░░▒▒ ╭╯
  ╰╮ ▒▒▒░░▓▓▓▓▓▓▓▓▓▓▓▓░░▒▒▒▒▒▒░░▓▓▓▓▓▓▓▓▓▓░░▒▒▒ ╭╯
   ╰╮  ▒▒▒▒░░░░░░░░░░▒▒▒      ▒▒▒░░░░░░░░░░▒▒▒▒  ╭╯
    ╰────╮ ▒▒▒▒▒▒▒▒▒▒▒            ▒▒▒▒▒▒▒▒▒▒▒ ╭────╯
         ╰────╮                            ╭────╯
              ╰────╮  HUMAN INTELLIGENCE ╭────╯
                   ╰────────────────────╯
`,
];

export default function ASCIIBrain() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Delay the appearance
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Animate between frames
    intervalRef.current = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % brainFrames.length);
    }, 800);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 xl:translate-x-0"
    >
      <pre
        className="font-mono text-[8px] xl:text-[10px] leading-tight text-[var(--accent-primary)] opacity-20 select-none"
        style={{
          textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
          whiteSpace: "pre",
        }}
      >
        {brainFrames[frameIndex]}
      </pre>
    </motion.div>
  );
}
