import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="bg-black text-white">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition>
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
        </PageTransition>
      </AnimatePresence>
    </div>
  );
};

export default App;