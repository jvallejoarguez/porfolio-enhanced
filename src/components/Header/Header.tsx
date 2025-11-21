import { FC } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Header: FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.01 : 1,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Optimized Floating Orbs Background using CSS Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb orb-primary w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-[-50px] md:top-[-100px] left-[-50px] md:left-[-100px] animate-float"
          style={{ animationDelay: "0s", willChange: "transform" }}
        ></div>
        <div
          className="orb orb-secondary w-[250px] h-[250px] md:w-[400px] md:h-[400px] bottom-[-25px] md:bottom-[-50px] right-[-50px] md:right-[-100px] animate-float"
          style={{ animationDelay: "-2s", willChange: "transform" }}
        ></div>
        <div
          className="orb orb-accent w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[40%] left-[60%] animate-float"
          style={{ animationDelay: "-4s", willChange: "transform" }}
        ></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              <span className="block text-white mb-2">Hello, I'm</span>
              <span className="liquid-text">Javier Vallejo</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-light text-gray-300 mb-8"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              I build high-performance digital products where clean engineering
              meets thoughtful design.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              My focus is modern front-end architectures, real-time features,
              and scalable full-stack solutions powered by Svelte, TypeScript,
              and Node.js.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#projects" className="btn-liquid group">
                View Work
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a href="#contact" className="btn-liquid-secondary">
                Contact Me
              </a>
            </motion.div>

            {/* Stats / Highlight Line */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 justify-center lg:justify-start mb-8"
            >
              <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                2+ Years in Production
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                Modern Front-End & Full-Stack Developer
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <span>Svelte</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>JavaScript</span>
                <span>•</span>
                <span>Node.js</span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start mt-12"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/jvallejoarguez",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/javier-vallejo-arguez",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:jvallejoarguez@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0 mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-600 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-glow"></div>

              {/* Double Glass Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent">
                <div className="w-full h-full rounded-full ios-glass-strong p-2 overflow-hidden ring-1 ring-white/10 backdrop-blur-xl">
                  <img
                    src="/img/pfp.jpg"
                    alt="Javier Vallejo"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, 10, 0], opacity: [0.5, 1, 0.5] }
          }
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
