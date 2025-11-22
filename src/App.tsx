import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import LiquidCrystalBackground from './components/LiquidCrystalBackground/LiquidCrystalBackground';

const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Technologies = lazy(() => import('./components/Technologies/Technologies'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const LazyLoadFallback = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[200]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 mb-8 relative">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary-500 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-r-2 border-purple-500 animate-spin-slow"></div>
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-sm tracking-[0.3em] uppercase"
              >
                Initializing
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 selection:text-indigo-200"
          >
            <LiquidCrystalBackground />
            <ScrollProgress />
            <Navbar />
            
            <main className="relative z-10">
              <Header />
              <Suspense fallback={<LazyLoadFallback />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<LazyLoadFallback />}>
                <Experience />
              </Suspense>
              <Suspense fallback={<LazyLoadFallback />}>
                <Technologies />
              </Suspense>
              <Suspense fallback={<LazyLoadFallback />}>
                <Contact />
              </Suspense>
            </main>
            
            <Suspense fallback={<LazyLoadFallback />}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
