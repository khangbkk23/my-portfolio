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
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />

            {/* Floating dots */}
            {[
                "top-20 left-10 bg-emerald-400",
                "top-40 right-20 bg-cyan-400",
                "bottom-32 left-20 bg-blue-400",
                "bottom-20 right-10 bg-emerald-300",
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + i }}
                    className={`absolute w-3 h-3 rounded-full blur-[2px] ${pos}`}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl gap-6">

                {/* 🔥 Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full 
                    bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>

                    <span className="text-xs tracking-wide text-emerald-400 font-medium">
                        Actively seeking opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1 className="text-5xl md:text-7xl font-bold tracking-tight">
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

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl tracking-widest uppercase text-neutral-500"
                >
                    {profile.title}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-lg text-neutral-400 max-w-3xl"
                >
                    If you want to be the best, you have to do the things that other people aren’t willing to do.
                </motion.p>

                {/* 🔥 Info tags (redesign) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap justify-center gap-3 mt-2"
                >
                    {[
                        { label: "GPA 3.71", highlight: true },
                        { label: "TOEIC L&R 855" },
                        { label: "Computer Vision" },
                        { label: "NLP" },
                        { label: "Agentic AI Systems" },
                    ].map((item, i) => (
                        <span
                            key={i}
                            className={`
                                px-4 py-1.5 rounded-full text-sm backdrop-blur-md
                                border transition-all
                                ${item.highlight
                                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-400/30"
                                    : "bg-white/5 text-neutral-400 border-neutral-700 hover:border-neutral-500"}
                            `}
                        >
                            {item.label}
                        </span>
                    ))}
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                        onClick={onEnter}
                        className="relative mt-6 inline-flex overflow-hidden rounded-full p-[2px] group"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34d399_0%,#22d3ee_50%,#34d399_100%)]" />

                        <span className="relative flex items-center justify-center px-10 py-4 rounded-full text-sm font-semibold bg-white dark:bg-neutral-900 text-black dark:text-white group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
                            Explore My Work →
                        </span>
                    </motion.button>

                    <motion.a
                        href="/resume_khangbuitranduy_v3.2_updated.pdf"
                        download
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: 1.3 }}
                        className="relative mt-6 inline-flex overflow-hidden rounded-full p-[2px] group"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#f472b6_50%,#c084fc_100%)]" />

                        <span className="relative flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium bg-white dark:bg-neutral-900 text-black dark:text-white group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
                            Download my CV
                        </span>
                    </motion.a>
                </div>
            </div>

            {/* Footer hint */}
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