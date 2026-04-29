"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Handle Scroll State
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer for active sections
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Certificates", href: "#certificates", id: "certificates" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    const currentTheme = theme === "system" ? systemTheme : theme;

    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-panel py-4 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="text-2xl font-bold tracking-tighter text-gradient"
                >
                    Mustafa<span className="text-slate-900 dark:text-white">.dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-medium transition-colors relative ${activeSection === link.id
                                        ? "text-primary-600 dark:text-primary-400"
                                        : "text-slate-600 dark:text-slate-300 hover:text-primary-500"
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="activeIndicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                                aria-label="Toggle Theme"
                            >
                                {currentTheme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
                            </button>
                        )}
                        <a href="https://github.com/Mustafashafi" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/muhammad-mustafa-a946092b1" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                        >
                            {currentTheme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
                        </button>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 focus:outline-none text-slate-700 dark:text-slate-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-slate-200 dark:border-slate-800/50 absolute top-full left-0 w-full"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-lg font-medium py-2 ${activeSection === link.id
                                            ? "text-primary-600 dark:text-primary-400"
                                            : "text-slate-600 dark:text-slate-300 hover:text-primary-500"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-slate-300 dark:border-slate-700 text-slate-500">
                                <a href="https://github.com/Mustafashafi" target="_blank" rel="noreferrer" className="hover:text-primary-500">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/muhammad-mustafa-a946092b1" target="_blank" rel="noreferrer" className="hover:text-primary-500">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:mustafashafi143@gmail.com" className="hover:text-primary-500">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

