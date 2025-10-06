import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import coffeeBliss from '../../assets/PicturesProjects/coffeebliss.png'
import permalist from '../../assets/PicturesProjects/permalist.png'
import GIFBrowser from '../../assets/PicturesProjects/GIFBrowser.png'
import MyBlog from '../../assets/PicturesProjects/myblog.png'
import Rock from '../../assets/PicturesProjects/Rock-Paper-Scissors.png'
import noteKeeper from '../../assets/PicturesProjects/notekeeper.png'



const projects = [
    {
        name: "Coffee Bliss",
        image: coffeeBliss,
        description:
            "A modern E-commerce web application with Product Pages and Shopping Cart.",
        tags: ["React.JS", "Tailwind CSS","JavaScript","Framer Motion","Vite"],
        github: "https://github.com/diyaad4d/CoffeeBliss",
    },
    {
        name: "Permalist",
        image: permalist,
        description:
            "ToDo-List: Create multiple lists with customizable colors and add, edit, delete tasks within each list.",
        tags: ["Node.js", "Express", "PostgreSQL", "EJS"],
        github: "https://github.com/diyaad4d/ToDoList-DataBase",
    },
    {
        name: "GIF Browser",
        image: GIFBrowser,
        description:
            "A web app that allows browsing and searching GIFs using API calls.",
        tags: ["API", "Node.js", "Express.js", "EJS", "Axios"],
        github: "https://github.com/diyaad4d/GIFBrowser",
    },
    {
        name: "My Blog",
        image: MyBlog,
        description:
            "A dynamic blogging platform where users can create, edit, and delete posts.",
        tags: ["REST API", "Axios", "Node.js", "Express.js", "EJS"],
        github: "https://github.com/diyaad4d/MyBlog",
    },
    {
        name: "Rock-Paper-Scissors",
        image: Rock,
        description:
            "A simple and fun Rock-Paper-Scissors Game, play against the computer.",
        tags: ["JavaScript", "CSS", "HTML"],
        github: "https://github.com/diyaad4d/Rock-Paper-Scissors-Game",
    },
    {
        name: "To-Do List (React)",
        image: "/src/assets/PicturesProjects/todo-react.png",
        description:
            "A responsive To-Do List app with add, edit, delete tasks and localStorage persistence.",
        tags: ["React", "HTML", "CSS", "localStorage"],
        github: "https://github.com/diyaad4d/to-do-List-With-React",
    },
    {
        name: "Note Keeper",
        image: noteKeeper,
        description:
            "A simple and clean note-taking web app for creating, editing, and organizing notes.",
        tags: ["React", "HTML", "CSS"],
        github: "https://github.com/diyaad4d/Note-Keeper",
    },
];

const Projects = () => {
    return (
        <section className="pb-24 px-8" id="projects">
            <h2 className="my-8 text-start text-6xl font-semibold">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-r from-[#1e1e2e] to-[#2a2a3b] p-4 rounded-2xl shadow-lg flex flex-col items-center"
                    >
                        <div className="w-full h-72 mb-4 relative rounded-xl overflow-hidden bg-gradient-to-r from-[#1e1e2e] to-[#2a2a3b] flex items-center justify-center">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <h3 className="text-2xl font-semibold mb-2 text-white">
                            {project.name}
                        </h3>

                        <p className="text-sm text-neutral-300 mb-4 text-center max-w-[100%]">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-[16px] font-medium bg-gradient-to-r from-[#8E54E9] to-[#4776E6] bg-clip-text text-transparent border border-neutral-700"
                                >
                  {tag}
                </span>
                            ))}
                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors text-xl"
                        >
                            <FaGithub className="text-2xl" /> GitHub
                            <FiExternalLink className="text-xl" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
