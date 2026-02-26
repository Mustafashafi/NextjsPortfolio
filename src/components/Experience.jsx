"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Frontend Developer Intern",
            company: "DevelopersHub",
            period: "Oct - Dec 2025",
            type: "Remote",
            description: "Live app debugging, responsive design, and remote collaboration inside agile sprint cycles. Enhanced the core UI components for optimized web performance."
        },
        {
            title: "Web Development Intern",
            company: "AI4LIFE",
            period: "Aug - Oct 2025",
            type: "Remote",
            description: "Developing robust Next.js production applications. Integrated n8n chatbot automation and various REST APIs to enhance the platform offerings."
        },
        {
            title: "Frontend Developer Intern",
            company: "Apexcify Technologies",
            period: "Jun - Jul 2025",
            type: "Remote",
            description: "Built strictly responsive HTML5/CSS3/JS interfaces focusing on modern UI/UX principles, reducing page load significantly by applying web optimizations."
        },
        {
            title: "PHP Intern",
            company: "Artificial Intelligence Community Pakistan",
            period: "Jul - Sep 2024",
            type: "On-site / Remote",
            description: "Developed over 9 database-driven websites utilizing PHP and MySQL within an agile team. Directed Git workflows and version control management."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900" id="experience">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Professional <span className="text-gradient">Experience</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        A timeline of my professional journey, internships, and roles that helped
                        me shape my practical knowledge.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500/20 via-accent-500/20 to-primary-500/0 rounded-full"></div>

                    <div className="space-y-12 relative z-10">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block flex-1"></div>

                                    {/* Marker node */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 shadow-lg shadow-primary-500/30 flex items-center justify-center z-20"
                                    >
                                        <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className={`flex-1 pl-14 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="glass-panel p-6 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
                                            {/* Subdued glowing effect behind card */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 -z-10"></div>

                                            <div className={`flex flex-wrap items-center gap-3 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                                                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                                                    {exp.type}
                                                </span>
                                                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                                                    <Calendar size={14} className="mr-1" />
                                                    {exp.period}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
                                                {exp.company}
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
