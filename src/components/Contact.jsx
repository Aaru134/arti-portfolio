import React from "react";
import { Laptop, Code2, Users, Handshake } from "lucide-react";
import bg from "../assets/bg/bg-dark.png"; // make sure this path is correct

const benefits = [
    {
        icon: <Code2 size={28} className="text-yellow-400" />,
        title: "Cost-Effective",
        desc: "One developer, full expertise. Save on hiring separate frontend & backend teams.",
    },
    {
        icon: <Laptop size={28} className="text-yellow-400" />,
        title: "Streamlined Communication",
        desc: "Smoother discussions and faster troubleshooting with one point of contact.",
    },
    {
        icon: <Users size={28} className="text-yellow-400" />,
        title: "Faster Project Completion",
        desc: "I switch tasks seamlessly, speeding up development & fixing bugs quickly.",
    },
    {
        icon: <Handshake size={28} className="text-yellow-400" />,
        title: "Improved Project Ownership",
        desc: "My full ownership leads to better problem-solving & cohesive final product.",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-24 px-6 text-white"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            {/* Main Content */}
            <div className="relative max-w-6xl mx-auto z-10 space-y-24">

                {/* Benefits Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Benefits of <span className="text-yellow-400">Hiring Me</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="border border-white/20 bg-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Centered Contact Form */}
                <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition">
                    <h3 className="text-3xl font-bold mb-6 text-center">
                        Connect<span className="text-purple-400"> Me</span> 💬
                    </h3>

                    <form className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/20 text-white border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full bg-white/20 text-white border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                            <textarea
                                rows="3"
                                placeholder="Type your message..."
                                className="w-full bg-white/20 text-white border border-white/20 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-md hover:scale-105 transition font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
