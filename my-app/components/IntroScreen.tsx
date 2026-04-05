"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

interface IntroScreenProps {
    onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="h-screen w-full flex flex-col justify-center items-center px-5 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
            {/* Floating gradient dots */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-20 left-10 w-3 h-3 rounded-full bg-emerald-400 blur-[2px]"
            />

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-40 right-20 w-2 h-2 rounded-full bg-cyan-400 blur-[2px]"
            />

            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute bottom-32 left-20 w-2.5 h-2.5 rounded-full bg-blue-400 blur-[2px]"
            />

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-emerald-300 blur-[2px]"
            />
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase
          bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm
          text-neutral-500 border-neutral-200 dark:border-neutral-700"
                >
                    Open to opportunities
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                >
                    {profile.name.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.03 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl tracking-widest uppercase text-neutral-500"
                >
                    {profile.title}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-base md:text-lg text-neutral-400 max-w-xl"
                >
                    Building intelligent systems that learn, adapt, and scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-6 text-lg text-neutral-500"
                >
                    <span className="text-emerald-500 font-semibold">GPA 3.71</span>
                    <span>TOEIC L&R 855</span>
                    <span>Computer Vision</span>
                    <span>Natural Language Processing</span>
                    <span>Agentic AI</span>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                        onClick={onEnter}
                        className="relative mt-6 rounded-full p-[1px] group"
                    >
                        {/* Gradient border animated */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-[spin_3s_linear_infinite]" />

                        {/* Inner button */}
                        <div className="relative px-10 py-4 rounded-full text-sm font-semibold
    bg-white dark:bg-neutral-900
    text-black dark:text-white
    backdrop-blur-xl
    group-hover:bg-white/90 dark:group-hover:bg-neutral-900/90
    transition"
                        >
                            Explore My Work →
                        </div>
                    </motion.button>
                    <motion.a
                        href="/resume_khangbuitranduy_v3.2_updated.pdf"
                        download
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: 1.3 }}
                        className="relative mt-6 px-8 py-4 rounded-full text-sm font-medium
  border border-neutral-300 dark:border-neutral-700
  text-neutral-700 dark:text-neutral-300
  hover:border-emerald-400 hover:text-emerald-500
  transition backdrop-blur-sm"
                    >
                        Download CV ↓
                    </motion.a>
                </div>

            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 text-sm text-neutral-400"
            >
                Press Enter or click to begin
            </motion.p>
        </motion.div>
    );
}