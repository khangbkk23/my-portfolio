"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Rewards from "@/components/sections/Rewards";
import {
    FaHome, FaUserAlt, FaLaptopCode,
    FaBrain, FaCertificate, FaEnvelope,
    FaMedal,
} from "react-icons/fa";
import Footer from "@/components/sections/Footer";

const navItems = [
    { name: "Home", link: "#home", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaUserAlt /> },
    { name: "Projects", link: "#projects", icon: <FaLaptopCode /> },
    { name: "Skills", link: "#skills", icon: <FaBrain /> },
    { name: "Rewards", link: "#rewards", icon: <FaMedal /> },
    { name: "Certificates", link: "#certificates", icon: <FaCertificate /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash && window.location.hash !== "#intro") {
                setShowIntro(false);
            } else {
                setShowIntro(true);
            }
        };

        checkHash();
        window.addEventListener("hashchange", checkHash);
        
        return () => window.removeEventListener("hashchange", checkHash);
    }, []);

    useEffect(() => {
        if (!showIntro) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Enter") handleEnter();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [showIntro]);

    const handleEnter = () => {
        window.location.hash = "#home";
        setShowIntro(false);
    };

    return (
        <main className="relative bg-white dark:bg-neutral-950 flex justify-center items-center flex-col overflow-hidden mx-auto transition-colors duration-300 min-h-screen">
            <AnimatePresence mode="wait">
                {showIntro ? (
                    <IntroScreen key="intro" onEnter={handleEnter} />
                ) : (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full"
                    >
                        <FloatingNavBar navItems={navItems} />

                        <section id="home">
                            <Hero />
                        </section>

                        <div className="max-w-5xl w-full mx-auto sm:px-10 px-5">
                            <section id="about">
                                <About />
                            </section>

                            <section id="projects">
                                <Projects />
                            </section>

                            <section id="skills">
                                <Skills />
                            </section>

                            <section id="rewards">
                                <Rewards />
                            </section>

                            <section id="certificates">
                                <Certificates />
                            </section>

                            <section id="contact">
                                <Contact />
                            </section>
                            
                            <Footer />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}