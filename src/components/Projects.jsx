import React from "react";
import Food from "../assets/projects/Food.png";
import chatapp from "../assets/projects/chatapp.png";
import project from "../assets/projects/project.png";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import project7 from "../assets/projects/project7.png";
import project8 from "../assets/projects/project8.png";
import project9 from "../assets/projects/project9.png";

const projects = [
    {
        title: "Food Recipe Website Wordpress",
        image: Food,
        description:
            "A simple and clean recipe website built using WordPress.com (Free Plan).It includes a Home page, Recipes list, detailed Recipe pages, About page, and Contact page.Each recipe has an image, ingredients, steps, and serving details.This project helped me learn WordPress pages, blocks, navigation, and publishing a live website",
        demo: "https://artifoods.wordpress.com/",
    },
    {
        title: "Chat-App",
        image: chatapp,
        description:
            "A real-time chat application built with the MERN stack and Socket.io. It allows users to register, log in, and communicate instantly with secure authentication and smooth user experience",
        demo: "https://live-chat-app-eta.vercel.app/",
        github: "https://github.com/Aaru134/live-chat-app",
    },
    {
        title: "Leaderboard",
        image: project,
        description:
            "A full-stack Leaderboard Application built using the MERN stack. Users can be added dynamically, claim random points, and view real-time rankings.",
        demo: "https://leaderboard-frontend-mocha-nine.vercel.app/",
        github: "https://github.com/Aaru134/leaderboard-frontend",
    },
    {
        title: "E-Commerce Store",
        image: project1,
        description:
            "Responsive MERN-based e-commerce website with cart, product view, and secure checkout.",
        demo: "https://e-commerce-frontend-beta-five.vercel.app/",
        github: "https://github.com/Aaru134/e-commerce-frontend",
    },
    {
        title: "Spotify Web UI Clone",
        image: project2,
        description:
            "Modern Spotify web UI clone using React and styled-components.",
        demo: "https://spotify-web-xi.vercel.app/",
        github: "https://github.com/Aaru134/spotify-web",
    },
    {
        title: "Business Website",
        image: project3,
        description:
            "Responsive business landing page designed with HTML, CSS, JS.",
        demo: "https://business-website-five-black.vercel.app/",
        github: "https://github.com/Aaru134/business-website",
    },
    {
        title: "Image Slider Project",
        image: project4,
        description: "Simple and clean React image slider with transitions.",
        demo: "https://slider-nine-tawny.vercel.app/",
        github: "https://github.com/Aaru134/slider",
    },
    {
        title: "Artistly Platform",
        image: project5,
        description:
            "Next.js artist listing platform with filters, onboarding form, and dashboard.",
        demo: "https://artistly-nextjs.vercel.app/",
        github: "https://github.com/Aaru134/artistly-nextjs",
    },
    {
        title: "Swiper Img",
        image: project6,
        description: "Responsive Swiper img page designed with HTML, CSS, JS.",
        demo: "https://hospital-web-bm7p.vercel.app/",
        github: "https://github.com/Aaru134/Swiper-js-img",
    },
    {
        title: "Hospital Website",
        image: project7,
        description:
            "Another hospital website variation with contact & about pages.",
        demo: "https://hospital-web-bay.vercel.app/",
        github: "https://github.com/Aaru134/hospital-web-v2",
    },
    {
        title: "Hotel Menu UI",
        image: project8,
        description:
            "Interactive hotel menu UI built with HTML, CSS and responsive design.",
        demo: "https://hotel-menu-psi.vercel.app/",
        github: "https://github.com/Aaru134/hotel-menu",
    },
    {
        title: "GlobeTrek Landing Page",
        image: project9,
        description:
            "Travel-themed landing page with smooth scroll animations and clean layout.",
        demo: "https://globetrek-landing.vercel.app/",
        github: "https://github.com/Aaru134/globetrek-landing",
    },

];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-6 text-white"
            style={{
                backgroundImage: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-purple-400">Projects</span>
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        A collection of things I’ve built, designed, and shipped 🚀
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-purple-600 text-white px-3 py-1.5 rounded hover:bg-purple-700 text-sm"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-gray-800 text-white px-3 py-1.5 rounded hover:bg-gray-900 text-sm"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
