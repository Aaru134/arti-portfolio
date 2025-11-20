import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#0e0e1a] via-[#12022f] to-[#1b0033] py-20 px-6 text-white shadow-inner">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">

                {/* Title & Year */}
                <h1 className="text-2xl md:text-3xl font-bold text-purple-300">
                    © {new Date().getFullYear()} Arti Pawar
                </h1>

                {/* Social Icons */}
                <div className="flex gap-8 text-3xl text-purple-400">
                    <a
                        href="mailto:arti.pawar@example.com"
                        className="hover:text-white hover:scale-125 transition-all duration-300"
                        target="_blank"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://github.com/Aaru134"
                        className="hover:text-white hover:scale-125 transition-all duration-300"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/arti-pawar"
                        className="hover:text-white hover:scale-125 transition-all duration-300"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-400">
                    Built with 💜 using <span className="font-semibold">React</span> &{" "}
                    <span className="font-semibold">Tailwind CSS</span>
                </p>

                {/* Bottom line */}
                <div className="h-[2px] w-24 bg-purple-600 rounded-full opacity-60 mt-4"></div>
            </div>
        </footer>
    );
}
