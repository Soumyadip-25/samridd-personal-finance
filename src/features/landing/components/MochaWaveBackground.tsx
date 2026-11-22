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

      {/* Top-Left Botanical Leaf Shadow Overlay (Strict Top-Left Corner Anchor) */}
      <div className="absolute top-0 left-0 w-[150px] h-[160px] sm:w-[180px] sm:h-[190px] lg:w-[210px] lg:h-[220px] pointer-events-none select-none z-10 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 210 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Diffused Sunlight Shadow Blur Filter: 4.8 stdDeviation for delicate corner penumbra */}
            <filter id="leaf-shadow-blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4.8" />
            </filter>

            {/* Sunlit Mocha Hazelnut Leaf Shadow Gradient with Rich Tactile Contrast */}
            <linearGradient id="leaf-shadow-grad" x1="0%" y1="0%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#5E4B3E" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#725C4C" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#8D7563" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.22" />
            </linearGradient>
          </defs>

          {/* Diffused Botanical Leaves & Stem Silhouette strictly in the extreme top-left corner */}
          <g filter="url(#leaf-shadow-blur)">
            {/* Diagonal stem strictly arching through upper-left corner */}
            <path
              d="M -15 -15 C 20 25, 55 70, 105 120 C 130 145, 155 170, 185 195"
              stroke="url(#leaf-shadow-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Corner leaflets hugging the upper and left border */}
            <path
              d="M -10 -5 C 10 -25, 50 -15, 75 15 C 55 35, 10 25, -10 -5 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M -15 20 C -30 45, -15 95, 15 120 C 35 95, 25 50, -15 20 Z"
              fill="url(#leaf-shadow-grad)"
            />

            {/* Pair 1 */}
            <path
              d="M 25 45 C 5 70, 10 115, 38 138 C 58 115, 52 75, 25 45 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 48 38 C 80 20, 125 30, 155 60 C 128 80, 85 70, 48 38 Z"
              fill="url(#leaf-shadow-grad)"
            />

            {/* Pair 2 */}
            <path
              d="M 65 105 C 35 130, 32 175, 58 205 C 80 180, 82 135, 65 105 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 90 90 C 130 75, 175 88, 205 122 C 175 148, 125 132, 90 90 Z"
              fill="url(#leaf-shadow-grad)"
            />
          </g>
        </svg>
      </div>

      {/* Upper Delicate Curved Accents in Mocha Cream (#E8DCC6) and Cosmic Latte (#B7A89A) */}
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

        {/* Minimal texture overlay */}
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.6" />
      </svg>
    </div>
  );
}
