import React from 'react';

export function MochaWaveBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{
        background: 'radial-gradient(ellipse 95% 85% at 30% 20%, #F5EDE0 0%, #E8DCC6 45%, #DCD0BE 75%, #B7A89A 100%)',
      }}
      aria-hidden="true"
    >
      {/* Ambient Lighting with Deep Burgundy (#722F37) Undertones */}
      <div
        className="absolute -top-32 -right-32 w-[70vw] h-[70vw] max-w-[950px] max-h-[950px] rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.16) 0%, rgba(114, 47, 55, 0.04) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-full blur-2xl opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 220, 198, 0.4) 0%, rgba(183, 168, 154, 0.15) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-3xl opacity-65 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(114, 47, 55, 0.12) 0%, rgba(232, 220, 198, 0.45) 50%, transparent 75%)',
        }}
      />

      {/* Delicate Curved Accents in Mocha Cream (#E8DCC6) and Cosmic Latte (#B7A89A) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Paper/creamy micro-texture filter */}
          <filter id="mocha-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45   0 0 0 0 0.35   0 0 0 0 0.28  0 0 0 0.035 0"
            />
            <feBlend mode="multiply" in="SourceGraphic" result="blend" />
          </filter>

          {/* Soft Mocha Cream orb fill */}
          <radialGradient id="ambient-orb" cx="80%" cy="45%" r="65%" fx="75%" fy="40%">
            <stop offset="0%" stopColor="#E8DCC6" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#DCD0BE" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#B7A89A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F5EDE0" stopOpacity="0" />
          </radialGradient>

          {/* Sweeping crescent curved accent: Mocha Cream (#E8DCC6) to Cosmic Latte (#B7A89A) */}
          <linearGradient id="crescent-accent" x1="40%" y1="0%" x2="95%" y2="85%">
            <stop offset="0%" stopColor="#E8DCC6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#DCD0BE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.35" />
          </linearGradient>

          {/* Bottom horizon gentle curve: Cosmic Latte (#B7A89A) and Mocha Cream (#E8DCC6) */}
          <linearGradient id="bottom-accent" x1="20%" y1="100%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#F5EDE0" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8DCC6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.7" />
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
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.6" />
      </svg>
    </div>
  );
}
