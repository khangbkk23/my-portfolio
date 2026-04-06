// components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { profile, skills } from "@/data/profile";
import { BentoGrid } from "@/components/ui/BentoGrid";

const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
    initial: { opacity: 0, y: 30 },
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
        <div className="w-full min-h-screen relative overflow-hidden pt-24 pb-16">
            <div className="absolute inset-0 -z-20 pointer-events-none opacity-20 blur-xl">
                <BentoGrid className="h-full gap-4 px-6 py-8">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/5 shadow-sm backdrop-blur-sm min-h-[100px]"
                        />
                    ))}
                </BentoGrid>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, rgba(124,77,255,0.18), rgba(79,70,229,0.05) 35%, transparent 55%), radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(99,102,241,0.16), transparent 28%)",
                        backgroundSize: "cover",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(180deg, transparent, rgba(15,23,42,0.1), rgba(15,23,42,0.7))",
                    }}
                />
            </div>

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

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

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-center text-center lg:text-left mb-16 lg:mb-20">

                    <div className="flex flex-col gap-y-4 lg:order-1 items-center lg:items-start">
                        {/* Label */}
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                                <span className="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
                                Student Portfolio
                            </span>
                        </motion.div>

                        {/* Title & Role */}
                        <motion.h1
                            {...fadeUp(0.1)}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-[1.1] tracking-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-violet-400 dark:to-indigo-300">
                                Khang
                            </span>
                            <br />
                            <span className="whitespace-nowrap text-neutral-400 dark:text-neutral-500 text-2xl sm:text-3xl md:text-4xl mt-3 block">
                                AI Engineer | Data Scientist
                            </span>
                        </motion.h1>

                        {/* Location */}
                        <motion.p
                            {...fadeUp(0.2)}
                            className="text-sm text-neutral-400 dark:text-neutral-500 flex items-center gap-2 flex-wrap"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            Currently in Ho Chi Minh City, Vietnam
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            Come from Dong Thap
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-indigo-500/30 dark:from-violet-500/20 dark:to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

                        <motion.div
                            animate={{ y: [-12, 12, -12] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px]"
                        >
                            <Image
                                src="/avt.jpeg"
                                alt="Khang Profile Picture"
                                fill
                                className="object-contain drop-shadow-[0_25px_60px_rgba(99,102,241,0.5)] dark:drop-shadow-[0_25px_60px_rgba(99,102,241,0.3)]"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full flex flex-col items-center gap-y-10">
                    {/* Goals */}
                    <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 w-full text-left">
                        <motion.div
                            whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 10px 40px rgba(99,102,241,0.15)" }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-5"
                        >
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-violet-500 mb-1.5">Short-term</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.shortGoal}</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 10px 40px rgba(99,102,241,0.15)" }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-5"
                        >
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-500 mb-1.5">Long-term</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{profile.longGoal}</p>
                        </motion.div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-2 max-w-2xl">
                        {[...skills.mlDl.slice(0, 2), ...skills.cv.slice(0, 2), ...skills.nlp.slice(0, 2), "DDPG", "RAG"].map((s) => (
                            <motion.span
                                key={s}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                            >
                                {s}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div {...fadeUp(0.5)} className="flex flex-wrap justify-center gap-3 items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:${profile.contact.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold shadow-xl shadow-black/10 dark:shadow-white/10"
                        >
                            Work With Me
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={`https://github.com/${profile.contact.github}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                        >
                            GitHub
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={`https://linkedin.com/in/${profile.contact.linkedin}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 text-sm font-semibold text-neutral-700 dark:text-neutral-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
                        >
                            LinkedIn
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-600"
            >
                <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    ↓
                </motion.span>
                Scroll to explore
            </motion.div>
        </div>
    );
}