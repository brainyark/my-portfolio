import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Project card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.4
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
      tags: ["React", "Node.js", "AI", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      color: "blue"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat platform with AI-powered language translation and sentiment analysis",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
      tags: ["Next.js", "OpenAI", "WebSocket", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      color: "purple"
    },
    {
      title: "Financial Dashboard",
      description: "Interactive financial analytics dashboard with real-time data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "D3.js", "Firebase", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "emerald"
    },
    {
      title: "Social Media Platform",
      description: "Feature-rich social platform with real-time updates and media sharing",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "AWS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      color: "pink"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 overflow-hidden perspective-1000"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to right, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 100%)",
            "linear-gradient(to left, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 100%)",
            "linear-gradient(to right, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 100%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Projects
          </motion.span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              style={{ perspective: 2000 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-xl overflow-hidden bg-black border border-gray-800 transform-gpu transition-all duration-300">
                {/* Project Image with Parallax */}
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </motion.div>

                {/* Project Content */}
                <motion.div 
                  className="relative p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300">
                    {project.description}
                  </p>

                  {/* Tags with animation */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(168,85,247,0.2)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links with hover effects */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;