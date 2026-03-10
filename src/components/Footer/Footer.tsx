import { FC, memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/jvallejoarguez",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/javier-vallejo-arguez",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:jvallejoarguez@gmail.com",
    label: "Email",
  },
];

const Footer: FC = () => {
  return (
    <footer className="relative py-8 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 md:pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-500">
        <div className="text-center md:text-left">
          &copy; 2025 Javier Vallejo
        </div>
        <div className="flex items-center justify-center md:justify-end gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-1.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
