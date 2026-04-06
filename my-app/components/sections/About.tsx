"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { profile, education, research, activities, languages } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

function SectionLabel({ children }: { children: string }) {
    return (
        <p className="text-base font-semibold tracking-widest uppercase text-neutral-500 dark:text-violet-400 mb-4">
            {children}
        </p>
    );
}

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full py-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">
                About Me
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-8xl">
                {profile.summary}
            </p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 max-w-8xl"
            >
                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I focus on building end-to-end AI systems, from data processing and model training
                    to deployment and real-world usage. I&apos;m particularly interested in research-driven
                    approaches, where ideas from papers are translated into practical implementations.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6">

                <div>
                    <SectionLabel>Education</SectionLabel>
                    <div className="flex flex-col gap-3">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlowCard className="h-full">
                                    <div className="min-h-[120px] flex flex-col justify-between">
                                        <p className="font-semibold text-base text-black dark:text-white mb-0.5">
                                            {edu.school}
                                        </p>
                                        <p className="text-base text-neutral-500 dark:text-neutral-400 mb-0.5">
                                            {edu.degree}
                                        </p>
                                        <p className="text-base text-neutral-400 dark:text-neutral-500 italic mb-3">
                                            {edu.major}
                                        </p>
                                        <div className="flex items-center justify-between text-base">
                                            <span className="font-medium text-violet-600 dark:text-violet-400">
                                                GPA: {edu.gpa}
                                            </span>
                                            <span className="text-neutral-400">{edu.period}</span>
                                        </div>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Languages - Vietnamese */}
                    <div>
                        <SectionLabel>Languages</SectionLabel>
                        <div className="flex flex-col gap-3">
                            {languages.filter(l => l.lang === "Vietnamese").map((l, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <GlowCard className="h-full">
                                        <div className="transition-all duration-300 group-hover:translate-y-[-2px] min-h-[120px] flex flex-col justify-between">

                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 shrink-0" />
                                                    <p className="font-semibold text-base text-black dark:text-white transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                                        {l.lang}
                                                    </p>
                                                </div>

                                                <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 pl-3.5 mb-1 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                                    {l.level}
                                                </p>

                                                {l.description && (
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 pl-3.5 mb-2 italic leading-relaxed">
                                                        {l.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Spacer for consistent height */}
                                            <div className="mt-auto pt-2"></div>

                                        </div>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Languages - English */}
                    <div>
                        <SectionLabel>&nbsp;</SectionLabel>
                        <div className="flex flex-col gap-3">
                            {languages.filter(l => l.lang === "English").map((l, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <GlowCard className="h-full">
                                        <div className="transition-all duration-300 group-hover:translate-y-[-2px] min-h-[120px] flex flex-col justify-between">

                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 shrink-0" />
                                                    <p className="font-semibold text-base text-black dark:text-white transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                                        {l.lang}
                                                    </p>
                                                </div>

                                                <p className="text-base font-medium text-neutral-700 dark:text-neutral-300 pl-3.5 mb-1 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                                    {l.level}
                                                </p>

                                                {l.description && (
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 pl-3.5 mb-2 italic leading-relaxed">
                                                        {l.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* TOEIC Certificate Button */}
                                            {l.cert && (
                                                <div className="pl-3.5 mt-auto pt-2">
                                                    <a
                                                        href="/toeic/toeic_certificates.pdf"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 rounded-full transition-all duration-200"
                                                    >
                                                        <FileText className="w-3 h-3" />
                                                        {l.cert}
                                                    </a>
                                                </div>
                                            )}

                                        </div>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Research */}
                <div>
                    <SectionLabel>Research Experience</SectionLabel>

                    <div className="flex flex-col gap-4">
                        {research.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlowCard>
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <p className="font-semibold text-black dark:text-white text-base mb-0.5">
                                                    {r.institution}
                                                </p>
                                                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                                                    {r.role}
                                                </p>
                                                <p className="text-sm text-neutral-500 mt-0.5 italic">
                                                    Topic: {r.topic}
                                                </p>
                                            </div>

                                            <div className="flex gap-2 items-center shrink-0">
                                                <span className="text-xs text-neutral-400">{r.period}</span>
                                                <a
                                                    href={r.repoUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-medium text-indigo-500 hover:underline"
                                                >
                                                    Repository
                                                </a>
                                            </div>
                                        </div>

                                        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                                            {r.subject}
                                        </p>

                                        <ul className="flex flex-col gap-2">
                                            {r.highlights.map((h, j) => (
                                                <li key={j} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-violet-500" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Activities */}
                <div>
                    <SectionLabel>Leadership & Activities</SectionLabel>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {activities.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="flex gap-3 items-start rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3"
                            >
                                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {a}
                                </p>
                            </motion.div>
                        ))}
                    </div> 
                </div>

            </div>
        </motion.div>
    );
}