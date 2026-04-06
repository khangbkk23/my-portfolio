"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 w-full relative">
    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">
                        <span className="text-violet-500">Key</span> Projects
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
                        A showcase of my most impactful projects, demonstrating my skills and passion for AI Engineering and Data Science.
                    </p>
                </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((p, i) => (
        <GlowCard key={p.id} className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="cursor-pointer min-h-[280px] flex flex-col"
            onClick={() => setExpanded(expanded === p.id ? null : p.id)}
          >
            {/* Header */}
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-violet-500 mb-1">
                  {p.subtitle}
                </p>

                <h3 className="font-semibold text-black dark:text-white text-base leading-snug transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {p.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm text-neutral-400">{p.period}</span>

                <motion.span
                  animate={{ rotate: expanded === p.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-neutral-400"
                >
                  ↓
                </motion.span>
              </div>
            </div>

            {/* Goal */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
              {p.goal}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3 mt-auto">
              {p.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium 
                  bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-500 dark:text-neutral-400 
                  border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Expand */}
            <AnimatePresence>
              {expanded === p.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">

                    <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                      Details
                    </p>

                    <ul className="flex flex-col gap-2 mb-4">
                      {p.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-violet-500" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                        >
                          Repository
                        </a>
                      )}

                      {p.deployUrl && (
                        <a
                          href={p.deployUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
                        >
                          Deployment
                        </a>
                      )}
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </GlowCard>
      ))}
    </div>
    </section>
  );
}