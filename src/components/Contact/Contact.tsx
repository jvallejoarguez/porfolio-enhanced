import { FC, useState, memo } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section className="section relative py-16 md:py-32" id="contact">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-accent w-[600px] h-[600px] bottom-0 left-0 opacity-20"></div>
        <div className="orb orb-secondary w-[400px] h-[400px] top-1/2 right-0 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-semibold tracking-widest text-sm uppercase mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-5xl font-bold mb-6">
            Let's Work <span className="liquid-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have an idea, product, or platform you want to build or improve? I'm
            open to collaborations, freelance opportunities, and technical
            projects where clean UX and solid engineering matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ios-glass-strong p-6 md:p-8 lg:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs md:text-sm font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[16px] md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white/10 transition-all min-h-[44px]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs md:text-sm font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[16px] md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white/10 transition-all min-h-[44px]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs md:text-sm font-medium text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[16px] md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white/10 transition-all min-h-[44px]"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs md:text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 md:px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[16px] md:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 md:py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] md:min-h-[auto] ${
                  isSubmitted
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "btn-liquid"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    Message Sent <CheckCircle size={20} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="ios-glass p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 md:space-y-6">
                <a
                  href="mailto:jvallejoarguez@gmail.com"
                  className="flex items-center gap-3 md:gap-4 group min-h-[44px] md:min-h-auto"
                >
                  <div className="p-2.5 md:p-3 rounded-xl bg-white/5 group-hover:bg-primary-500/20 transition-colors text-primary-400 flex-shrink-0 min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs md:text-sm text-gray-400">
                      Email
                    </div>
                    <div className="text-white font-medium text-sm md:text-base">
                      jvallejoarguez@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 group min-h-[44px] md:min-h-auto">
                  <div className="p-2.5 md:p-3 rounded-xl bg-white/5 text-purple-400 flex-shrink-0 min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-gray-400">
                      Location
                    </div>
                    <div className="text-white font-medium text-sm md:text-base">
                      Gibraltar (Remote Worldwide)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ios-glass p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Social Profiles
              </h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                <a
                  href="https://github.com/jvallejoarguez"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Github
                      size={20}
                      className="text-gray-300 group-hover:text-white"
                    />
                    <span className="text-sm md:text-base text-gray-300 group-hover:text-white">
                      GitHub
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/javier-vallejo-arguez"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group min-h-[44px]"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Linkedin
                      size={20}
                      className="text-gray-300 group-hover:text-white"
                    />
                    <span className="text-sm md:text-base text-gray-300 group-hover:text-white">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
