"use client";

import { motion } from "framer-motion";
import { profile, education, research, activities, languages } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

function SectionLabel({ children }: { children: string }) {
    return (
        <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600 mb-4">
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

            <p className="text-neutral-500 dark:text-neutral-600 mb-6 max-w-8xl">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Education */}
                <div>
                    <SectionLabel>Education</SectionLabel>
                    <div className="flex flex-col gap-3">
                        {education.map((edu, i) => (
                            <GlowCard key={i} className="h-full">
                                <div className="min-h-[120px] flex flex-col justify-between">
                                    <p className="font-semibold text-sm text-black dark:text-white mb-0.5">
                                        {edu.school}
                                    </p>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-0.5">
                                        {edu.degree}
                                    </p>
                                    <p className="text-xs text-neutral-400 dark:text-neutral-500 italic mb-3">
                                        {edu.major}
                                    </p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="font-medium text-violet-600 dark:text-violet-400">
                                            GPA: {edu.gpa}
                                        </span>
                                        <span className="text-neutral-400">{edu.period}</span>
                                    </div>
                                </div>
                            </GlowCard>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <SectionLabel>Languages</SectionLabel>
                    <div className="flex flex-col gap-3">
                        {languages.map((l, i) => (
                            <GlowCard key={i} className="h-full">
                                <div className="transition-all duration-300 group-hover:translate-y-[-2px] min-h-[120px] flex flex-col justify-between">

                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 shrink-0" />
                                        <p className="font-semibold text-sm text-black dark:text-white
          transition-colors duration-300
          group-hover:text-violet-600 dark:group-hover:text-violet-400">
                                            {l.lang}
                                        </p>
                                    </div>

                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pl-3.5
        transition-colors duration-300
        group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                                        {l.level}
                                    </p>

                                </div>
                            </GlowCard>
                        ))}
                    </div>
                </div>

                {/* Research */}
                <div className="lg:col-span-2">
                    <SectionLabel>Research Experience</SectionLabel>

                    <div className="flex flex-col gap-4">
                        {research.map((r, i) => (
                            <GlowCard key={i}>
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                        <div>
                                            <p className="font-semibold text-black dark:text-white text-sm mb-0.5">
                                                {r.institution}
                                            </p>
                                            <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                                                {r.role}
                                            </p>
                                            <p className="text-xs text-neutral-500 mt-0.5 italic">
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

                                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
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
                        ))}
                    </div>
                </div>

                {/* Activities */}
                <div className="lg:col-span-2">
                    <SectionLabel>Leadership & Activities</SectionLabel>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {activities.map((a, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
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