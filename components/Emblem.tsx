"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "./ui";

/** The Evoris mark: hands + heart with a solid ring and a slowly turning dashed ring. */
export default function Emblem({ size = 160, draw = true }: { size?: number; draw?: boolean }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <motion.circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="var(--blush)"
          strokeWidth="3.5"
          strokeDasharray="14 12"
          strokeLinecap="round"
          initial={draw ? { opacity: 0, scale: 0.85 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90">
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="var(--blush)"
          strokeWidth="4.5"
          initial={draw ? { pathLength: 0 } : false}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease }}
        />
      </svg>
      <motion.div
        className="absolute inset-[22%]"
        initial={draw ? { opacity: 0, scale: 0.6 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease, delay: 0.5 }}
      >
        <Image src="/hands.png" alt="" fill sizes={`${size}px`} priority />
      </motion.div>
    </div>
  );
}
