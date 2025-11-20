import React from "react";
import upgradCert from "../assets/certificate/upgrad.png";
import udemyCert from "../assets/certificate/udemy.png";
import nullclassCert from "../assets/certificate/nullclass.png";

const certificates = [
    {
        id: 1,
        brand: "Udemy",
        title: "C Programming: Become A Pro! Think Like a Programmer!",
        image: udemyCert,
        link: "https://drive.google.com/file/d/12x-vA2LyBBsus4PL9Cus0Niou5HBVGNV/view?usp=drive_link",
        bg: "bg-white/10"
    },
    {
        id: 2,
        brand: "UpGrad",
        title: "Full Stack Development Bootcamp - JavaScript",
        image: upgradCert,
        link: "https://drive.google.com/file/d/1fkV8sz_8S1SCYhx6ortIiJMNdqjrgEpl/view?usp=drive_link",
        bg: "bg-white/10"
    },
    {
        id: 3,
        brand: "NullClass",
        title: "Full Stack Development Internship Certificate",
        image: nullclassCert,
        link: "https://drive.google.com/file/d/1zaUSanRhuYzKfXLezBAS2qscImQjEZ_r/view?usp=drive_link",
        bg: "bg-white/10"
    }
];

export default function ExploreAchievements() {
    return (
        <section
            className="py-24 px-6 text-white"
            id="achievements"
            style={{
                backgroundImage: "linear-gradient(to right, #1e1e30, #2c2b4a)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Explore <span className="text-purple-400">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className={`rounded-2xl p-6 border border-white/10 shadow-lg ${cert.bg} backdrop-blur-md transition hover:shadow-2xl flex flex-col justify-between h-[420px]`} // ✅ Equal height
                        >
                            {/* Top */}
                            <div>
                                <h3 className="text-3xl font-bold text-purple-400 mb-2">
                                    #{cert.brand}
                                </h3>
                                <p className="text-gray-300 text-sm mb-6">{cert.title}</p>
                            </div>

                            {/* Bottom */}
                            <div className="flex flex-col gap-4 items-center">
                                <img
                                    src={cert.image}
                                    alt={`${cert.brand} Certificate`}
                                    className="w-full max-w-sm rounded-lg shadow-md object-contain h-40" // ✅ Fixed image size
                                />
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}