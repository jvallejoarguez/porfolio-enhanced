import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Briefcase, User, Mail } from "lucide-react";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
    }
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Background", href: "#background", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 safe-area-inset-top pointer-events-none md:top-6`}
      >
        <div
          className={`
            pointer-events-auto
            transition-all duration-500 ease-[0.16,1,0.3,1]
            ${isScrolled ? "w-auto" : "w-full max-w-7xl"}
          `}
        >
          <div
            className={`
              relative flex items-center justify-between
              ${
                isScrolled
                  ? "ios-glass py-3 px-6 shadow-2xl bg-black/20"
                  : "bg-transparent py-4 px-4 md:px-0"
              }
            `}
          >
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mr-8 group"
            >
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold tracking-tight group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <span className="relative z-10">JV</span>
                <div className="absolute inset-[1px] rounded-[10px] bg-black/30 backdrop-blur-sm" />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold tracking-tight z-20">JV</span>
              </div>
              <span className={`${isScrolled ? "hidden md:block" : "block"}`}>
                JVallejo
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Call to Action (Desktop) */}
            <div className="hidden md:block ml-8">
              <a
                href="#contact"
                className={`
                  btn-ios text-sm py-2 px-5
                  ${isScrolled ? "bg-white/10 hover:bg-white/20" : "bg-white/10"}
                `}
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-3 text-white bg-white/10 rounded-full backdrop-blur-md active:scale-95 transition-transform min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.95,
              y: prefersReducedMotion ? 0 : -20,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.95,
              y: prefersReducedMotion ? 0 : -20,
            }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
            id="mobile-menu"
            className="fixed top-20 left-0 right-0 z-40 md:hidden safe-area-inset-top"
          >
            <div className="ios-glass-strong mx-4 p-4 shadow-2xl border-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors text-gray-200 hover:text-white active:bg-white/5 min-h-[44px]"
                  >
                    <div className="p-3 bg-white/5 rounded-lg">
                      <link.icon size={24} />
                    </div>
                    <span className="font-medium text-lg">{link.name}</span>
                  </a>
                ))}

                {/* CTA Button in Mobile Menu */}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-ios w-full text-center py-3 px-6 block min-h-[44px] flex items-center justify-center"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
