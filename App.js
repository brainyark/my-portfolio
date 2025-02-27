import React, { useEffect } from 'https://esm.sh/react@18.3.1'
import { gsap } from 'https://esm.sh/gsap@3.12.5'
import { ScrollTrigger } from 'https://esm.sh/gsap@3.12.5/ScrollTrigger'
import Hero from './components/Hero.js'
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Services from './components/Services.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'

gsap.registerPlugin(ScrollTrigger)

function App() {
  // Your exact same App code here
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  )
}

export default App 