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
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">Certificates</h2>
        <p className="text-neutral-500 dark:text-neutral-500 mb-12">Continuous learning through professional certifications.</p>

        <div className="flex flex-col gap-3">
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4 min-h-[100px] hover:border-violet-300 dark:hover:border-violet-800 transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm text-black dark:text-white leading-snug">{cert.title}</p>
                  {cert.status.includes("Progress") ? (
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {cert.status}
                    </span>
                  ) : (
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      ✓ Completed
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">{cert.desc}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 shrink-0">
                <p className="text-xs font-medium text-neutral-500">{cert.platform}{cert.company ? ` · ${cert.company}` : ""}</p>
                <p className="text-xs text-neutral-400">{cert.period}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}