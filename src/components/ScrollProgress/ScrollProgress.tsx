import { memo } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 0 : 100,
    damping: prefersReducedMotion ? 0 : 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 origin-left z-50"
      style={{ scaleX: prefersReducedMotion ? 1 : scaleX }}
    />
  );
};

export default memo(ScrollProgress);
