"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 bg-white/50 dark:bg-slate-900/50" id="about">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-gradient">Me</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image & Quick Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative mx-auto max-w-sm group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
                                {/* Image container with premium borders */}
                                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                    <Image
                                        src="/Profile.jpeg"
                                        alt="Muhammad Mustafa - Professional Headshot"
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                        sizes="(max-w-sm) 100vw, 384px"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                                    <MapPin className="text-primary-500 mb-2" size={24} />
                                    <span className="text-sm font-medium">Location</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Shaidu, Pakistan</span>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                                    <GraduationCap className="text-accent-500 mb-2" size={24} />
                                    <span className="text-sm font-medium">Education</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">BS CS, UET Mardan</span>
                                    <span className="text-xs font-bold text-primary-500 mt-1">GPA: 3.5</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                                    <div className="flex gap-1 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse animation-delay-2000"></span>
                                    </div>
                                    <span className="text-sm font-medium">Languages</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">English (Good)</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Urdu (Native)</span>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                                    <Briefcase className="text-primary-500 mb-2" size={24} />
                                    <span className="text-sm font-medium">Experience</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">1+ Year</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio & Details */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Crafting digital experiences with passion and pixel-perfect precision.
                            </h3>

                            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>
                                    I'm a dedicated Frontend Developer who loves turning complex problems into simple, beautiful, and intuitive designs. With a background in Computer Science, I blend technical expertise with a keen eye for design.
                                </p>
                                <p>
                                    My journey began by exploring how the web works, which quickly evolved into building scalable applications using React, Next.js (Basics), and modern CSS frameworks like Tailwind.
                                    In addition to frontend, I have experience with Node.js (Basics), MongoDB (Basics), and PHP, allowing me to understand and integrate full-stack systems smoothly.
                                </p>
                                <p>
                                    When I'm not coding, I'm exploring new technologies, refining my UI/UX skills in Figma, or troubleshooting software & networks. I thrive in responsive, dynamic environments.
                                </p>
                            </div>

                            <div className="pt-6 space-y-3">
                                <a href="mailto:mustafashafi143@gmail.com" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                    <Mail className="text-primary-500" size={20} />
                                    mustafashafi143@gmail.com
                                </a>
                                <a href="tel:+923479107972" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                    <Phone className="text-primary-500" size={20} />
                                    +92 347 910 7972
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
