import { FC } from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, 
  SiTailwindcss, SiSvelte, SiNodedotjs, SiExpress,
  SiFirebase, SiSupabase, SiCloudflare, SiGit, SiGithub
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface TechCategory {
  category: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  icon: IconType;
}

const techData: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Svelte", icon: SiSvelte },
      { name: "React Native", icon: SiReact }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Cloudflare", icon: SiCloudflare }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub }
    ]
  }
];

const Technologies: FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 w-full relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute right-0 top-24 w-72 h-72 bg-primary-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-24 w-72 h-72 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">Technologies</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The technologies I use to build modern applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techData.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-dark-900/90 to-dark-800/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800/50 overflow-hidden hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-primary-600/20 to-purple-600/20 p-4">
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-gray-300 group-hover:text-primary-300 transition-colors duration-300">
                        <tech.icon size={24} />
                      </div>
                      <span className="text-gray-300 group-hover:text-primary-300 font-medium transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 