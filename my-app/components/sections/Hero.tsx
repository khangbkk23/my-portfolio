"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, HTMLMotionProps } from "framer-motion"; // Or "motion/react"
import { profile, skills } from "@/data/profile";

const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      
      {/* Theme Toggle Button */}
      {mounted && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed top-6 right-6 z-50 p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-all duration-200"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? (
            // Sun Icon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            // Moon Icon
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </motion.button>
      )}

      {/* Top label */}
      <motion.div {...fadeUp(0)} className="mb-6">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          <span className="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
          Student Portfolio
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        {...fadeUp(0.1)}
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-black dark:text-white leading-[1.05] tracking-tight mb-6"
      >
        Hi, I&apos;m{" "}
        <span className="relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-300">
            Khang
          </span>
        </span>
        <br />
        <span className="text-neutral-400 dark:text-neutral-500">AI Engineer</span>
      </motion.h1>

      {/* Summary */}
      <motion.p
        {...fadeUp(0.2)}
        className="max-w-xl text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8"
      >
        {profile.summary}
      </motion.p>

      {/* Goals */}
      <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-violet-500 mb-1.5">Short-term</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.shortGoal}</p>
        </div>
        <div className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-500 mb-1.5">Long-term</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.longGoal}</p>
        </div>
      </motion.div>

      {/* Quick skill pills */}
      <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2 mb-10">
        {[...skills.mlDl.slice(0, 2), ...skills.cv.slice(0, 2), ...skills.nlp.slice(0, 2), "DDPG", "RAG"].map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
          >
            {s}
          </span>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 items-center">
        <a
          href={`mailto:${profile.contact.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Me
        </a>
        <a
          href={`https://github.com/${profile.contact.github}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${profile.contact.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.span>
        Scroll to explore
      </motion.div>
    </div>
  );
}