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
};

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
          className="ios-glass p-6 md:p-10 mb-12 md:mb-16"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I'm a full stack developer based in Gibraltar, currently at{" "}
            <span className="text-white font-medium">DigitalBeat</span> where
            I've grown from CMS Executive to Full Stack Developer — building
            high-performance game grids and internal tools with Svelte 5,
            TypeScript, and Node.js. Before that, I built an interactive digital
            exhibit at{" "}
            <span className="text-white font-medium">The Rock Hotel</span> and
            developed business automation systems at{" "}
            <span className="text-white font-medium">Informática CR</span>. I
            focus on clean architecture, fast UIs, and shipping products that
            work well at scale.
          </p>
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
