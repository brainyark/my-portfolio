import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Cpu, Palette, Database, Lock, Smartphone, TestTube } from 'lucide-react';
import PageTransition from './PageTransition';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

// First install: npm install react-tsparticles tsparticles

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Crafting responsive and interactive user interfaces with React and modern web technologies",
      color: "blue"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building robust server-side solutions and RESTful APIs",
      color: "purple"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences with modern design principles",
      color: "pink"
    },
    {
      icon: Lock,
      title: "Security",
      description: "Implementing best practices for web security and data protection",
      color: "green"
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Designing scalable and maintainable software architectures",
      color: "orange"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native and modern mobile technologies",
      color: "blue"
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Implementing comprehensive testing strategies to ensure high-quality software delivery",
      color: "purple"
    }
  ];

  return (
    <PageTransition>
      <motion.section
        ref={sectionRef}
        className="relative min-h-screen py-20 overflow-hidden perspective-1000"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Particles Background */}
        <Particles
          className="absolute inset-0"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50, density: { enable: true, value_area: 800 } },
              color: { value: "#8B5CF6" },
              shape: { type: "circle" },
              opacity: {
                value: 0.5,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1 }
              },
              size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.1 }
              },
              links: {
                enable: true,
                distance: 150,
                color: "#8B5CF6",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out"
              }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" }
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
                push: { quantity: 4 }
              }
            }
          }}
        />

        <div className="relative z-10 container mx-auto px-4">
          {/* 3D Rotating Title */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{
                  rotateX: [0, 360],
                  backgroundPosition: ["0%", "100%"]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                About
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Floating Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ y, opacity }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateX: -15, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative flex flex-col h-full p-6 bg-black/90 rounded-lg">
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                    >
                      <skill.icon className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold ml-3 text-white">{skill.title}</h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Hover Lines Animation */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-100" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-200" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default About;