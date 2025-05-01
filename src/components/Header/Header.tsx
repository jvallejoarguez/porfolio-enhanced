import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="relative bg-dark-950 text-white pt-24 pb-32 px-6 md:px-12 w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-400/10 rounded-full filter blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary-400 rounded-full animate-pulse-slow delay-100"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow delay-200"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-3/5 mb-12 md:mb-0 text-center md:text-left">
            <h2 className="text-primary-400 text-xl md:text-2xl font-medium mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Javier Vallejo</h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8">
              I build exceptional digital experiences with modern web technologies,
              focusing on both performance and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg 
                          font-medium transition-colors duration-300 shadow-lg shadow-primary-600/20"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-dark-800 text-primary-400 
                         border border-primary-600 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center items-center animate-float">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center p-1">
              <div className="bg-dark-950 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <img src="public\img\pfp.jpg" alt="Javier Vallejo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 