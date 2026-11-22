import React from 'react';

export function MochaWaveBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{
        background: 'radial-gradient(ellipse 95% 85% at 30% 25%, #FAF6EE 0%, #F5ECE0 45%, #EFE3D4 75%, #E6D4C2 100%)',
      }}
      aria-hidden="true"
    >
      {/* Soft Ambient Lighting with subtle burgundy undertones and warm ivory-to-champagne glow */}
      <div
        className="absolute -top-32 -right-32 w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.08) 0%, rgba(114, 47, 55, 0.02) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-[75vw] h-[75vw] max-w-[950px] max-h-[950px] rounded-full blur-2xl opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(245, 236, 224, 0.25) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.05) 0%, rgba(232, 220, 198, 0.3) 50%, transparent 75%)',
        }}
      />

      {/* Delicate Curved Accents — NO lines (pure subtle gradient curved contours) */}
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
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45   0 0 0 0 0.35   0 0 0 0 0.28  0 0 0 0.025 0"
            />
            <feBlend mode="multiply" in="SourceGraphic" result="blend" />
          </filter>

          {/* Soft champagne orb fill */}
          <radialGradient id="ambient-orb" cx="80%" cy="45%" r="65%" fx="75%" fy="40%">
            <stop offset="0%" stopColor="#E2CDBA" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#ECDCCB" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#F5ECE0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FAF6EE" stopOpacity="0" />
          </radialGradient>

          {/* Sweeping crescent curved accent */}
          <linearGradient id="crescent-accent" x1="40%" y1="0%" x2="95%" y2="85%">
            <stop offset="0%" stopColor="#EED9C7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#E5CDBC" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D8BEA7" stopOpacity="0.15" />
          </linearGradient>

          {/* Bottom horizon gentle curve */}
          <linearGradient id="bottom-accent" x1="20%" y1="100%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FAF6EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#E7D2BF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#DDBEA6" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Sweeping crescent wave fill (No stroked lines) */}
        <path
          d="M 720 0 C 860 160, 1060 250, 1250 380 C 1370 460, 1420 560, 1440 680 L 1440 0 Z"
          fill="url(#crescent-accent)"
        />

        {/* Organic ambient circle fill on right (No stroked lines) */}
        <circle
          cx="1280"
          cy="460"
          r="620"
          fill="url(#ambient-orb)"
        />

        {/* Soft bottom rise fill (No stroked lines) */}
        <path
          d="M 280 900 C 520 840, 840 810, 1150 850 C 1290 870, 1380 890, 1440 900 Z"
          fill="url(#bottom-accent)"
        />

        {/* Minimal texture overlay */}
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.5" />
      </svg>
    </div>
  );
}
