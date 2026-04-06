"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

export default function Certificates() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full py-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">
                    Certificates
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-12 text-lg">
                    Continuous learning through professional certifications.
                </p>

                <div className="flex flex-col gap-4">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <GlowCard className="w-full">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-col sm:flex-row sm:items-center gap-4 w-full cursor-pointer"
                                >
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                            <p className="font-bold text-base text-black dark:text-white leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                                {cert.title}
                                            </p>
                                            
                                            {cert.status.includes("Progress") ? (
                                                <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 uppercase tracking-widest">
                                                    {cert.status}
                                                </span>
                                            ) : (
                                                <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 uppercase tracking-widest">
                                                    Completed
                                                </span>
                                            )}
                                        </div>
                                        
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                            {cert.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col sm:items-end gap-1 shrink-0 mt-2 sm:mt-0">
                                        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                                            {cert.platform}{cert.company ? ` · ${cert.company}` : ""}
                                        </p>
                                        <p className="text-xs text-neutral-400">
                                            {cert.period}
                                        </p>
                                    </div>
                                </a>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </motion.div>
    );
}