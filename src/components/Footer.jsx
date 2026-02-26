"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter text-gradient mb-6">
                    Mustafa<span className="text-slate-900 dark:text-white">.dev</span>
                </a>

                <div className="flex space-x-6 mb-8">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all hover:scale-110">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all hover:scale-110">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:mustafashafi143@gmail.com" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all hover:scale-110">
                        <Mail size={20} />
                    </a>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                    <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
                    <a href="#skills" className="hover:text-primary-500 transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-primary-500 transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
                </nav>

                <p className="text-slate-500 dark:text-slate-500 text-sm text-center">
                    &copy; {currentYear} Muhammad Mustafa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
