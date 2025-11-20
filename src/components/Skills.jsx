// src/components/Skills.jsx
import React from "react";
import Marquee from "react-fast-marquee";

// Skill Images
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongodb.png";
import github from "../assets/skills/github.png";
import java from "../assets/skills/java.png";
import c from "../assets/skills/c.png";
import tailwind from "../assets/skills/tailwind.png";
import linux from "../assets/skills/linux.png";

const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongo },
    { name: "GitHub", icon: github },
    { name: "Tailwind", icon: tailwind },
    { name: "Linux", icon: linux },
    { name: "C", icon: c },
    { name: "Java", icon: java },
];

export default function Skills() {
    return (
        <section className="w-full bg-[#0e0e1a] py-20 px-6 text-white" id="skills">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                    Skills <span className="text-yellow-400">& Tools</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                    My Toolbox and things I can do to bring your products to life
                </p>

                {/* 🔁 Moving Skill Logos */}
                <Marquee pauseOnHover gradient={false} speed={60} className="mt-14">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white/10 backdrop-blur-md p-6 m-4 rounded-2xl shadow-lg flex flex-col items-center w-36 hover:scale-105 transition"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
                            <p className="mt-3 text-base font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
