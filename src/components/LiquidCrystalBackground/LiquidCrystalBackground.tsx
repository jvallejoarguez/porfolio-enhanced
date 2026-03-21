import { FC, memo } from 'react';

// Simplified CSS-only background component for performance
const LiquidCrystalBackground: FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static Gradient Mesh - GPU accelerated via CSS in index.css mostly, but here are the layers */}
      
      {/* Layer 1: Deep Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0),_rgba(5,5,5,1))]" />
      
      {/* Layer 2: Subtle Moving Gradient - Optimized */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #000000 0deg, #1e1b4b 60deg, #000000 120deg, #312e81 180deg, #000000 240deg, #1e1b4b 300deg, #000000 360deg)',
          animation: 'spin-slow 60s linear infinite',
          willChange: 'transform',
        }}
      />
      
      {/* Layer 3: Noise Overlay (Static Image instead of filter) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      />

      {/* SVG Displacement Filters for Liquid Glass Effect */}
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="liquidGlass">
            <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="2" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="liquidGlassStrong">
            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default memo(LiquidCrystalBackground);
