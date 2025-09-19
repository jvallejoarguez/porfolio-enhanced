import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, 
  SiTailwindcss, SiSvelte, SiNodedotjs, SiExpress,
  SiFirebase, SiSupabase, SiCloudflare, SiGit, SiGithub,
  SiPython, SiFastapi, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiVercel, SiNetlify, SiVite, SiWebpack
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { TrendingUp, Award, Zap } from 'lucide-react';

interface TechCategory {
  category: string;
  items: TechItem[];
  icon: React.ReactNode;
  color: string;
}

interface TechItem {
  name: string;
  icon: IconType;
}

const techData: TechCategory[] = [
  {
    category: "Frontend",
    icon: <Zap className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Svelte", icon: SiSvelte },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Native", icon: SiReact }
    ]
  },
  {
    category: "Backend",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase }
    ]
  },
  {
    category: "Database & Cloud",
    icon: <Award className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: <Zap className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack }
    ]
  }
];

const Technologies: FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
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
            <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Skills</span>
            <h2 className="section-heading">
              <span className="relative z-10 liquid-crystal-text-flow">Technologies</span>
              <span className="section-heading-underline"></span>
            </h2>
            <p className="section-description">
              The technologies and tools I use to build modern, innovative applications
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techData.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={itemVariants}
              className="liquid-glass-card overflow-hidden"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <div className="ml-auto text-sm text-white/70">
                    {category.items.length} technologies
                  </div>
                </div>
              </div>
              
              {/* Technologies Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div 
                      key={techIndex}
                      className="group p-4 rounded-xl hover:bg-dark-800/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary-500/20"
                      onClick={() => setSelectedTech(tech)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-dark-800/70 flex items-center justify-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300 shadow-md group-hover:shadow-primary-500/20"
                          whileHover={{ rotate: 5 }}
                        >
                          <tech.icon size={24} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <span className="text-gray-300 group-hover:text-primary-300 font-medium transition-colors duration-300 text-center block">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Details Modal/Card */}
        {selectedTech && (
          <motion.div
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              className="liquid-crystal-strong p-8 max-w-md w-full"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-dark-800/70 flex items-center justify-center text-primary-400"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <selectedTech.icon size={40} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{selectedTech.name}</h3>

                <div className="text-center">
                  <p className="text-gray-400 text-lg">
                    Core technology in my development toolkit
                  </p>
                </div>
                
                <motion.button
                  className="mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300"
                  onClick={() => setSelectedTech(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Overall Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Technologies Mastered", value: "20+", icon: Award },
            { label: "Years of Experience", value: "3+", icon: TrendingUp },
            { label: "Projects Completed", value: "12+", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 liquid-glass transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-400"
                whileHover={{ rotate: 10 }}
              >
                <stat.icon size={24} />
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 