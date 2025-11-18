import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  logo?: string;
}

const jobData: Job[] = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "DigitalBeat LTD",
    period: "May 2025 – Present",
    logo: "/digibeat.jpg",
    description: [
      "Building and maintaining custom game grid systems with Svelte 5 for high-performance rendering and smooth UX.",
      "Implementing front-end features for high-traffic gaming brands, focusing on speed, stability, and component reusability.",
      "Integrating front-end applications with internal APIs and backend services using TypeScript and Node.js.",
      "Contributing to internal tools and automations that support product, marketing, and operations teams."
    ]
  },
  {
    id: 2,
    position: "CMS Executive",
    company: "DigitalBeat LTD",
    period: "Apr 2024 – Apr 2025",
    logo: "/digibeat.jpg",
    description: [
      "Delivered core front-end modules across multiple brands using modern JavaScript and component-based architectures.",
      "Collaborated with designers and backend engineers to ship production-ready features and internal tools.",
      "Helped improve code quality, reusability, and maintainability across projects."
    ]
  },
  {
    id: 3,
    position: "Web Developer",
    company: "The Rock Hotel Gibraltar",
    period: "Feb 2024 – Apr 2024",
    logo: "/the-rock-hotel.jpg",
    description: [
      "Led the 'Wall of Fame' digital transformation, creating an interactive web exhibit.",
      "Implemented AI-powered voice interactions and facial recognition features.",
      "Built a seamless touch-screen interface for on-site guest engagement."
    ]
  },
  {
    id: 4,
    position: "Web Developer",
    company: "Informática CR",
    period: "Sep 2023 – Dec 2023",
    logo: "/informatica-cr.png",
    description: [
      "Built a comprehensive Digital Printing Service Management System.",
      "Developed a secure client portal with real-time order tracking.",
      "Automated PDF generation and receipt handling workflows."
    ]
  }
];

const Experience: FC = () => {
  const [activeJobId, setActiveJobId] = useState<number>(1);

  return (
    <section className="section relative py-32" id="experience">
       {/* Background Blobs */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2 block">Career Path</span>
          <h2 className="text-5xl font-bold mb-6">
            Professional <span className="liquid-text">Experience</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Navigation Rail */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-4">
              {jobData.map((job) => (
                <motion.button
                  key={job.id}
                  onClick={() => setActiveJobId(job.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                    activeJobId === job.id 
                      ? 'bg-white/10 shadow-xl ring-1 ring-white/20' 
                      : 'hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 opacity-0 transition-opacity duration-500 ${activeJobId === job.id ? 'opacity-100' : ''}`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium text-lg transition-colors ${activeJobId === job.id ? 'text-white' : 'text-gray-400'}`}>
                        {job.company}
                      </span>
                      {activeJobId === job.id && (
                        <motion.div layoutId="active-dot" className="w-2 h-2 bg-primary-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></motion.div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{job.period}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              {jobData.map((job) => (
                activeJobId === job.id && (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative"
                  >
                    <div className="ios-glass-strong p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                         {job.logo && (
                          <div className="w-20 h-20 rounded-2xl bg-white p-2 flex-shrink-0 shadow-lg">
                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{job.position}</h3>
                          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                            <span className="flex items-center gap-1"><Building2 size={14} /> {job.company}</span>
                            <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {job.description.map((desc, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                            className="flex gap-4 group"
                          >
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500/50 group-hover:bg-primary-400 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300"></span>
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
