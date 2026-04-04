// components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { profile, education, research, activities, languages } from "@/data/profile";

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
      <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">About Me</h2>
      <p className="text-neutral-500 dark:text-neutral-500 mb-14 max-w-xl">{profile.summary}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionLabel>Education</SectionLabel>
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5"
            >
              <p className="font-semibold text-sm text-black dark:text-white mb-0.5">{edu.school}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-0.5">{edu.degree}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 italic mb-3">{edu.major}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-violet-600 dark:text-violet-400">GPA: {edu.gpa}</span>
                <span className="text-neutral-400">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <SectionLabel>Languages</SectionLabel>
          <div className="flex flex-col gap-3">
            {languages.map((l, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5"
              >
                <p className="font-semibold text-sm text-black dark:text-white mb-1">{l.lang}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{l.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div className="lg:col-span-2">
          <SectionLabel>Research Experience</SectionLabel>
          {research.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <p className="font-semibold text-black dark:text-white text-sm mb-0.5">{r.institution}</p>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">{r.role}</p>
                  <p className="text-xs text-neutral-500 mt-0.5 italic">Topic: {r.topic}</p>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <span className="text-xs text-neutral-400">{r.period}</span>
                  <a href={r.repoUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-indigo-500 hover:underline">
                    Repo ↗
                  </a>
                </div>
              </div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">{r.subject}</p>
              <ul className="flex flex-col gap-2">
                {r.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="lg:col-span-2">
          <SectionLabel>Leadership & Activities</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex gap-3 items-start rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3"
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}