import { FC, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "LineUp - Task Management and Productivity App",
    description: "LineUp is a modern, feature-rich task management and productivity application designed to help users organize their workflows, manage tasks, and boost productivity with focused work sessions.",
    technologies: ["React.js", "Node.js", "Supabase", "JavaScript"],
    imageUrl: "/lineup.png",
    liveUrl: "https://www.lineupai.app/",
    githubUrl: "https://github.com/jvallejoarguez/lineup-code"
  }
];

const Projects: FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section className="py-24 px-6 md:px-12 w-full relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-blur-circle right-0 top-24 w-96 h-96 bg-primary-500/15"></div>
        <div className="bg-blur-circle left-0 bottom-24 w-96 h-96 bg-primary-600/15"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Portfolio</span>
            <h2 className="section-heading">
              <span className="relative z-10">My Projects</span>
              <span className="section-heading-underline"></span>
            </h2>
            <p className="section-description">
              Here's my recent project showcasing my skills and experience
              in building web applications.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="card group backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:translate-y-0"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-56 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-600/30 to-dark-900/90 mix-blend-multiply z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with links that appear on hover */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 bg-dark-900/80 z-20 opacity-0 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : ''}`}>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary !rounded-full !px-6 flex items-center gap-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0"
                      aria-label="Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span>Visit Website</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-dark-800 hover:bg-dark-700 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0"
                      aria-label="View on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tag bg-primary-900/40 border-primary-700/40">{tech}</span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center transition-colors duration-300 font-medium"
                    >
                      <span>Visit LineUp AI</span>
                      <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium"
                    >
                      <span>View on GitHub</span>
                      <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-16">
            <a 
              href="https://github.com/jvallejoarguez" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-dark-800/50 hover:bg-dark-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-gray-700/50 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>View More Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 