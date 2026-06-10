import { FC } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/jvallejoarguez", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/javier-vallejo-arguez",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jvallejoarguez@gmail.com", label: "Email" },
];

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Background", href: "#background" },
  { name: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <header className="relative min-h-[100dvh] min-h-screen flex flex-col overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb orb-primary w-[280px] h-[280px] md:w-[500px] md:h-[500px] top-[-60px] md:top-[-100px] left-[-80px] md:left-[-100px] animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="orb orb-secondary w-[220px] h-[220px] md:w-[400px] md:h-[400px] bottom-[-40px] md:bottom-[-50px] right-[-60px] md:right-[-100px] animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="orb orb-accent w-[180px] h-[180px] md:w-[300px] md:h-[300px] top-[45%] left-[55%] animate-float hidden md:block"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Navigation — part of the page, scrolls away naturally */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.6,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative z-20 flex-shrink-0"
      >
        <div className="max-w-6xl lg:max-w-7xl mx-auto w-full px-5 sm:px-6 pt-6 sm:pt-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold tracking-tight transition-transform group-hover:scale-105">
              JV
            </div>
            <span className="text-sm font-semibold text-white/80 hidden sm:block">
              JVallejo
            </span>
          </a>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <motion.div
        className="flex-1 flex items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl lg:max-w-7xl mx-auto w-full px-5 sm:px-6 py-6 sm:py-8">
          {/* Two-card grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
            {/* ── Identity Card ─────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="bento-card p-6 sm:p-8 lg:p-10 col-span-full lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            >
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-gray-500 mb-4 lg:mb-6">
                Full Stack Developer
              </p>
              <h1 className="hero-name text-[2.8rem] sm:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] mb-4 lg:mb-6">
                <span className="liquid-text block">Javier</span>
                <span className="liquid-text block">Vallejo</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-sm leading-relaxed font-light mb-6 lg:mb-8">
                I build high-performance digital products.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3">
                <a
                  href="#projects"
                  className="btn-hero-primary group min-h-[44px] flex items-center justify-center gap-2 text-sm"
                >
                  View Work
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="btn-liquid-secondary min-h-[44px] flex items-center justify-center text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            {/* ── Photo Card ────────────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="bento-card p-0 col-span-full lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden group order-1 lg:order-2"
            >
              <div className="relative w-full h-full min-h-[220px] sm:min-h-[280px] lg:min-h-full">
                <img
                  src="/img/pfp.jpg"
                  alt="Javier Vallejo, Full Stack Developer"
                  width={979}
                  height={1200}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Social + Location — below grid, no card needed */}
          <motion.div
            variants={itemVariants}
            className="mt-4 sm:mt-5 flex items-center justify-between px-1"
          >
            <div className="flex items-center gap-0.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:bg-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <span className="text-[11px] sm:text-xs text-gray-600 flex items-center gap-1.5">
              <MapPin size={12} />
              Gibraltar · Remote
            </span>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
