import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const LiquidCrystalMouseTracker: FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-500/30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner glow */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/20 via-accent-ice/15 to-accent-teal/20 blur-lg"
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Core crystal */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-500/40 to-accent-ice/40 backdrop-blur-sm"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Secondary trailing effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
        }}
        animate={{
          opacity: isVisible ? 0.6 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.1,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-ice/20 to-accent-teal/20 blur-md" />
      </motion.div>

      {/* Tertiary trailing effect */}
      <motion.div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          opacity: isVisible ? 0.4 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 35,
          delay: 0.2,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-ice/20 blur-lg" />
      </motion.div>
    </>
  );
};

export default LiquidCrystalMouseTracker;