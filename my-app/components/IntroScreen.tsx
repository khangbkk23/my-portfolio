// components/IntroScreen.tsx
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <motion.div
      key="intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-screen w-full flex flex-col justify-center items-center sm:px-10 px-5 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px] dark:opacity-30" />

      {/* Glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tight leading-none"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-400 tracking-widest uppercase"
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-base md:text-lg text-neutral-500 dark:text-neutral-500 max-w-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex items-center gap-6 text-sm text-neutral-400 dark:text-neutral-600"
        >
          <span>GPA 3.71 / 4.00</span>
          <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
          <span>TOEIC 855</span>
          <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
          <span>4 Projects</span>
          <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
          <span>5 Certificates</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
          className="mt-4"
        >
          <button
            onClick={onEnter}
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-950 px-10 text-sm font-semibold text-black dark:text-white backdrop-blur-3xl transition-colors hover:bg-neutral-50 dark:hover:bg-slate-900">
              Explore Portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 text-xs text-neutral-400 dark:text-neutral-600"
      >
        Press Enter or click to begin
      </motion.p>
    </motion.div>
  );
}