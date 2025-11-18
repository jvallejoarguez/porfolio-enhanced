import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "DB Games Grid 2.0",
    description: "A high-performance game grid system engineered for DigitalBeat, powering multiple gaming brands. Built with Svelte 5 and designed for fast rendering, smooth interactions, and integration with internal APIs. The architecture is component-driven and optimized for performance, making it easy to extend, maintain, and adapt to different brands and layouts.",
    technologies: ["Svelte 5", "TypeScript", "Node.js", "Custom APIs"],
    imageUrl: "/digibeat.jpg",
    category: "Frontend / Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "LineUp",
    description: "A modern productivity ecosystem combining task organization, focus sessions, and AI-powered assistance. LineUp is designed for speed and clarity: minimal UI, fast interactions, and a workflow that keeps users in a deep-work mindset. Includes task boards, timers, and basic analytics to help users understand and improve their productivity habits.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    imageUrl: "/lineup.png",
    liveUrl: "https://www.lineupai.app/",
    githubUrl: "https://github.com/jvallejoarguez/lineup-code",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Warera Automator",
    description: "Enterprise-grade business automation platform. Orchestrates 24/7 production cycles, worker management, and server-side operations.",
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    imageUrl: "/img/warera_automator.png",
    liveUrl: "https://warera-automator.vercel.app/",
    category: "Full Stack",
    featured: true,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const Projects: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = projectData.filter(project => 
    selectedCategory === "All" || project.category.includes(selectedCategory) || (selectedCategory === "Frontend" && project.category.includes("Frontend"))
  );

  return (
    <section className="section relative w-full py-32" id="projects">
      {/* Background Accents */}
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-primary w-[600px] h-[600px] top-40 right-0 opacity-20"></div>
        <div className="orb orb-secondary w-[500px] h-[500px] bottom-0 left-0 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full ios-glass bg-white/5 mb-6"
          >
            <Star size={16} className="text-purple-400" />
            <span className="text-sm text-purple-200">Featured Projects</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Featured <span className="liquid-text">Projects</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-105' 
                  : 'ios-glass text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group perspective-1000"
              >
                <div className="tilt-card h-full ios-glass-strong p-2 hover:border-primary-500/30 transition-colors duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Floating Actions */}
                    <div className="absolute bottom-4 right-4 z-20 flex gap-3 translate-y-0 opacity-100 lg:translate-y-10 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener" className="p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener" className="p-3 bg-primary-600 backdrop-blur-md rounded-full hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/20">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 backdrop-blur-md rounded-full text-xs font-medium text-yellow-300 border border-yellow-500/20 flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-4">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                      {project.liveUrl ? (
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-primary-400 font-medium flex items-center gap-1">
                          View Live <ExternalLink size={12} />
                        </span>
                      ) : project.githubUrl ? (
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-primary-400 font-medium flex items-center gap-1">
                          View on GitHub <Github size={12} />
                        </span>
                      ) : (
                        <span className="text-gray-600">Internal / Private</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/jvallejoarguez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            See all projects on GitHub <Github size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
