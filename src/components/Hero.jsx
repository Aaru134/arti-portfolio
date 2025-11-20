import React from "react";
import bgImage from "../assets/hero-bg.png";
import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <div
            id="home" // ✅ Yeh line added
            className="w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-fadeIn">
                I'm a <span className="text-pink-400">Full-stack Web Developer</span>
            </h1>

            {/* Expertise Inline Typewriter */}
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mt-6 flex items-center justify-center gap-2">
                #ExpertiseIn{" "}
                <span className="text-white font-bold">
                    <Typewriter
                        options={{
                            strings: [
                                "React.js",
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "Tailwind CSS",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 70,
                            deleteSpeed: 30,
                        }}
                    />
                </span>
            </h2>

            {/* Description */}
            <p className="max-w-2xl text-sm md:text-base text-white mt-6 px-4 animate-fadeIn">
                I’m driven by the opportunity to build beautiful and functional web experiences that solve real-world problems.
            </p>

            {/* CTA */}
            <a
                href="#projects"
                className="mt-8 inline-block bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition duration-300 animate-slideUp"
            >
                Check My Work
            </a>
        </div>
    );
}