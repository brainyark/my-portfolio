import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Cpu, Palette, Globe2, Layers, Shield, 
  Smartphone, Cloud, Sparkles, Database 
} from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with React, Node.js, and modern frameworks",
      features: ["React/Next.js", "Node.js", "RESTful APIs", "Responsive Design"]
    },
    {
      icon: Database,
      title: "AI Solutions",
      description: "Intelligent features and ML models integration for smarter applications",
      features: ["Machine Learning", "AI Integration", "Data Analysis", "Automation"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native",
      features: ["React Native", "iOS", "Android", "Mobile UI/UX"],
      color: "green",
      gradient: "from-green-600/20 to-emerald-400/20"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Implementation of robust security measures and best practices",
      features: ["Auth Systems", "Data Encryption", "Security Audits", "HTTPS"],
      color: "red",
      gradient: "from-red-600/20 to-orange-400/20"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive interface design with modern aesthetics",
      features: ["Figma", "User Research", "Prototyping", "Design Systems"],
      color: "pink",
      gradient: "from-pink-600/20 to-purple-400/20"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and deployment strategies",
      features: ["AWS", "Docker", "CI/CD", "Scalability"],
      color: "orange",
      gradient: "from-orange-600/20 to-yellow-400/20"
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description: "End-to-end development from frontend to backend",
      features: ["Frontend", "Backend", "Database", "API Design"],
      color: "indigo",
      gradient: "from-indigo-600/20 to-blue-400/20"
    },
    {
      icon: Globe2,
      title: "E-commerce Solutions",
      description: "Custom online store development and integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory", "Analytics"],
      color: "teal",
      gradient: "from-teal-600/20 to-green-400/20"
    },
    {
      icon: Sparkles,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency",
      features: ["Speed Testing", "Code Splitting", "Caching", "SEO"],
      color: "amber",
      gradient: "from-amber-600/20 to-yellow-400/20"
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Smart device integration and IoT system development",
      features: ["Device Integration", "Real-time Monitoring", "Sensor Data", "Smart Home"],
      color: "cyan",
      gradient: "from-cyan-600/20 to-blue-400/20"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Large-scale data processing and analytics solutions",
      features: ["Data Processing", "Analytics", "Visualization", "Insights"],
      color: "violet",
      gradient: "from-violet-600/20 to-purple-400/20"
    },
    {
      icon: Shield,
      title: "Blockchain Development",
      description: "Decentralized applications and smart contract development",
      features: ["Smart Contracts", "DApps", "Web3", "Crypto Integration"],
      color: "emerald",
      gradient: "from-emerald-600/20 to-green-400/20"
    },
    {
      icon: Globe2,
      title: "API Development",
      description: "Custom API design and development for seamless integration",
      features: ["REST APIs", "GraphQL", "Microservices", "Documentation"],
      color: "rose",
      gradient: "from-rose-600/20 to-pink-400/20"
    },
    {
      icon: Sparkles,
      title: "DevOps Services",
      description: "Streamlined development and deployment automation",
      features: ["CI/CD", "Infrastructure", "Monitoring", "Automation"],
      color: "fuchsia",
      gradient: "from-fuchsia-600/20 to-purple-400/20"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(123,31,162,0.15) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 80% 80%, rgba(76,29,149,0.15) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 20% 20%, rgba(123,31,162,0.15) 0%, rgba(0,0,0,0) 70%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Animated Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(139,92,246,0)",
                "0 0 20px rgba(139,92,246,0.5)",
                "0 0 10px rgba(139,92,246,0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {" Services "}
            </span>
            Offered
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive solutions tailored to your needs, from concept to deployment
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200" />
              
              <div className="relative p-6 bg-black rounded-lg border border-gray-800 h-full">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                  >
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold ml-3 text-white">{service.title}</h3>
                </motion.div>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;