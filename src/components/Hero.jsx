"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwSDBWNTloNjB2MUoiIGZpbGw9IiM4MDgwODAiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-50 dark:opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        <motion.div variants={childVariants} className="inline-block py-1.5 px-4 rounded-full bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800 shadow-sm backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 inline-block mr-2 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        <motion.h1 variants={childVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.1]">
                            Hi, I'm <br className="hidden md:block" /><span className="text-gradient">Muhammad Mustafa</span>
                        </motion.h1>

                        <motion.h2 variants={childVariants} className="text-2xl md:text-4xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
                            I build modern, dynamic web experiences.
                        </motion.h2>

                        <motion.p variants={childVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                            A passionate Frontend Developer & Computer Science graduate from UET Mardan.
                            I specialize in React.js, Next.js (Basics), Node.js (Basics), and MongoDB (Basics) to create stunning, accessible, and full-featured digital experiences.
                        </motion.p>

                        <motion.div variants={childVariants} className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-primary-500/30"
                            >
                                View My Work <ArrowRight size={20} />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-black/40 hover:-translate-y-1"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-md mx-auto z-10">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full rounded-3xl overflow-hidden border-8 border-white dark:border-slate-800/50 shadow-2xl relative z-10"
                            >
                                <Image
                                    src="/Profile.jpeg"
                                    alt="Muhammad Mustafa"
                                    fill
                                    priority
                                    className="object-cover object-top"
                                    sizes="(max-w-md) 100vw, 400px"
                                />
                                <div className="absolute inset-0 rotate-180 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            </motion.div>

                            {/* Additional floating design elements */}
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.999 0C5.373 0 0 5.373 0 11.999c0 6.627 5.373 11.999 11.999 11.999 6.626 0 11.999-5.372 11.999-11.999C23.998 5.373 18.625 0 11.999 0zm5.195 18.254c-1.341.139-2.327-.406-2.585-2.003h-.033c-.499 1.488-1.583 2.128-3.045 2.128-1.936 0-3.136-1.503-3.136-3.793 0-2.486 1.34-3.957 3.518-3.957.942 0 1.638.307 2.052.748h.047L13.84 8.24h2.298l-1.332 7.085c-.09.479.231.761.644.761.628 0 .977-.457.977-1.157 0-.325-.091-.714-.151-.954l2.1-.555c.165.6.286 1.439.286 2.099 0 .886-.441 1.705-1.468 2.735zm-5.69-3.411c-.702 0-1.127.795-1.127 1.836 0 .913.35 1.543.99 1.543.682 0 1.258-.705 1.258-1.805 0-1.042-.424-1.574-1.121-1.574z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Focused on</p>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">Next.js Apps</p>
                                </div>
                            </motion.div>

                            {/* Floating decorative square */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 w-24 h-24 rounded-3xl border-4 border-dashed border-primary-500/30 opacity-60 pointer-events-none -z-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
            >
                <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">Scroll Down</span>
                <div className="w-1 h-8 bg-gradient-to-b from-primary-500 to-transparent rounded-full"></div>
            </motion.div>
        </section>
    );
}
