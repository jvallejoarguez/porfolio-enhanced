import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import LiquidCrystalBackground from './components/LiquidCrystalBackground/LiquidCrystalBackground';

const Projects = lazy(() => import('./components/Projects/Projects'));
const Background = lazy(() => import('./components/Background/Background'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const LazyLoadFallback = () => (
  <div className="w-full min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 selection:text-indigo-200"
    >
      <LiquidCrystalBackground />
      <ScrollProgress />

      <main className="relative z-10">
        <Header />
        <Suspense fallback={<LazyLoadFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LazyLoadFallback />}>
          <Background />
        </Suspense>
        <Suspense fallback={<LazyLoadFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<LazyLoadFallback />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;
