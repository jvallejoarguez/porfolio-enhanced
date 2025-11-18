import { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, 
  SiTailwindcss, SiSvelte, SiNodedotjs, SiExpress,
  SiFirebase, SiSupabase, SiCloudflare, SiAmazon,
  SiFastapi, SiPostgresql,
  SiDocker, SiVite, SiGit, SiGithub, SiNextdotjs
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { Layers, Server, Database, Wrench } from 'lucide-react';

interface TechCategory {
  category: string;
  icon: React.ReactNode;
  items: TechItem[];
}

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techData: TechCategory[] = [
  {
    category: "Frontend",
    icon: <Layers className="w-5 h-5 text-blue-400" />,
    items: [
      { name: "Svelte 5", icon: SiSvelte, color: "#FF3E00" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-green-400" />,
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    ]
  },
  {
    category: "Data & Cloud",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5 text-orange-400" />,
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ]
  }
];

const Technologies: FC = () => {
  return (
    <section className="section relative py-16 md:py-32" id="technologies">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-primary w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2 block">Stack</span>
          <h2 className="text-5xl font-bold mb-6">
            Technologies <span className="liquid-text">& Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="ios-glass p-8"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <div className="p-2 rounded-lg bg-white/5">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white">{cat.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 transition-all duration-300 group cursor-default border border-transparent hover:border-white/10"
                  >
                    <item.icon className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" style={{ color: item.color }} />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
