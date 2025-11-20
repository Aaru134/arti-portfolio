import React from "react";
import upgrad from "../assets/certificate/upgrad-color.png";
import udemy from "../assets/certificate/udemy-color.webp";
import dbatu from "../assets/certificate/dbatu.png";
import nullclass from "../assets/certificate/null-class.png"; // ✅ NullClass import

export default function About() {
    return (
        <section
            className="py-24 px-6 text-white"
            id="about"
            style={{
                backgroundImage: "linear-gradient(to right, #1e1e30, #2c2b4a)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
                    Who is <span className="text-pink-400">Arti?</span>
                </h2>
                <p className="text-gray-300 mb-10 text-base md:text-lg">
                    Turning ideas into digital solutions with creativity & code.
                </p>

                {/* Highlights */}
                <div className="flex justify-center gap-10 sm:gap-16 mb-16 flex-wrap text-xl font-semibold">
                    <span className="text-gray-200">
                        built for <span className="text-purple-400 font-bold">Innovation</span>
                    </span>
                    <span className="text-gray-200">
                        built for <span className="text-purple-400 font-bold">Opportunity</span>
                    </span>
                </div>

                {/* Main Developer Box */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-14">

                    {/* Left Text */}
                    <div className="text-left max-w-md">
                        <h3 className="text-3xl font-bold mb-6 text-white">
                            A Curiosity-driven <span className="text-purple-400">Full–Stack Developer</span>
                        </h3>
                        <p className="text-base text-gray-300 leading-relaxed">
                            I build full-stack MERN applications that solve real-world problems.
                            Passionate about performance, UI polish, and pixel perfection.
                        </p>
                    </div>

                    {/* Center Circle with Logos */}
                    <div className="relative w-64 h-64">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            bg-purple-100 border-4 border-purple-400 rounded-full w-28 h-28 flex items-center 
                            justify-center text-purple-700 font-bold text-xl shadow-lg">
                            Arti
                        </div>

                        {/* Logos */}
                        <img src={upgrad} alt="UpGrad" title="UpGrad"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 hover:scale-110 transition shadow-md" />
                        <img src={dbatu} alt="DBATU" title="DBATU"
                            className="absolute bottom-0 left-0 w-16 hover:scale-110 transition shadow-md" />
                        <img src={udemy} alt="Udemy" title="Udemy"
                            className="absolute bottom-0 right-0 w-16 hover:scale-110 transition shadow-md" />
                    </div>

                    {/* Right Info */}
                    <div className="text-left">
                        <h4 className="text-5xl font-extrabold mb-2 text-white">3+</h4>
                        <hr className="w-16 border-purple-400 mb-3" />
                        <p className="text-lg font-medium text-purple-200 mb-1">Years of Experience</p>
                        <p className="text-base text-gray-300 leading-snug">
                            B.Tech in Computer Science<br />
                            with Programming, DSA, and Full-Stack Web Dev
                        </p>
                    </div>
                </div>

                {/* WORK WITH */}
                <div className="mt-24">
                    <p className="text-sm font-semibold text-gray-400 mb-6 tracking-widest uppercase">
                        Work With
                    </p>
                    <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
                        <img src={upgrad} alt="UpGrad" className="h-14 object-contain mx-auto" />
                        <img src={udemy} alt="Udemy" className="h-12 object-contain mx-auto" />
                        <img src={dbatu} alt="DBATU" className="h-16 object-contain mx-auto" />
                        <img src={nullclass} alt="NullClass" className="h-14 object-contain mx-auto" /> {/* ✅ NullClass Added */}
                    </div>
                </div>
            </div>
        </section>
    );
}