"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Wrench, MonitorSmartphone, Database, ChevronRight, Sparkles } from "lucide-react";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillsData = [
        {
            title: "Frontend Development",
            icon: <MonitorSmartphone size={24} />,
            description: "Crafting beautiful, responsive, and highly animated user interfaces.",
            color: "text-blue-500",
            bgColor: "bg-blue-500",
            lightBg: "bg-blue-50 dark:bg-blue-900/30",
            borderColorHover: "hover:border-blue-500/50 hover:shadow-blue-500/20",
            skills: ["React.js", "Next.js (Basics)", "JavaScript", "Tailwind CSS", "WordPress", "Elementor"]
        },
        {
            title: "Backend Development",
            icon: <Server size={24} />,
            description: "Building scalable server-side systems and robust RESTful APIs.",
            color: "text-orange-500",
            bgColor: "bg-orange-500",
            lightBg: "bg-orange-50 dark:bg-orange-900/30",
            borderColorHover: "hover:border-orange-500/50 hover:shadow-orange-500/20",
            skills: ["Node.js (Basics)", "Express.js", "PHP"]
        },
        {
            title: "Databases",
            icon: <Database size={24} />,
            description: "Structuring fast, secure, and reliable data storage solutions.",
            color: "text-purple-500",
            bgColor: "bg-purple-500",
            lightBg: "bg-purple-50 dark:bg-purple-900/30",
            borderColorHover: "hover:border-purple-500/50 hover:shadow-purple-500/20",
            skills: ["MySQL", "MongoDB (Basics)"]
        },
        {
            title: "Programming Languages",
            icon: <Code2 size={24} />,
            description: "Core languages used to solve complex algorithmic puzzles.",
            color: "text-green-500",
            bgColor: "bg-green-500",
            lightBg: "bg-green-50 dark:bg-green-900/30",
            borderColorHover: "hover:border-green-500/50 hover:shadow-green-500/20",
            skills: ["C++", "Python", "OOP Fundamentals"]
        },
        {
            title: "Tools & Workflows",
            icon: <Wrench size={24} />,
            description: "My daily toolkit for version control, design, and deployment.",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500",
            lightBg: "bg-yellow-50 dark:bg-yellow-900/30",
            borderColorHover: "hover:border-yellow-500/50 hover:shadow-yellow-500/20",
            skills: ["Git & GitHub", "VS Code", "Figma", "XAMPP", "IT Support", "Networking"]
        },
        {
            title: "Core Computer Science",
            icon: <Code2 size={24} />,
            description: "Strong theoretical foundation in computer science principles and systems.",
            color: "text-red-500",
            bgColor: "bg-red-500",
            lightBg: "bg-red-50 dark:bg-red-900/30",
            borderColorHover: "hover:border-red-500/50 hover:shadow-red-500/20",
            skills: ["Data Structures", "Algorithms", "Computer Networks", "Database Management", "Software Engineering"]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30" id="skills">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen -z-10 animate-blob"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen -z-10 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm mb-6 border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                        <Sparkles size={16} className="text-primary-500" />
                        My Arsenal
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
                    >
                        Technical <span className="text-gradient">Proficiency</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                        A deep dive into the technologies and tools I master to build scalable,
                        performant, and beautiful digital experiences.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Sidebar - Categories */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 relative">
                        {skillsData.map((category, index) => {
                            const isActive = activeCategory === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveCategory(index)}
                                    className={`group relative flex items-center justify-between p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden ${isActive
                                            ? "bg-white dark:bg-slate-800/80 shadow-lg border-transparent"
                                            : "hover:bg-white/60 dark:hover:bg-slate-800/40 border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400"
                                        } border`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-600 dark:bg-primary-500"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <div className="flex items-center gap-4 z-10 w-full">
                                        <div className={`p-2.5 rounded-xl transition-colors duration-300 ${isActive ? category.lightBg + " " + category.color : "bg-slate-100 dark:bg-slate-800/80 group-hover:bg-slate-200 dark:group-hover:bg-slate-700"}`}>
                                            {category.icon}
                                        </div>
                                        <span className={`font-semibold text-lg transition-colors ${isActive ? "text-slate-900 dark:text-white" : ""}`}>
                                            {category.title}
                                        </span>
                                    </div>
                                    <ChevronRight size={20} className={`transition-transform duration-300 flex-shrink-0 ${isActive ? "text-primary-500 translate-x-1" : "opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0"}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Content - Skills Display */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="h-full bg-white dark:bg-slate-900/90 rounded-3xl p-8 lg:p-10 border border-slate-200/60 dark:border-slate-800 shadow-xl relative overflow-hidden"
                            >
                                {/* Minimal Background Decoration inside card */}
                                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-10 dark:opacity-20 pointer-events-none ${skillsData[activeCategory].bgColor}`}></div>

                                <div className="mb-10 relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-2xl ${skillsData[activeCategory].lightBg} ${skillsData[activeCategory].color}`}>
                                            {skillsData[activeCategory].icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                                            {skillsData[activeCategory].title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                                        {skillsData[activeCategory].description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                                    {skillsData[activeCategory].skills.map((skill, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                                            className={`px-4 py-5 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-200/50 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1.5 cursor-default shadow-sm ${skillsData[activeCategory].borderColorHover}`}
                                        >
                                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
