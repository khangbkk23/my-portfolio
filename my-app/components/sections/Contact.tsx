"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import GlowCard from "@/components/ui/GlowCard";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORM_KEY || ""; 

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
        label: "Facebook",
        value: `facebook.com/${profile.contact.facebook.split('/').filter(Boolean).pop()}`,
        href: profile.contact.facebook,
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
        ),
        color: "text-blue-600",
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
        label: "Phone",
        value: profile.contact.phone,
        href: `tel:${profile.contact.phone.replace(/[^0-9+]/g, '')}`,
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
        href: `http://googleusercontent.com/maps.google.com/?q=${encodeURIComponent(profile.city)}`,
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-4.5-7.5-7.5-7.5-11.25A7.5 7.5 0 0112 2.25a7.5 7.5 0 017.5 7.5c0 3.75-3 6.75-7.5 11.25z" />
            </svg>
        ),
        color: "text-rose-500",
    }
];

export default function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formElement = event.currentTarget; 
        const formData = new FormData(formElement);

        formData.append("access_key", WEB3FORMS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! I'll get back to you soon.");
                formElement.reset();
            } else {
                setResult(data.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Web3Forms Submission Error:", error);
            setResult("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full py-20 relative"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-10">
                
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 tracking-tight">
                    Contact
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 mb-12 text-lg">
                    Open to AI Engineer roles, collaborations, and research opportunities. Let's connect!
                </p>

                <div className="flex flex-col gap-10">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 w-full">
                        {links.map((link, i) => (
                            <GlowCard key={link.label} className="h-full w-full">
                                <motion.a
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center gap-4 p-5 h-full w-full"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors">
                                        <span className={`${link.color} group-hover:scale-110 transition-transform`}>
                                            {link.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-1">
                                            {link.label}
                                        </p>
                                        <p className="text-base font-medium text-black dark:text-white truncate">
                                            {link.value}
                                        </p>
                                    </div>
                                </motion.a>
                            </GlowCard>
                        ))}
                    </div>
                    <div className="w-full max-w-4xl mx-auto mt-4">
                        <GlowCard className="h-full w-full">
                            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-6 sm:p-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-black dark:text-white mb-1">Send a Message</h3>
                                    <p className="text-base text-neutral-500">I will reply as soon as possible.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-transparent focus:border-violet-500 focus:bg-white dark:focus:bg-neutral-950 focus:ring-2 focus:ring-violet-500/20 text-black dark:text-white outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-transparent focus:border-violet-500 focus:bg-white dark:focus:bg-neutral-950 focus:ring-2 focus:ring-violet-500/20 text-black dark:text-white outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Hi Khang, I'd like to discuss..."
                                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-transparent focus:border-violet-500 focus:bg-white dark:focus:bg-neutral-950 focus:ring-2 focus:ring-violet-500/20 text-black dark:text-white outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto px-3 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-3 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                    <p className={`text-sm font-medium text-center sm:text-right ${result.includes("success") ? "text-emerald-500" : "text-amber-500"}`}>
                                        {result}
                                    </p>
                                </div>
                            </form>
                        </GlowCard>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}