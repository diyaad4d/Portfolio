import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
        <main className="selection:text-yellow-500
        overflow-x-hidden text-neutral-300 antialiased">
            <div className="flixed top-0 -z-10 h-full w-full"></div>
            <div className="container mx-uto px-8">
                <Navbar/>
                <Hero/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </main>


  )
}

export default App
