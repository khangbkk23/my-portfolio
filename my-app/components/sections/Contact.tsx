// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";
const links = [
    {
        label: "Email",
        value: profile.contact.email,
        href: `mailto:${profile.contact.email}`,
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "text-violet-500",
    },
    {
        label: "GitHub",
        value: `github.com/${profile.contact.github}`,
        href: `https://github.com/${profile.contact.github}`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        color: "text-neutral-700 dark:text-neutral-300",
    },
    {
        label: "LinkedIn",
        value: `linkedin.com/in/${profile.contact.linkedin}`,
        href: `https://linkedin.com/in/${profile.contact.linkedin}`,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        color: "text-blue-500",
    },
    {
        label: "Phone",
        value: profile.contact.phone,
        href: `tel:${profile.contact.phone}`,
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        color: "text-emerald-500",
    },
    {
        label: "Location",
        value: `${profile.city}`,
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-4.5-7.5-7.5-7.5-11.25A7.5 7.5 0 0112 2.25a7.5 7.5 0 017.5 7.5c0 3.75-3 6.75-7.5 11.25z" />
            </svg>
        ),
        color: "text-rose-500",
    }
];

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full py-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">Contact</h2>
                <p className="text-neutral-500 dark:text-neutral-500 mb-12">
                    Open to AI Engineer roles, collaborations, and research opportunities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                {links.map((link, i) => (
                    <GlowCard key={link.label}>
                        <motion.a
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-4"
                        >
                            <span className={`${link.color} group-hover:scale-110 transition-transform`}>
                                {link.icon}
                            </span>
                            <div>
                                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">
                                    {link.label}
                                </p>
                                <p className="text-sm font-medium text-black dark:text-white">
                                    {link.value}
                                </p>
                            </div>
                        </motion.a>
                    </GlowCard>
                ))}
                </div>

                <footer className="border-t border-neutral-100 dark:border-neutral-800 pt-8 text-center">
                    <p className="text-xs text-neutral-400 dark:text-neutral-600">
                        © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind CSS
                    </p>
                </footer>
            </div>
        </motion.div>
    );
}