"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

const SUGGESTED_QUESTIONS = [
    { text: "What are his AI projects and tech stack?" },
    { text: "Kỹ năng lập trình và framework của Khang?" },
    { text: "Tell me about his research" },
    { text: "Anh ấy học trường nào và GPA bao nhiêu?" },
    { text: "Khang có hoạt động hay giải thưởng gì?" },
    { text: "Does he have any professional certificates?" },
];

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "assistant",
            content: "Hi! I'm Khang's AI assistant 👋 Ask me anything about his **skills**, **projects**, or **background** — in English or Vietnamese!",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (open) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [open, messages, loading]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || loading) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text.trim(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);
        setShowSuggestions(false);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMsg]
                        .filter((m) => m.id !== "welcome")
                        .map((m) => ({ role: m.role, content: m.content })),
                }),
            });

            const data = await res.json();
            const assistantMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.reply ?? "Sorry, something went wrong.",
            };
            setMessages((prev) => [...prev, assistantMsg]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: "Sorry, I'm having trouble connecting. Please try again!",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="chat-panel"
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className="fixed bottom-24 right-5 z-50 w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 shrink-0">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                    K
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-black dark:text-white leading-none">Khang&apos;s Assistant</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] text-neutral-500 font-medium">Online · RAG-lite technique - Powered by Groq AI</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 scroll-smooth">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                            msg.role === "user"
                                                ? "bg-violet-600 text-white rounded-br-sm shadow-sm"
                                                : "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-sm shadow-sm"
                                        }`}
                                    >
                                        <ReactMarkdown
                                            components={{
                                                a: ({ node, ...props }) => (
                                                    <a {...props} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 font-medium" />
                                                ),
                                                p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                                                ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-4 mb-2 space-y-1" />,
                                                ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-4 mb-2 space-y-1" />,
                                                li: ({ node, ...props }) => <li {...props} className="" />,
                                                strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-black dark:text-white" />
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </motion.div>
                            ))}

                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
                                        {[0, 1, 2].map((i) => (
                                            <motion.span
                                                key={i}
                                                className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {showSuggestions && messages.length === 1 && !loading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.3 }}
                                    className="flex flex-col gap-2 mt-2"
                                >
                                    <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider ml-1">Suggested Topics</p>
                                    <div className="flex flex-wrap gap-2">
                                        {SUGGESTED_QUESTIONS.map((q, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => sendMessage(q.text)}
                                                className="text-left text-[13px] px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-200 shadow-sm"
                                            >
                                                {q.text}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={bottomRef} className="h-1" />
                        </div>

                        <div className="px-4 py-3 border-t border-neutral-100 dark:border-neutral-800 shrink-0 bg-white dark:bg-neutral-950">
                            <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-transparent focus-within:border-violet-500/30 focus-within:bg-white dark:focus-within:bg-neutral-950 rounded-xl px-3 py-2 transition-all shadow-inner">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about Khang's resume..."
                                    disabled={loading}
                                    className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none disabled:opacity-50"
                                />
                                <button
                                    onClick={() => sendMessage(input)}
                                    disabled={!input.trim() || loading}
                                    className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-700 hover:shadow-md transition-all shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-6 right-6 z-50 flex items-center">
                <AnimatePresence>
                    {(showHint || isHovered) && !open && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: [0, -4, 0] }}
                            exit={{ opacity: 0, x: 10, scale: 0.95 }}
                            transition={{
                                opacity: { duration: 0.2 },
                                x: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                            }}
                            className="absolute right-[70px] whitespace-nowrap px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-xl shadow-xl pointer-events-none flex items-center"
                        >
                            Ask AI assistant about Khang
                            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-neutral-900 dark:border-l-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <motion.button
                    onClick={() => {
                        setOpen((prev) => !prev);
                        setShowHint(false);
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/40 flex items-center justify-center relative"
                >
                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.svg
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="w-6 h-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="w-6 h-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </motion.svg>
                        )}
                    </AnimatePresence>
                    {!open && (
                        <span className="absolute top-[2px] right-[2px] w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950 z-10" />
                    )}
                </motion.button>
            </div>
        </>
    );
}