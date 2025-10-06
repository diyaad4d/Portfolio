import React from 'react';
import { motion } from 'framer-motion';
import Mylogo from '../MyLogo/Mylogo.jsx'

const NavMenu =[
    {
        id: 1,
        title:'About Me',
        link:'#home'
    },
    {
        id:2 ,
        title:'Contact',
        link:'#contact'
    },
    {
        id:3,
        title:'Skills',
        link:'#skills'
    },
    {
        id:4,
        title:'Projects',
        link:'#projects'
    },

]
const Navbar = () => {
    return (
        <nav className="  top-0 left-0 w-full pt-3 z-40 py-8">
            <div className="container px-0">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Mylogo/>

                    {/* Nav Menu  */}
                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex gap-4">
                            {NavMenu.map((item) => (
                                <li key={item.id} className="group relative">
                                    <a
                                        href={item.link}
                                        className="inline-block px-6 py-2 text-white uppercase duration-200 text-xl"
                                    >
                                        {item.title}

                                        <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-gradient-to-r from-[#8E54E9] to-[#4776E6] transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* buttons */}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                        className="inline-block px-6 py-4 rounded-full bg-gradient-to-r from-[#8E54E9] to-[#4776E6]
                        text-[18px] text-white cursor-pointer transition-all duration-300
                        hover:brightness-110 hover:shadow-lg"
                    >
                        Connect With Me
                    </motion.a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;