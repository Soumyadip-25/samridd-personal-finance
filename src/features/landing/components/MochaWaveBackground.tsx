import React from 'react';

export function MochaWaveBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{
        background: 'radial-gradient(ellipse 95% 85% at 30% 20%, #F8F1E5 0%, #EEDBC5 38%, #E4CDAF 68%, #D4B999 100%)',
      }}
      aria-hidden="true"
    >
      {/* Bold Ambient Lighting with Rich Burgundy Undertones & Warm Golden Glow */}
      <div
        className="absolute -top-32 -right-32 w-[70vw] h-[70vw] max-w-[950px] max-h-[950px] rounded-full blur-3xl opacity-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.18) 0%, rgba(114, 47, 55, 0.05) 45%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-full blur-2xl opacity-65 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235, 195, 130, 0.28) 0%, rgba(247, 239, 225, 0.1) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.14) 0%, rgba(216, 185, 150, 0.45) 50%, transparent 75%)',
        }}
      />

      {/* Delicate Curved Accents — Pure Organic Gradient Shapes with Zero Stroked Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle paper/creamy micro-texture via SVG filter */}
          <filter id="mocha-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45   0 0 0 0 0.35   0 0 0 0 0.28  0 0 0 0.035 0"
            />
            <feBlend mode="multiply" in="SourceGraphic" result="blend" />
          </filter>

          {/* Soft champagne orb fill */}
          <radialGradient id="ambient-orb" cx="80%" cy="45%" r="65%" fx="75%" fy="40%">
            <stop offset="0%" stopColor="#D9BFAB" stopOpacity="0.65" />
            <stop offset="40%" stopColor="#E5D0BD" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#F2E3D2" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#F8F1E5" stopOpacity="0" />
          </radialGradient>

          {/* Sweeping crescent curved accent */}
          <linearGradient id="crescent-accent" x1="40%" y1="0%" x2="95%" y2="85%">
            <stop offset="0%" stopColor="#E5CCA8" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#DCBE97" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C8A67B" stopOpacity="0.3" />
          </linearGradient>

          {/* Bottom horizon gentle curve */}
          <linearGradient id="bottom-accent" x1="20%" y1="100%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#F8F1E5" stopOpacity="0" />
            <stop offset="50%" stopColor="#DFC3A4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#CEA780" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Sweeping crescent wave fill */}
        <path
          d="M 720 0 C 860 160, 1060 250, 1250 380 C 1370 460, 1420 560, 1440 680 L 1440 0 Z"
          fill="url(#crescent-accent)"
        />

        {/* Organic ambient circle fill on right */}
        <circle
          cx="1280"
          cy="460"
          r="620"
          fill="url(#ambient-orb)"
        />

        {/* Soft bottom rise fill */}
        <path
          d="M 280 900 C 520 840, 840 810, 1150 850 C 1290 870, 1380 890, 1440 900 Z"
          fill="url(#bottom-accent)"
        />

        {/* Minimal texture overlay */}
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.65" />
      </svg>
    </div>
  );
}
