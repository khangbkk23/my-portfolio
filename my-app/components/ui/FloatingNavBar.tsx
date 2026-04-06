"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
    name: string;
    link: string;
    icon: React.ReactNode;
}

export function FloatingNavBar({ navItems }: { navItems: NavItem[] }) {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY < lastScrollY || currentY < 80);
            setLastScrollY(currentY);

            const sections = navItems.map((item) => item.link.replace("#", ""));
            let currentActive = "home";

            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const offset = window.innerHeight * 0.3;
                    if (rect.top <= offset && rect.bottom >= offset) {
                        currentActive = id;
                        break;
                    }
                }
            }
            setActive(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, navItems]); // Thêm dependencies

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const id = link.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
    };

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.nav
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none"
                >
                    <div className="pointer-events-auto flex items-center gap-1 px-4 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30">
                        {navItems.map((item) => {
                            const id = item.link.replace("#", "");
                            const isActive = active === id;
                            return (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={(e) => handleClick(e, item.link)}
                                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-black dark:text-white"
                                            : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 text-sm">{item.icon}</span>
                                    <span className="relative z-10 hidden sm:inline text-sm">{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
