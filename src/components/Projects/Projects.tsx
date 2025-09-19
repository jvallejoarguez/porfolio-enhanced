import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, Star, GitFork } from 'lucide-react';

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
  stats?: {
    stars?: number;
    forks?: number;
    views?: number;
  };
}

const projectData: Project[] = [
  {
    id: 1,
    title: "LineUp - Task Management and Productivity App",
    description: "LineUp is a modern, feature-rich task management and productivity application designed to help users organize their workflows, manage tasks, and boost productivity with focused work sessions.",
    technologies: ["React.js", "TypeScript", "Node.js", "Supabase", "JavaScript", "Vercel", "Tailwind CSS"],
    imageUrl: "/lineup.png",
    liveUrl: "https://www.lineupai.app/",
    githubUrl: "https://github.com/jvallejoarguez/lineup-code",
    category: "Full Stack",
    featured: true,
    stats: {
      stars: 12,
      forks: 3,
      views: 150
    }
  },
  {
    id: 2,
    title: "WARERA AUTOMATOR - Business Automation Platform",
    description: "WARERA AUTOMATOR is a sophisticated business automation platform that provides 24/7 company management automation. Features include automated production cycles, worker management, and server-side automation to eliminate tedious manual tasks.",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Railway", "Vercel", "Supabase", "Tailwind CSS"],
    imageUrl: "/img/warera_automator.png",
    liveUrl: "https://warera-automator.vercel.app/",
    category: "Full Stack",
    featured: true,
    stats: {
      stars: 8,
      forks: 2,
      views: 89
    }
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const Projects: FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);
  
  const filteredProjects = projectData.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const featuredMatch = !showFeatured || project.featured;
    return categoryMatch && featuredMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section className="py-24 px-6 md:px-12 w-full relative">
      {/* Minimal background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-blur-circle right-0 top-24 w-80 h-80 bg-primary-600/8"></div>
        <div className="bg-blur-circle left-0 bottom-24 w-80 h-80 bg-primary-600/6"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Portfolio</span>
            <h2 className="section-heading">
              <span className="relative z-10 liquid-crystal-text-flow">My Projects</span>
              <span className="section-heading-underline"></span>
            </h2>
            <p className="section-description">
              Here are my recent projects showcasing my skills and experience
              in building modern web applications.
            </p>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-primary-400" />
            <span className="text-gray-400 text-sm">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                    : "bg-dark-800/50 text-gray-400 hover:text-primary-400 hover:bg-dark-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => setShowFeatured(!showFeatured)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              showFeatured
                ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                : "bg-dark-800/50 text-gray-400 hover:text-yellow-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star size={16} />
            Featured Only
          </motion.button>
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory + showFeatured}
            transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="liquid-glass-card overflow-hidden">
                  {/* Project Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-30">
                      <span className="flex items-center gap-1 px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium">
                        <Star size={12} />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-30">
                    <span className="px-3 py-1 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-400 text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/60 z-10"></div>
                    <motion.img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-dark-900/80 flex items-center justify-center gap-3 z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-primary-600 hover:bg-primary-700 rounded-full text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      
                      {project.githubUrl && (
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-dark-700 hover:bg-dark-600 rounded-full text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View on GitHub"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}

                      <motion.button
                        className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Preview"
                      >
                        <Eye size={20} />
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-dark-800/50 border border-gray-700/30 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-primary-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Stats */}
                    {project.stats && (
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {project.stats.stars && (
                          <div className="flex items-center gap-1">
                            <Star size={12} />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                        {project.stats.forks && (
                          <div className="flex items-center gap-1">
                            <GitFork size={12} />
                            <span>{project.stats.forks}</span>
                          </div>
                        )}
                        {project.stats.views && (
                          <div className="flex items-center gap-1">
                            <Eye size={12} />
                            <span>{project.stats.views}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/jvallejoarguez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 btn-liquid-secondary text-white font-medium px-8 py-4 group liquid-crystal-glow"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
          >
            <Github size={20} />
            <span>View More Projects on GitHub</span>
            <motion.div
              className="w-4 h-4"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ExternalLink size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 