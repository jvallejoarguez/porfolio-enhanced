import { FC, memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrls?: { label: string; url: string }[];
  badge?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Nosotros",
    description:
      "A personal couple PWA built for iOS. Features shared calendars, photo albums, mood tracking, quizzes, and more. Runs on a self-hosted backend connected via Cloudflare Tunnel.",
    technologies: ["Next.js 15", "React 19", "Hono", "PostgreSQL", "Drizzle"],
    imageUrl: "/img/nosotros.png",
    liveUrl: "https://www.youtube.com/shorts/c__sfVVFmIA",
  },
  {
    id: 2,
    title: "DB Games Grid 2.0",
    badge: "Internal",
    description:
      "A high-performance game grid system engineered for DigitalBeat, powering multiple gaming brands. Built with Svelte 5 and designed for fast rendering, smooth interactions, and integration with internal APIs.",
    technologies: ["Svelte 5", "TypeScript", "Node.js", "Custom APIs"],
    imageUrl: "/digibeat.jpg",
    liveUrls: [
      { label: "NorthStarBets", url: "https://www.northstarbets.ca" },
      { label: "HardRockBet", url: "https://www.hardrockbet.mx" },
    ],
  },
  {
    id: 3,
    title: "Warera Automator",
    description:
      "Next.js landing page connected to a Python backend on Railway that automates a third-party game via APIs. Enter your username and it handles everything else.",
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    imageUrl: "/img/warera_automator.png",
    liveUrl: "https://warera-automator.vercel.app/",
  },
  {
    id: 4,
    title: "LineUp",
    description:
      "A modern productivity ecosystem combining task organization, focus sessions, and AI-powered assistance. Minimal UI, fast interactions, and a workflow built for deep work.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    imageUrl: "/img/lineup.png",
    liveUrl: "https://lineupai.vercel.app/",
    githubUrl: "https://github.com/jvallejoarguez/lineup-code",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const Projects: FC = () => {
  return (
    <section className="section relative w-full py-32" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            <span className="liquid-text">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full ios-glass-strong p-1.5 md:p-2 hover:border-primary-500/30 transition-all duration-500 hover:scale-[1.02]">
                {/* Image */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Links */}
                  <div className="absolute bottom-3 right-3 z-20 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-black/60 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-primary-600/80 backdrop-blur-md rounded-full hover:bg-primary-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.liveUrls?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-600/80 backdrop-blur-md rounded-full hover:bg-primary-500 transition-colors text-xs font-medium min-h-[44px]"
                        aria-label={`Visit ${link.label}`}
                      >
                        <ExternalLink size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="px-3 md:px-4 py-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors flex items-center gap-2">
                    {project.title}
                    {project.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-gray-400 border border-white/10">
                        {project.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More on GitHub */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/jvallejoarguez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            More on GitHub <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
