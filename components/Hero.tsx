"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Apple, Leaf, Salad, Wheat, ArrowDown } from "lucide-react";
import { site } from "@/data/content";

const floaters = [
  { Icon: Leaf, className: "left-[6%] top-[10%]", size: 26, delay: 0 },
  { Icon: Apple, className: "right-[10%] top-[6%]", size: 22, delay: 1.2 },
  { Icon: Salad, className: "right-[2%] top-[46%]", size: 30, delay: 0.6 },
  { Icon: Wheat, className: "left-[2%] bottom-[8%]", size: 24, delay: 1.8 },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax: the portrait drifts up and the text drifts down slightly
  // as the hero scrolls out of view, giving the section a sense of depth.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -60]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : 40]
  );
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, shouldReduceMotion ? 1 : 0.2]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sage-50 via-paper to-paper pb-16 pt-32 sm:pb-24 sm:pt-40"
    >
      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: textY, opacity: fade }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-white/70 px-4 py-1.5 text-sm text-sage-800">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
            {site.availability}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            {site.name}
          </h1>
          <p className="mt-3 text-xl text-sage-700 sm:text-2xl">{site.role}</p>

          <p className="mt-6 max-w-xl text-balance font-serif text-xl italic leading-relaxed text-ink-soft sm:text-2xl">
            &ldquo;{site.tagline}&rdquo;
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-full bg-sage-700 px-7 py-3.5 text-base font-medium text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-sage-800"
            >
              View Clinical Experience
            </a>
            <a
              href={site.resumeHref}
              download
              className="inline-flex items-center justify-center rounded-full border border-sage-300 bg-white px-7 py-3.5 text-base font-medium text-sage-800 transition-colors hover:bg-sage-50"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: portraitY }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="organic-frame absolute inset-0 bg-gradient-to-br from-sage-200 via-mist-100 to-peach-100" />
          <div className="organic-frame absolute inset-3 overflow-hidden bg-sage-100">
            <Image
              src={site.profileImage}
              alt={`Portrait of ${site.name}, ${site.role}`}
              fill
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {floaters.map(({ Icon, className, size, delay }, i) => (
            <span
              key={i}
              className={`absolute ${className} flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-sage-600 shadow-card ${
                shouldReduceMotion ? "" : "animate-float"
              }`}
              style={{ animationDelay: `${delay}s` }}
              aria-hidden="true"
            >
              <Icon size={size * 0.55} />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-sage-600 transition-colors hover:bg-sage-50"
        >
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
