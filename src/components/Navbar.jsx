import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-[#0e0e1a]/40 shadow-md backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo with gradient text */}
                <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Arti Pawar
                </h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-5 text-sm md:text-base text-gray-900 dark:text-gray-100 font-medium">
                    <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-purple-400 transition">About Me</a></li>
                    <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
                    <li><a href="#achievements" className="hover:text-purple-400 transition">Achievements</a></li>
                    <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
                </ul>

                {/* Resume Button (Desktop) */}
                <a
                    href="/Arti-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold px-4 py-2 rounded-md transition"
                >
                    Resume
                </a>

                {/* Hamburger Icon (Mobile) */}
                <button
                    className="md:hidden text-3xl text-purple-700 dark:text-white"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/90 dark:bg-[#0e0e1a] px-6 py-4 space-y-4 text-gray-900 dark:text-white text-sm shadow-md">
                    <a href="#home" className="block" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="block" onClick={toggleMenu}>About Me</a>
                    <a href="#skills" className="block" onClick={toggleMenu}>Skills</a>
                    <a href="#projects" className="block" onClick={toggleMenu}>Projects</a>
                    <a href="#achievements" className="block" onClick={toggleMenu}>Achievements</a>
                    <a href="#contact" className="block" onClick={toggleMenu}>Contact</a>
                    <a
                        href="/Arti-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center rounded-md py-2 mt-2 hover:opacity-90"
                        onClick={toggleMenu}
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
}