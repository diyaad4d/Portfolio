import React from "react";
import { motion } from "framer-motion";

// Frontend
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

// Backend / Auth / DB
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiPostgresql, SiMysql } from "react-icons/si";
import { FaKey } from "react-icons/fa";

// Tools
import { SiLinux, SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

// Cyber
import { FaUserSecret, FaRobot } from "react-icons/fa";
import { SiCplusplus, SiPython, SiUnity } from "react-icons/si";

const allIcons = [
    //  (frontend)
    { Icon: RiReactjsLine, name: "React JS", color: "text-cyan-400" },
    { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
    { Icon: SiHtml5, name: "HTML5", color: "text-orange-400" },
    { Icon: SiCss3, name: "CSS3", color: "text-blue-400" },

    // (backend & db)
    { Icon: RiNodejsLine, name: "Node.js", color: "text-green-400" },
    { Icon: SiExpress, name: "Express", color: "text-neutral-200" },
    { Icon: SiPostgresql, name: "Postgres", color: "text-[#4F8CC9]" },
    { Icon: SiMysql, name: "MySQL", color: "text-[#00618A]" },
    { Icon: FaKey, name: "Auth", color: "text-amber-400" },

    // (tools / misc)
    { Icon: SiLinux, name: "Linux", color: "text-green-500" },
    { Icon: SiGit, name: "Git", color: "text-[#F1502F]" },
    { Icon: FaGithub, name: "GitHub", color: "text-gray-200" },
    { Icon: SiCplusplus, name: "C++", color: "text-sky-600" },
    { Icon: SiPython, name: "Python", color: "text-yellow-300" },

    //  (cyber & interests)
    { Icon: FaUserSecret, name: "Ethical Hacking", color: "text-amber-300" },
    //{ Icon: FaRobot, name: "AI", color: "text-violet-300" },
    { Icon: SiUnity, name: "Unity", color: "text-indigo-400" },
];

function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
}

const Skills = () => {
    const rows = chunkArray(allIcons, 5);

    return (
        <section className="pb-24 border-b border-neutral-800" id="skills">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="my-8 text-start text-6xl font-semibold">Skills</h2>

                <div className="flex flex-col gap-10">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex items-center justify-center gap-12 flex-wrap"
                        >
                            {row.map((item, i) => {
                                const { Icon, name, color } = item;
                                return (
                                    <motion.div
                                        key={name + i}
                                        className="flex flex-col items-center justify-start"
                                        whileHover={{ y: -12, scale: 1.06, zIndex: 50 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                        style={{ WebkitTapHighlightColor: "transparent" }}
                                    >
                                        <div className="rounded-2xl px-6 py-6  border bg-neutral-900/40 border-white/30 shadow-sm">
                                            <Icon className={`text-6xl ${color}`} />
                                        </div>

                                        <span className="mt-3 text-sm text-neutral-300">{name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
