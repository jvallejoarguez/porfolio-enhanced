import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase, Code, Mail } from 'lucide-react';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Code },
    { name: 'Technologies', href: '#technologies', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none`}
      >
        <div 
          className={`
            pointer-events-auto
            transition-all duration-500 ease-[0.16,1,0.3,1]
            ${isScrolled ? 'w-auto' : 'w-full max-w-7xl'}
          `}
        >
          <div 
            className={`
              relative flex items-center justify-between
              ${isScrolled 
                ? 'bg-black/40 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-2xl' 
                : 'bg-transparent py-4 px-4 md:px-0'}
            `}
          >
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mr-8 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-purple-600 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                JV
              </div>
              <span className={`${isScrolled ? 'hidden md:block' : 'block'}`}>JVallejo</span>
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
                  ${isScrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10'}
                `}
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white bg-white/10 rounded-full backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors text-gray-200 hover:text-white"
                  >
                    <div className="p-2 bg-white/5 rounded-lg">
                      <link.icon size={20} />
                    </div>
                    <span className="font-medium text-lg">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
