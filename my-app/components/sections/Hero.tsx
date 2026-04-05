"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, HTMLMotionProps } from "framer-motion";
import { profile, skills } from "@/data/profile";

// 🔥 upgrade: scroll reveal thay vì animate luôn
const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">

            {/* 🔥 glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

            {/* Theme Toggle */}
            {mounted && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="fixed top-6 right-6 z-50 p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-md text-neutral-800 dark:text-neutral-200"
                >
                    {theme === "dark" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </motion.button>
            )}

            {/* Label */}
            <motion.div {...fadeUp(0)} className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                    <span className="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
                    Student Portfolio
                </span>
            </motion.div>

            {/* Title */}
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
            <motion.p {...fadeUp(0.2)} className="max-w-xl text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                {profile.summary}
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-sm text-neutral-400 max-w-xl">
                Built scalable AI systems across Computer Vision, Natural Language Processing, and Reinforcement Learning.
            </motion.p>

            {/* Goals */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">

                {/* 🔥 hover card */}
                <motion.div
                    whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 10px 40px rgba(99,102,241,0.15)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4"
                >
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-violet-500 mb-1.5">Short-term</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.shortGoal}</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 10px 40px rgba(99,102,241,0.15)" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4"
                >
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-500 mb-1.5">Long-term</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.longGoal}</p>
                </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2 mb-10">
                {[...skills.mlDl.slice(0, 2), ...skills.cv.slice(0, 2), ...skills.nlp.slice(0, 2), "DDPG", "RAG"].map((s) => (
                    <motion.span
                        key={s}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                    >
                        {s}
                    </motion.span>
                ))}
            </motion.div>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 items-center">

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${profile.contact.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold"
                >
                    Work With Me
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`https://github.com/${profile.contact.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                    GitHub
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`https://linkedin.com/in/${profile.contact.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                    LinkedIn
                </motion.a>
            </motion.div>

            {/* Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-0 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600"
            >
                <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    ↓
                </motion.span>
                Scroll to explore
            </motion.div>
        </div>
    );
}