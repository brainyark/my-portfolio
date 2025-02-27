import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Code2, Cpu } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const iconsRef = useRef(null);

  const particlesInit = async (engine: any) => {
    console.log(engine);
    await loadFull(engine);
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#4F46E5" },
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
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true
            }
          }
        }}
      />

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/media/me.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {/* Icons */}
          <motion.div 
            className="flex items-center justify-center gap-3 mb-8"
            variants={iconVariants}
          >
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Code2 className="w-8 h-8 text-blue-500" />
            </motion.div>
            <motion.div whileHover={{ rotate: -360, scale: 1.2 }} transition={{ duration: 0.3 }}>
              <Cpu className="w-8 h-8 text-purple-500" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12"
            variants={textVariants}
          >
            I'm a 
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {" WEB DEVELOPER "}
            </motion.span>
            & 
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 4
              }}
            >
              {" FULL STACK DEVELOPER"}
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Building beautiful, scalable, and user-centric digital experiences
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;