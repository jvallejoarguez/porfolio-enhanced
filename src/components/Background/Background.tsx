import { FC, memo } from "react";
import { motion } from "framer-motion";
import {
  SiSvelte,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiFastapi,
  SiDocker,
  SiAmazon,
  SiSupabase,
  SiCloudflare,
  SiTailwindcss,
  SiJavascript,
  SiKotlin,
  SiWordpress,
} from "react-icons/si";

const coreStack = [
  { name: "Svelte 5", icon: SiSvelte, color: "#FF3E00" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

const alsoWorkWith = [
  "React",
  "Next.js",
  "PostgreSQL",
  "FastAPI",
  "Docker",
  "AWS",
  "Supabase",
  "Cloudflare",
  "Tailwind",
  "Kotlin",
  "WordPress",
  "JavaScript",
];

const alsoWorkWithIcons: Record<string, typeof SiReact> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  PostgreSQL: SiPostgresql,
  FastAPI: SiFastapi,
  Docker: SiDocker,
  AWS: SiAmazon,
  Supabase: SiSupabase,
  Cloudflare: SiCloudflare,
  Tailwind: SiTailwindcss,
  JavaScript: SiJavascript,
  Kotlin: SiKotlin,
  WordPress: SiWordpress,
};

const experiences = [
  {
    company: "DigitalBeat LTD",
    location: "Gibraltar, Gibraltar · On-site",
    tenure: "Apr 2024 - Present",
    roles: [
      {
        title: "Full Stack Developer",
        period: "May 2025 - Present",
        points: [
          "Led development of the DigitalBeat games grid rewrite with Svelte and TypeScript, delivering around 50% faster performance than the legacy implementation.",
          "Shipped product improvements used by major brands including northstarbets.ca and hardrockbet.mx, with strong stakeholder feedback.",
          "Built and maintained optimization scripts in vanilla JavaScript to match client-specific requirements and improve delivery velocity.",
          "Collaborated with design and product teams to apply robust UI best practices, improve UX consistency, and support brand-level rollouts.",
          "Contributed to Arabic888Casino app development in Kotlin and supported cross-team feature delivery.",
          "Supported internal IT onboarding workflows by preparing developer equipment, workstation setup, and operational readiness for new team members.",
        ],
      },
      {
        title: "Web Operations Executive",
        period: "Apr 2024 - May 2025",
        points: [
          "Developed and optimized HTML, CSS, and JavaScript implementations to improve campaign performance and frontend reliability.",
          "Translated design mockups into responsive, brand-aligned pages and maintained cross-browser compatibility.",
          "Ran recurring troubleshooting and performance checks to keep releases stable and fast.",
          "Managed content versioning and operational workflows through Playtech CMS.",
        ],
      },
    ],
  },
  {
    company: "The Rock Hotel Gibraltar",
    location: "Gibraltar, Gibraltar · On-site",
    tenure: "Feb 2024 - Apr 2024",
    roles: [
      {
        title: "Web Developer Intern",
        period: "3 months",
        points: [
          "Led the Wall of Fame digital transformation, turning a physical exhibit into an interactive web experience with HTML, CSS, JavaScript, and Arosuite IDE.",
          "Built a touchscreen-compatible local version for on-site displays, adapting layouts for multiple screen sizes.",
          "Integrated AI-powered voice interaction and facial recognition concepts to create a more immersive visitor journey.",
        ],
      },
    ],
    links: [
      "https://www.rockhotelgibraltar.com/",
      "https://www.rockhotelgibraltar.com/about-the-hotel/wof",
    ],
  },
  {
    company: "Informática CR",
    location: "Spain · Remote",
    tenure: "Sep 2023 - Dec 2023",
    roles: [
      {
        title: "Web Developer Intern",
        period: "4 months",
        points: [
          "Built a WordPress-based digital printing ticket and receipt management system for real business operations.",
          "Implemented secure customer account flows, print request submission, and historical receipt tracking.",
          "Developed PDF and branded receipt generation processes with document storage and retrieval workflows.",
        ],
      },
    ],
    links: ["https://informaticacr.es/digitaltickets.php"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const Background: FC = () => {
  return (
    <section className="section relative py-16 md:py-32" id="background">
      {/* Background Orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-primary w-[600px] h-[600px] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2">
            About
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="liquid-text">Background</span>
          </h2>
        </motion.div>

        {/* Career Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ios-glass p-6 md:p-10 mb-8"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Full stack developer with professional experience delivering
            high-impact web products, internal platforms, and interactive
            customer experiences across Gibraltar and remote teams. I combine
            product thinking with engineering execution: performance,
            maintainability, and speed of delivery. I am AI-forward in daily
            workflows, working with agentic coding tools like Claude Code and
            Codex since 2025 to accelerate implementation, refactoring, and
            quality checks while keeping strong engineering standards.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6"
          >
            Work Experience
          </motion.p>

          <div className="space-y-5">
            {experiences.map((experience) => (
              <motion.article
                key={experience.company}
                variants={itemVariants}
                className="ios-glass p-5 md:p-7"
              >
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-gray-400">{experience.location}</p>
                  <p className="text-sm text-gray-500">{experience.tenure}</p>
                </div>

                <div className="space-y-4">
                  {experience.roles.map((role) => (
                    <div key={`${experience.company}-${role.title}-${role.period}`}>
                      <h4 className="text-sm md:text-base font-medium text-white/90">
                        {role.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">
                        {role.period}
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-300 leading-relaxed">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-primary-400 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {experience.links && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                    {experience.links.map((link) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-primary-400 hover:text-primary-300 transition-colors break-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* AI & Professional Edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="ios-glass p-6 md:p-8 mb-12 md:mb-16"
        >
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            AI & Professional Edge
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-300 leading-relaxed">
            <li className="flex gap-2">
              <span className="text-primary-400 mt-0.5">•</span>
              <span>
                Actively integrate AI-assisted development into production
                workflows for faster prototyping, code reviews, and iteration
                cycles.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-400 mt-0.5">•</span>
              <span>
                Keep up to date with new models, tooling ecosystems, and modern
                engineering workflows to maintain a competitive delivery edge.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-400 mt-0.5">•</span>
              <span>
                Strong collaborator across engineering, design, and operations;
                comfortable in client-facing meetings, product demos, and
                cross-functional planning.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Core Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6"
          >
            Core Stack
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {coreStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="ios-glass-strong p-6 md:p-8 flex flex-col items-center gap-3 group hover:border-white/20 transition-colors"
              >
                <tech.icon
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-sm md:text-base font-medium text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Also Work With */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6"
          >
            Also Work With
          </motion.p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {alsoWorkWith.map((tech) => {
              const Icon = alsoWorkWithIcons[tech];
              return (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm text-gray-400 bg-white/5 border border-white/5 hover:border-white/15 hover:text-gray-300 transition-colors"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {tech}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Background);
