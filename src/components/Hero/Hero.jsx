import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/pic.jpeg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {


    const myMotion = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, type: "spring", stiffness: 100 }
        })
    }

    return (
        <main className="border-neutral-900 pb-4 border-b lg:mb-35 pt-6 " id="home">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/3">
                    <div className="flex flex-col items-center lg:items-start">

                        <motion.h1
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            variants={myMotion}
                        >
                            <motion.span
                                className="text-3xl font-normal bg-gradient-to-r from-[#8E54E9] to-[#4776E6] bg-clip-text text-transparent mr-2"
                                custom={0.1}
                                variants={myMotion}
                            >
                                I'M,
                            </motion.span>
                            <motion.span
                                custom={0.2}
                                variants={myMotion}
                            >
                                Diyaa Daifi
                            </motion.span>
                        </motion.h1>

                        <motion.span
                            className="bg-gradient-to-r from-[#8E54E9] to-[#4776E6] bg-clip-text text-4xl tracking-tight text-transparent"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.span
                            className="bg-gradient-to-r from-[#8E54E9] to-[#4776E6] bg-clip-text text-4xl tracking-tight text-transparent"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        >
                            Computer Science – Cybersecurity Track
                        </motion.span>

                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                        >
                            I’m a passionate full-stack developer and computer science student with a keen interest in cybersecurity. I build modern web applications—from responsive frontends with React and Tailwind to secure backends with Node.js, Express, and PostgreSQL. Holding the CEH v12 certification, I strengthen my expertise in ethical hacking and system security.
                            Curious about IT, AI, and competitive programming, I continuously explore new technologies and frameworks, applying my skills to real-world projects that make an impact.
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center gap-10 text-3xl pl-50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, type: "spring", stiffness: 100 }}
                        >
                            <a
                                href="https://www.linkedin.com/in/diyaa-daifi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/diyaad4d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="mailto:daifidiyaa@gmail.com"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaEnvelope />
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 lg:p-8 mt-10">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                    >
                        <div className="rounded-full pb-1.5 bg-gradient-to-r from-[#8E54E9] to-[#4776E6]">
                            <img
                                src={profilePic}
                                alt="d4d-Ghibli"
                                className="w-120 h-100 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Hero;
