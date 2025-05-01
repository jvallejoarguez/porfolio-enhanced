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
        <div className="bg-blur-circle right-0 top-24 w-96 h-96 bg-primary-500/15"></div>
        <div className="bg-blur-circle left-0 bottom-24 w-96 h-96 bg-purple-600/15"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Skills</span>
            <h2 className="section-heading">
              <span className="relative z-10">Technologies</span>
              <span className="section-heading-underline"></span>
            </h2>
            <p className="section-description">
              The technologies I use to build modern applications
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techData.map((category, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden backdrop-blur-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 border border-gray-800/50 bg-gradient-to-br from-dark-900/90 to-dark-800/70"
            >
              <div className="bg-gradient-to-r from-primary-600/30 to-purple-600/30 p-5 relative">
                <h3 className="text-xl font-bold text-white relative z-10">{category.category}</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5 backdrop-blur-sm"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Decorative element */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-primary-500/20 rounded-full filter blur-xl"></div>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {category.items.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-3 group p-3 rounded-lg hover:bg-dark-800/50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-dark-800/70 flex items-center justify-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300 shadow-md group-hover:shadow-primary-500/20">
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