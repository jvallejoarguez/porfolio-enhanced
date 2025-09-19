import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-6 md:px-12 w-full relative">
      {/* Minimal background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-blur-circle left-0 top-24 w-80 h-80 bg-primary-600/8"></div>
        <div className="bg-blur-circle right-0 bottom-24 w-80 h-80 bg-primary-600/6"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Contact</span>
            <h2 className="section-heading">
              <span className="relative z-10 liquid-crystal-text-flow">Get In Touch</span>
              <span className="section-heading-underline"></span>
            </h2>
            <p className="section-description">
              Ready to bring your ideas to life? Let's discuss your next project or just connect for a friendly chat.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="liquid-glass-card rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-2 bg-primary-600/20 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Send className="w-5 h-5 text-primary-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-600 text-white rounded-lg'
                      : 'btn-liquid text-white'
                  }`}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info */}
            <div className="liquid-glass-card rounded-2xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="p-2 bg-primary-600/20 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-800/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">jvallejoarguez@gmail.com</p>
                    <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-800/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Gibraltar</p>
                    <p className="text-sm text-gray-500">Open to remote work worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-800/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Availability</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <p className="text-gray-400">Available for projects</p>
                    </div>
                    <p className="text-sm text-gray-500">Usually respond within 2-4 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="liquid-glass-card rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: Github,
                    label: 'GitHub',
                    username: '@jvallejoarguez',
                    href: 'https://github.com/jvallejoarguez',
                    color: 'hover:bg-gray-700'
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    username: 'Javier Vallejo',
                    href: 'https://linkedin.com/in/javier-vallejo-arguez',
                    color: 'hover:bg-blue-600'
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    username: 'jvallejoarguez@gmail.com',
                    href: 'mailto:jvallejoarguez@gmail.com',
                    color: 'hover:bg-primary-600'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300 group ${social.color}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="p-2 bg-dark-700/50 rounded-lg group-hover:bg-primary-600/20 transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <social.icon className="w-5 h-5 text-primary-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium">{social.label}</h4>
                      <p className="text-gray-400 text-sm">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 