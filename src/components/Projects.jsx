"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Enterprise College ERP & CRM",
            category: "Fullstack",
            description: "A highly scalable, multi-role ERP and CRM system to automate admissions, manage portals, and digitize administrative workflows.",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS S3"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            live: "https://college-management-system-hazel-chi.vercel.app/",
            github: "https://github.com/Mustafashafi/collegeManagementSystem.git"
        },
        {
            title: "Tour Booking Platform",
            category: "Fullstack",
            description: "A modern web application to browse and book tours. Features dynamic tour selection, an advanced cart system, and admin dashboard.",
            tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/Mustafashafi/Tourism-site.git"
        },
        {
            title: "Hifz Master",
            category: "Python",
            description: "Quran recitation correction system using Vosk & Whisper voice processing. Advanced STT tools connected for highly accurate matching.",
            tech: ["Python", "Vosk", "Whisper", "Speech Recognition"],
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/Mustafashafi/Hifz-Master"
        },
        {
            title: "AI4LYF Website",
            category: "Frontend",
            description: "A highly responsive modern website developed for AI4LYF incorporating scalable Next.js and reusable React components.",
            tech: ["Next.js", "React.js", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            live: "https://next-design-topaz.vercel.app/"
        },
        {
            title: "Task Manager Web App",
            category: "Fullstack",
            description: "Secure, performant and full-stack task management web application leveraging robust CRUD & REST API endpoints.",
            tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
            live: "https://task-manager-smoky-eight-10.vercel.app/"
        },
        {
            title: "Library Management System",
            category: "Backend",
            description: "Book asset management platform enforcing strict inventory control rules through automated PHP and optimized MySQL queries.",
            tech: ["PHP", "MySQL", "HTML/CSS", "JS"],
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/Mustafashafi/Library-Managemnt-system.git"
        },
        {
            title: "Kanban Board",
            category: "Frontend",
            description: "An intuitive drag-and-drop task management tool allowing state transitions easily (To Do, In Progress, Done).",
            tech: ["React.js", "Drag Drop API", "CSS3"],
            image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&w=800&q=80",
            live: "https://kanban-board-sigma-gules.vercel.app/"
        },
        {
            title: "Flow Landing Page",
            category: "Frontend",
            description: "Aesthetic, beautiful and premium landing page with reusable components, micro-animations and perfect grid layouts.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            live: "https://flow-landingpage-sable.vercel.app/"
        },
        {
            title: "Library Management System (C++)",
            category: "C++",
            description: "Console-based system demonstrating OOP principles and data handling.",
            tech: ["C++", "OOP"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "AI4LYF Mobile App UI Design",
            category: "UI/UX",
            description: "Designed modern and user-friendly mobile app screens using Figma. Focused on clean UI, consistency, and usability.",
            tech: ["Figma", "UI/UX Design"],
            image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Landing Page Design",
            category: "Frontend",
            description: "Created a responsive landing page using React.js and Tailwind CSS, emphasizing clean UI and reusable components.",
            tech: ["React.js", "Tailwind CSS"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            live: "https://landing-page-1-drab-zeta.vercel.app/"
        },
        {
            title: "Portfolio Website",
            category: "Frontend",
            description: "Built a dynamic portfolio using React.js to showcase projects and skills.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
            live: "https://mustafa-portfolio32.netlify.app"
        },
        {
            title: "Skyrasoft",
            category: "WordPress",
            description: "A comprehensive digital agency platform offering WordPress development, SEO, and CRM consulting services.",
            tech: ["WordPress", "Elementor", "SEO", "UI/UX"],
            image: "/skyrasoft.png",
            live: "https://skyrasoft.com/"
        },
        {
            title: "Faceit Analyser",
            category: "WordPress",
            description: "Advanced analytics platform for CS2 players to track statistics, ELO rankings, and competitive performance.",
            tech: ["WordPress", "Elementor", "API Integration", "Analytics"],
            image: "/faceit.png",
            live: "https://faceitanalyser.net/"
        },
        {
            title: "Skynish",
            category: "WordPress",
            description: "Premium e-commerce platform for skincare and beauty products with integrated shopping and blog features.",
            tech: ["WordPress", "Elementor", "E-commerce", "Responsive Design"],
            image: "/skynish.png",
            live: "https://skynish.com/"
        }
    ];

    const categories = ["All", "Frontend", "Backend", "Fullstack", "WordPress", "Python", "C++", "UI/UX"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        A diverse collection of my best work across different tech domains, representing complete lifecycle builds.
                    </motion.p>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? "bg-primary-600 text-white shadow-md shadow-primary-500/30 scale-105"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group rounded-2xl glass-panel overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full bg-white/50 dark:bg-slate-900/50 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    {/* Cover Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out z-0"
                                        loading="lazy"
                                    />

                                    {/* Faux browser mockup pattern */}
                                    <div className="absolute top-0 w-full h-8 bg-black/30 dark:bg-black/40 backdrop-blur-md flex items-center px-3 gap-1.5 z-10 border-b border-white/10 dark:border-white/5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>

                                    {/* Overlay Slide Up on Hover */}
                                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20 flex items-center justify-center gap-6">
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white hover:bg-primary-500 hover:scale-110 transition-all shadow-lg hover:shadow-primary-500/50" aria-label="Live Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-white hover:bg-slate-700 hover:scale-110 transition-all shadow-lg hover:shadow-white/20" aria-label="GitHub Repo">
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow relative z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                                    <span className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-500 mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
