import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin ,FaPhone } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
    return (
        <main id="contact" className="bg-gradient-to-r from-[#8E54E9] to-[#4776E6] text-gray-900/95 font-sans px-6 py-12">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

                {/* LEFT SIDE  */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <h2 className="text-5xl lg:text-6xl font-extrabold font-serif tracking-wide mb-15">
                        Let's talk
                    </h2>

                    <div className="space-y-4 text-gray-900/95">
                        <a
                            href="mailto:daifidiyaa@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <FaEnvelope className="text-3xl text-gray-900/95" />
                            <div>
                                <p className="pl-2 text-2xl font-medium text-gray-900/95">Email</p>
                            </div>
                            <FiExternalLink className="ml-auto text-2xl text-gray-900/95" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/diyaa-daifi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <FaLinkedin className="text-3xl text-gray-900/95" />
                            <div>
                                <p className="pl-2 text-2xl font-medium text-gray-900/95">LinkedIn</p>
                            </div>
                            <FiExternalLink className="ml-auto text-2xl text-gray-900/95" />
                        </a>

                        <a
                            href="https://github.com/diyaad4d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <FaGithub className="text-3xl text-gray-900/95" />
                            <div>
                                <p className="pl-2 text-2xl font-medium text-gray-900/95">GitHub</p>
                            </div>
                            <FiExternalLink className="ml-auto text-2xl text-gray-900/95" />
                        </a>
                        <div className="flex items-center gap-4 px-4 py-3 rounded-lg bg-white/0">
                            <FaPhone className="text-2xl text-gray-900/95" />
                            <div>
                                <p className="text-2xl font-medium text-gray-900/95">Phone</p>
                                <p className="text-2xl text-gray-900/95">+962-78-8625665</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-2/3 flex justify-center">
                    <div className="w-4/5 bg-gray-900/95 shadow-2xl rounded-2xl p-8">
                        <form
                            action="https://getform.io/f/bdrdmjwb"
                            method="POST"
                            className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold tracking-wide hover:opacity-90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Contact
