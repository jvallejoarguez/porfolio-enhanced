import { FC, memo } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jvallejoarguez@gmail.com",
    href: "mailto:jvallejoarguez@gmail.com",
    color: "text-primary-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "jvallejoarguez",
    href: "https://github.com/jvallejoarguez",
    color: "text-gray-300",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Javier Vallejo",
    href: "https://linkedin.com/in/javier-vallejo-arguez",
    color: "text-blue-400",
    external: true,
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const Contact: FC = () => {
  return (
    <section className="section relative py-16 md:py-32" id="contact">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="liquid-text">Together</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Available for freelance and full-time opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              className="ios-glass-strong p-6 md:p-8 flex flex-col items-center text-center gap-3 group hover:border-white/20 transition-all min-h-[44px]"
            >
              <div className={`${link.color} transition-transform group-hover:scale-110`}>
                <link.icon size={28} />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {link.label}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 flex items-center justify-center gap-1.5"
        >
          <MapPin size={14} />
          Gibraltar &middot; Remote Worldwide
        </motion.p>
      </div>
    </section>
  );
};

export default memo(Contact);
