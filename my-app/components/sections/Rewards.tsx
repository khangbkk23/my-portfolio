"use client";

import { motion } from "framer-motion";
import { rewards } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

const TrophyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

export default function Rewards() {
    return (
        <motion.section
            id="rewards"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="py-24 md:py-28 w-full relative"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">
                        Honors & <span className="text-violet-500">Rewards</span>
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-2xl">
                        A track record of academic excellence, leadership, and community contributions.
                    </p>
                </motion.div>

                {/* XẾP CHỒNG 1 CỘT BẰNG FLEX-COL */}
                <div className="flex flex-col gap-5">
                    {rewards.map((reward, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            className="w-full"
                        >
                            <GlowCard className="w-full">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
                                    
                                    <div className="w-14 h-14 shrink-0 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center border border-violet-200 dark:border-violet-800/50">
                                        <TrophyIcon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                                    </div>

                                    <div className="flex-1 flex flex-col gap-1.5 w-full">
                                        <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                            {reward.title}
                                        </h3>
                                        
                                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                                            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                                                {reward.level} Level
                                            </span>
                                            {reward.rank && (
                                                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                                                    {reward.rank} Prize
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}