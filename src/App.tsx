import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import LiquidCrystalBackground from './components/LiquidCrystalBackground/LiquidCrystalBackground';
import LiquidCrystalMouseTracker from './components/LiquidCrystalMouseTracker/LiquidCrystalMouseTracker';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden">
        <LiquidCrystalBackground />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.8
          }}
          className="text-center relative z-10"
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-6 liquid-crystal-strong rounded-full flex items-center justify-center liquid-crystal-float"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </motion.div>
          <motion.h2
            className="text-3xl font-bold liquid-crystal-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            JVallejo
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Liquid Crystal Portfolio
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          className="min-h-screen bg-dark-950 flex flex-col relative overflow-x-hidden"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          {/* Aurora background effect */}
          <div className="fixed inset-0 aurora-bg pointer-events-none" />
          
          <ScrollProgress />
          <Navbar />
          
          <motion.div className="pt-16">
            <Header />
            <main>
              <motion.div
                id="projects"
                className="section section-light relative"
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.8
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Projects />
              </motion.div>

              <motion.div
                id="experience"
                className="section section-dark relative"
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.8,
                  delay: 0.1
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Experience />
              </motion.div>

              <motion.div
                id="technologies"
                className="section section-light relative"
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.8,
                  delay: 0.2
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Technologies />
              </motion.div>

              <motion.div
                id="contact"
                className="section section-dark relative"
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.8,
                  delay: 0.3
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Contact />
              </motion.div>
            </main>
            <Footer />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
