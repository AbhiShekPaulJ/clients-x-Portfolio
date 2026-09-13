"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { nav, site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(38,48,42,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-serif text-lg text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700">
            <Leaf className="h-4 w-4" aria-hidden="true" />
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex text-center">
          {nav
            .filter((item) => item.label !== "Book a Session")
            .map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-sage-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>

        <a
          href={site.resumeHref}
          download
          className="hidden rounded-full border border-sage-300 px-4 py-1 text-sm text-center font-medium text-sage-800 transition-colors hover:bg-sage-50 lg:inline-block"
        >
          Download <br /> Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sage-200 text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sage-100 bg-paper lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base text-ink-soft transition-colors hover:bg-sage-50 hover:text-sage-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={site.resumeHref}
                  download
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-sage-700 px-3 py-3 text-center text-base font-medium text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
