// components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";
const groups = [
    { label: "Programming Languages", items: skills.languages, color: "text-amber-500" },
    { label: "ML / DL Core", items: skills.mlDl, color: "text-violet-500" },
    { label: "NLP", items: skills.nlp, color: "text-blue-500" },
    { label: "Computer Vision", items: skills.cv, color: "text-emerald-500" },
    { label: "Reinforcement Learning", items: skills.rl, color: "text-rose-500" },
    { label: "MLOps & Deployment", items: skills.mlops, color: "text-indigo-500" },
    { label: "Databases", items: skills.databases, color: "text-orange-500" },
    { label: "Tools", items: skills.tools, color: "text-teal-500" },
];

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full py-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">Skills</h2>
            <p className="text-neutral-500 dark:text-neutral-500 mb-12">Technical expertise across the full AI/ML stack.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {groups.map((group, i) => (
                    <GlowCard key={group.label}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <p className={`text-[11px] font-semibold tracking-widest uppercase mb-3 ${group.color}`}>
                                {group.label}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {group.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="px-2.5 py-1 rounded-full text-xs font-medium 
              bg-neutral-100 dark:bg-neutral-800 
              text-neutral-600 dark:text-neutral-400 
              border border-neutral-200 dark:border-neutral-700"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </GlowCard>
                ))}
            </div>
        </motion.div>
    );
}