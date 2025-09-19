import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CrystalParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  speed: number;
  direction: number;
}

const LiquidCrystalBackground: FC = () => {
  const [particles, setParticles] = useState<CrystalParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colors = [
    'rgba(99, 102, 241, 0.3)',  // indigo
    'rgba(168, 85, 247, 0.25)', // purple
    'rgba(236, 72, 153, 0.2)',  // pink
    'rgba(59, 130, 246, 0.25)', // blue
    'rgba(139, 92, 246, 0.3)',  // violet
  ];

  useEffect(() => {
    const createParticles = () => {
      const newParticles: CrystalParticle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * Math.PI * 2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const handleResize = () => {
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + Math.cos(particle.direction) * particle.speed;
          let newY = particle.y + Math.sin(particle.direction) * particle.speed;

          // Mouse attraction effect
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150 * 0.02;
            newX += dx * force;
            newY += dy * force;
          }

          // Boundary wrapping
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary liquid crystal gradient overlay */}
      <motion.div
        className="absolute inset-0 liquid-crystal-aurora"
        animate={{
          background: [
            'conic-gradient(from 0deg at 50% 50%, rgba(99, 102, 241, 0.04) 0deg, rgba(168, 85, 247, 0.03) 120deg, rgba(236, 72, 153, 0.02) 240deg, rgba(99, 102, 241, 0.04) 360deg)',
            'conic-gradient(from 120deg at 50% 50%, rgba(168, 85, 247, 0.04) 0deg, rgba(236, 72, 153, 0.03) 120deg, rgba(99, 102, 241, 0.02) 240deg, rgba(168, 85, 247, 0.04) 360deg)',
            'conic-gradient(from 240deg at 50% 50%, rgba(236, 72, 153, 0.04) 0deg, rgba(99, 102, 241, 0.03) 120deg, rgba(168, 85, 247, 0.02) 240deg, rgba(236, 72, 153, 0.04) 360deg)',
            'conic-gradient(from 0deg at 50% 50%, rgba(99, 102, 241, 0.04) 0deg, rgba(168, 85, 247, 0.03) 120deg, rgba(236, 72, 153, 0.02) 240deg, rgba(99, 102, 241, 0.04) 360deg)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating crystal particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dynamic mesh gradients */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(99, 102, 241, 0.03) 0%,
              transparent 50%),
            radial-gradient(ellipse 400px 300px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px,
              rgba(168, 85, 247, 0.02) 0%,
              transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Liquid crystal refraction lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(${mousePosition.x / window.innerWidth * 180}deg,
              transparent 0%,
              rgba(255, 255, 255, 0.02) 50%,
              transparent 100%),
            linear-gradient(${(mousePosition.y / window.innerHeight * 180) + 90}deg,
              transparent 0%,
              rgba(99, 102, 241, 0.02) 50%,
              transparent 100%)
          `,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Depth layers with crystalline texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-dark-950/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-dark-950/5" />

    </div>
  );
};

export default LiquidCrystalBackground;