import { FC, useState, useEffect } from 'react';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                JVallejo
              </span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Experience
            </a>
            <a 
              href="#technologies" 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Technologies
            </a>
            <a 
              href="#contact" 
              className="text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50 rounded-md p-1"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md p-4 border-t border-gray-800">
          <div className="space-y-4">
            <a 
              href="#projects" 
              className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#technologies" 
              className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>
            <a 
              href="#contact" 
              className="block text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 px-4 py-2 rounded-md w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 