"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** distance in px the element travels while revealing */
  distance?: number;
  /** direction the element travels in from; "none" only fades/scales in */
  direction?: Direction;
  /** subtle scale-up on reveal, in addition to the fade/slide */
  scale?: boolean;
  as?: "div" | "li";
};

/**
 * Fades (and optionally slides / scales) content into view once as it enters
 * the viewport. Falls back to a plain, static render when the user prefers
 * reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  distance = 18,
  direction = "up",
  scale = false,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = shouldReduceMotion
    ? { x: 0, y: 0 }
    : direction === "left"
      ? { x: -distance, y: 0 }
      : direction === "right"
        ? { x: distance, y: 0 }
        : direction === "up"
          ? { x: 0, y: distance }
          : { x: 0, y: 0 };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: scale && !shouldReduceMotion ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
