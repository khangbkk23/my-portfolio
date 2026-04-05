"use client";

import { motion } from "framer-motion";

export default function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300" />
      
      <div className="relative rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-5">
        {children}
      </div>
    </motion.div>
  );
}