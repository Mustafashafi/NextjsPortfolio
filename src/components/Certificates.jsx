"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export default function Certificates() {
    const containerVariants = {
        hidden: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
    };

    const certificates = [
        {
            title: "React and Redux Certification",
            issuer: "YouTube Course",
            date: "2024"
        },
        {
            title: "Become a Python Master",
            issuer: "Programiz (Professional Certificate)",
            date: "2023"
        }
    ];

    return (
        <section className="py-24 bg-white/50 dark:bg-slate-900/50" id="certificates">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Honors & <span className="text-gradient">Certificates</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Recognitions of my continuous learning and dedication to mastering modern technologies.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:shadow-xl hover:shadow-accent-500/10 transition-all border border-slate-200 dark:border-slate-800"
                        >
                            <div className="p-4 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-xl shrink-0">
                                <Award size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                                    <CheckCircle size={16} className="mr-2 text-green-500" />
                                    {cert.issuer}
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded">
                                    {cert.date}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
