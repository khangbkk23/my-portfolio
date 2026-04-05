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
            <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full" />

            {[
                "top-20 left-10 bg-violet-400",
                "top-40 right-20 bg-indigo-400",
                "bottom-32 left-20 bg-blue-400",
                "bottom-20 right-10 bg-purple-300",
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, i % 2 === 0 ? -15 : 15, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + i }}
                    className={`absolute w-5 h-5 rounded-full blur-[2px] ${pos}`}
                />
            ))}

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 px-6 py-2 rounded-full 
                    bg-violet-500/10 border border-violet-500/20 backdrop-blur-md"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-400"></span>
                    </span>

                    <span className="text-sm md:text-base tracking-wide text-violet-300 font-medium">
                        Actively seeking opportunities
                    </span>
                </motion.div>

                <motion.h1 className="text-6xl md:text-7xl lg:text-5xl font-bold tracking-tight">
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
                    className="text-lg md:text-xl lg:text-2xl tracking-widest uppercase text-neutral-500 font-medium"
                >
                    {profile.title}
                </motion.p>

                {/* Description (Tăng lên text-lg md:text-xl) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-4xl leading-relaxed italic"
                >
                    "If you want to be the best, you have to do the things that other people aren’t willing to do."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap justify-center gap-4 mt-4"
                >
                    {[
                        "GPA 3.71",
                        "TOEIC L&R 855",
                        "Computer Vision",
                        "NLP",
                        "Agentic AI Systems",
                    ].map((label, i) => (
                        <span
                            key={i}
                            className="
                                px-6 py-2.5 rounded-full text-base font-medium backdrop-blur-md
                                bg-white/5 text-neutral-800 
                                border border-neutral-700
                                hover:border-neutral-400 hover:text-white
                                hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]
                                transition-all
                            "
                        >
                            {label}
                        </span>
                    ))}
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                        onClick={onEnter}
                        className="relative inline-flex overflow-hidden rounded-full p-[2px] group"
                    >
                        <span 
                            className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#6366f1_50%,#8b5cf6_100%)]" 
                            style={{ animationDuration: '3s' }}
                        />

                        <span className="relative flex items-center justify-center px-12 py-3 rounded-full text-base md:text-lg font-semibold bg-white dark:bg-neutral-900 text-black dark:text-white group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800 transition-colors">
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
                        className="relative inline-flex overflow-hidden rounded-full p-[2px] group"
                    >
                        <span 
                            className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#a78bfa_0%,#f472b6_50%,#a78bfa_100%)]" 
                            style={{ animationDuration: '3s' }}
                        />

                        <span className="relative flex items-center justify-center px-12 py-3 rounded-full text-base md:text-lg font-medium bg-white dark:bg-neutral-900 text-black dark:text-white group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800 transition-colors">
                            Download my CV!
                        </span>
                    </motion.a>
                </div>
            </div>

            {/* Footer hint */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 text-base text-neutral-400"
            >
                Press Enter or click to begin
            </motion.p>
        </motion.div>
    );
}