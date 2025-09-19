import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#technologies', label: 'Technologies' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'auto', label: 'Auto', icon: Monitor },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'liquid-glass-strong shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold liquid-crystal-text">
                JVallejo
              </span>
            </a>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Theme Switcher */}
            <div className="relative">
              <motion.button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-300 rounded-lg hover:bg-dark-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Sun size={20} /> : 
                 theme === 'dark' ? <Moon size={20} /> : 
                 <Monitor size={20} />}
              </motion.button>

              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    className="absolute right-0 top-12 liquid-crystal rounded-lg border border-gray-700/50 py-2 min-w-[120px]"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {themeOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value as any);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-200 ${
                          theme === option.value
                            ? 'text-primary-400 bg-primary-600/10'
                            : 'text-gray-300 hover:text-white hover:bg-dark-700/50'
                        }`}
                        whileHover={{ x: 2 }}
                      >
                        <option.icon size={16} />
                        {option.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.a
              href="#contact"
              className="btn-liquid !py-2.5 !px-6 shadow-lg text-white font-medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile theme switcher */}
            <motion.button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-300 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Sun size={20} /> : 
               theme === 'dark' ? <Moon size={20} /> : 
               <Monitor size={20} />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 rounded-md p-1"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden liquid-crystal border-t border-gray-800/50 shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="p-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile theme options */}
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    className="liquid-crystal rounded-lg border border-gray-700/50 p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <h4 className="text-white font-medium mb-3">Theme</h4>
                    <div className="space-y-2">
                      {themeOptions.map((option) => (
                        <motion.button
                          key={option.value}
                          onClick={() => {
                            setTheme(option.value as any);
                            setShowThemeMenu(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded-lg transition-colors duration-200 ${
                            theme === option.value
                              ? 'text-primary-400 bg-primary-600/10'
                              : 'text-gray-300 hover:text-white hover:bg-dark-700/50'
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          <option.icon size={16} />
                          {option.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.a
                href="#contact"
                className="block text-white btn-liquid transition-colors duration-300 px-6 py-3 w-full text-center font-medium mt-6 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 