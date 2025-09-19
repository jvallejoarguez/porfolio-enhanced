import { FC } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Header: FC = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Technologies", value: "15+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.8,
      },
    },
  };

  return (
    <header className="relative bg-dark-950 text-white pt-24 pb-32 px-6 md:px-12 w-full overflow-hidden min-h-screen flex items-center">
      {/* Minimal background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-blur-circle w-72 h-72 top-20 right-20 bg-primary-600/10"></div>
        <div className="bg-blur-circle w-72 h-72 bottom-20 left-20 bg-primary-600/8"></div>
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-primary-400 text-xl md:text-2xl font-medium mb-4"
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 liquid-crystal-text-flow leading-tight"
            >
              Javier Vallejo
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-4">
                Full Stack Developer
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              I build exceptional digital experiences with modern web technologies,
              focusing on both performance and beautiful design that creates lasting impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-liquid px-8 py-4 font-semibold text-white shadow-lg text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 1.02, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-liquid-secondary px-8 py-4 font-semibold text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 1.02, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 max-w-md mx-auto md:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center md:text-left p-4 liquid-glass rounded-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start mt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/jvallejoarguez', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/javier-vallejo-arguez', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jvallejoarguez@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="md:w-2/5 flex justify-center items-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full liquid-glass-strong flex items-center justify-center p-1 relative z-10">
                <div className="bg-dark-950/30 backdrop-blur-sm rounded-full w-full h-full flex items-center justify-center overflow-hidden border border-white/10">
                  <motion.img
                    src="/img/pfp.jpg"
                    alt="Javier Vallejo"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 via-purple-500/15 to-pink-500/20 blur-xl animate-pulse"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
        >
          <motion.button
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header; 