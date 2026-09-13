"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin bar at the very top of the page that fills as the user scrolls down. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const scaleX = shouldReduceMotion ? scrollYProgress : smoothed;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-sage-600"
      style={{ scaleX }}
    />
  );
}
