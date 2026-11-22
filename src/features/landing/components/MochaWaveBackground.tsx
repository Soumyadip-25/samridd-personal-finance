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

      {/* Top-Left Botanical Leaf Shadow Overlay (media_1795378257537_9be9bcd6.png) */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] pointer-events-none select-none z-10 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Diffused Sunlight Shadow Blur Filter */}
            <filter id="leaf-shadow-blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7.5" />
            </filter>

            {/* Sunlit Mocha Hazelnut Leaf Shadow Gradient */}
            <linearGradient id="leaf-shadow-grad" x1="0%" y1="0%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#7E6858" stopOpacity="0.45" />
              <stop offset="35%" stopColor="#967F6E" stopOpacity="0.32" />
              <stop offset="70%" stopColor="#B7A89A" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Diffused Botanical Leaves & Stems Silhouette */}
          <g filter="url(#leaf-shadow-blur)">
            {/* Primary curved stem */}
            <path
              d="M -20 -20 C 40 50, 120 140, 210 260 C 260 330, 310 410, 350 490"
              stroke="url(#leaf-shadow-grad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Secondary branching twig */}
            <path
              d="M 90 100 C 140 80, 210 75, 290 85"
              stroke="url(#leaf-shadow-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Main stem foliage clusters */}
            <path
              d="M 35 45 C 50 30, 95 45, 120 70 C 95 95, 50 80, 35 45 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 60 25 C 90 5, 145 18, 180 40 C 150 62, 95 48, 60 25 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 85 105 C 125 90, 185 108, 225 138 C 190 168, 125 158, 85 105 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 70 125 C 45 155, 40 205, 50 240 C 70 215, 80 165, 70 125 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 125 175 C 160 165, 230 195, 270 240 C 230 275, 160 250, 125 175 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 115 195 C 95 235, 90 290, 110 330 C 130 295, 135 240, 115 195 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 165 235 C 215 225, 285 260, 330 310 C 285 350, 215 320, 165 235 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 150 250 C 135 290, 140 350, 165 390 C 190 360, 190 300, 150 250 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 205 305 C 240 325, 285 375, 310 430 C 275 430, 235 385, 205 305 Z"
              fill="url(#leaf-shadow-grad)"
            />

            {/* Secondary branch foliage */}
            <path
              d="M 135 90 C 175 70, 230 80, 270 100 C 235 125, 180 120, 135 90 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 195 82 C 235 55, 295 60, 335 75 C 305 100, 245 100, 195 82 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 255 85 C 295 70, 350 80, 385 100 C 355 125, 300 120, 255 85 Z"
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

      {/* Minimal Layered Bottom Waves: Mocha Cream, Cosmic Latte & Deep Burgundy (Sleek & Low-Profile) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[60px] sm:h-[80px] lg:h-[100px] pointer-events-none select-none z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 1. Mocha Cream Wave Gradient */}
            <linearGradient id="bottom-mocha-grad" x1="0%" y1="0%" x2="100%" y2="60%">
              <stop offset="0%" stopColor="#F5EDE0" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#E8DCC6" stopOpacity="0.92" />
              <stop offset="75%" stopColor="#DFD0B8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E8DCC6" stopOpacity="0.95" />
            </linearGradient>

            {/* 2. Cosmic Latte Wave Gradient */}
            <linearGradient id="bottom-latte-grad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#CDBEAE" />
              <stop offset="45%" stopColor="#B7A89A" />
              <stop offset="80%" stopColor="#B7A89A" />
              <stop offset="100%" stopColor="#C4B4A4" />
            </linearGradient>

            {/* 3. Deep Burgundy Wave Gradient */}
            <linearGradient id="bottom-burgundy-grad" x1="0%" y1="0%" x2="100%" y2="40%">
              <stop offset="0%" stopColor="#541922" />
              <stop offset="30%" stopColor="#722F37" />
              <stop offset="70%" stopColor="#722F37" />
              <stop offset="100%" stopColor="#4E141B" />
            </linearGradient>
          </defs>

          {/* 1. Upper Wave Ribbon: Mocha Cream (#E8DCC6) */}
          <path
            d="M 0 25 C 260 30, 500 65, 720 65 C 940 65, 1180 25, 1440 20 L 1440 100 L 0 100 Z"
            fill="url(#bottom-mocha-grad)"
            style={{ filter: 'drop-shadow(0 -2px 6px rgba(114, 47, 55, 0.06))' }}
          />

          {/* 2. Middle Wave Ribbon: Cosmic Latte (#B7A89A) */}
          <path
            d="M 0 42 C 280 48, 510 78, 720 78 C 930 78, 1160 42, 1440 38 L 1440 100 L 0 100 Z"
            fill="url(#bottom-latte-grad)"
            style={{ filter: 'drop-shadow(0 -3px 8px rgba(114, 47, 55, 0.1))' }}
          />

          {/* 3. Bottom Foundation Wave: Deep Burgundy (#722F37) */}
          <path
            d="M 0 58 C 300 65, 520 88, 720 88 C 920 88, 1140 60, 1440 54 L 1440 100 L 0 100 Z"
            fill="url(#bottom-burgundy-grad)"
            style={{ filter: 'drop-shadow(0 -4px 10px rgba(78, 20, 27, 0.2))' }}
          />
        </svg>
      </div>
    </div>
  );
}
