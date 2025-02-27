import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const contactInfo = {
    email: "antonywaithaka80@gmail.com",
    phone: "+154114595589",
  };

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
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 80% 80%, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)"
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
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          variants={itemVariants}
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
            Contact
          </motion.span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div 
            className="flex flex-col md:flex-row gap-8 mb-12"
            variants={containerVariants}
          >
            {/* Email Card */}
            <motion.div
              className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-2"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-purple-500" />
                <h3 className="text-xl font-semibold">Email</h3>
              </motion.div>
              <motion.a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {contactInfo.email}
              </motion.a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-2"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-purple-500" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </motion.div>
              <motion.a 
                href={`tel:${contactInfo.phone}`}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {contactInfo.phone}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <motion.textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;