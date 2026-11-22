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
      <div className="absolute top-0 left-0 w-[220px] h-[240px] sm:w-[280px] sm:h-[300px] lg:w-[320px] lg:h-[350px] pointer-events-none select-none z-10 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 320 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Diffused Sunlight Shadow Blur Filter: 5.2 stdDeviation for rich tactile penumbra */}
            <filter id="leaf-shadow-blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5.2" />
            </filter>

            {/* Sunlit Mocha Hazelnut Leaf Shadow Gradient with Rich Contrast */}
            <linearGradient id="leaf-shadow-grad" x1="0%" y1="0%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#5E4B3E" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#725C4C" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#8D7563" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.22" />
            </linearGradient>
          </defs>

          {/* Diffused Botanical Leaves & Stem Silhouette strictly in the top-left corner */}
          <g filter="url(#leaf-shadow-blur)">
            {/* Single primary diagonal stem arching through top-left corner */}
            <path
              d="M -20 -20 C 35 45, 95 125, 175 220 C 215 265, 255 305, 290 340"
              stroke="url(#leaf-shadow-grad)"
              strokeWidth="4.5"
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
              d="M 30 55 C 5 80, 10 130, 42 155 C 65 130, 60 85, 30 55 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 55 45 C 90 25, 140 35, 175 68 C 145 92, 95 80, 55 45 Z"
              fill="url(#leaf-shadow-grad)"
            />

            {/* Pair 2 */}
            <path
              d="M 75 125 C 40 155, 35 210, 65 245 C 90 215, 95 160, 75 125 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 105 105 C 150 85, 215 100, 255 138 C 215 168, 155 150, 105 105 Z"
              fill="url(#leaf-shadow-grad)"
            />

            {/* Pair 3 */}
            <path
              d="M 130 195 C 95 230, 98 290, 130 330 C 155 295, 155 235, 130 195 Z"
              fill="url(#leaf-shadow-grad)"
            />
            <path
              d="M 160 170 C 210 150, 280 175, 320 220 C 280 250, 210 230, 160 170 Z"
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

        {/* Delicate curved wave line contours */}
        <path
          d="M 520 0 C 660 210, 890 320, 1140 450 C 1280 520, 1380 620, 1440 760"
          stroke="#722F37"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          fill="none"
        />

        <path
          d="M 640 0 C 780 240, 1020 370, 1260 510 C 1360 570, 1410 630, 1440 720"
          stroke="#722F37"
          strokeOpacity="0.14"
          strokeWidth="1.2"
          fill="none"
        />

        <path
          d="M 420 0 C 580 260, 820 400, 1080 540 C 1240 630, 1370 750, 1440 880"
          stroke="#B7A89A"
          strokeOpacity="0.4"
          strokeWidth="1.8"
          strokeDasharray="5 5"
          fill="none"
        />

        {/* Concentric curved wave rings */}
        <circle
          cx="1280"
          cy="460"
          r="480"
          stroke="#722F37"
          strokeOpacity="0.12"
          strokeWidth="1.2"
          fill="none"
        />
        <circle
          cx="1280"
          cy="460"
          r="720"
          stroke="#B7A89A"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Minimal texture overlay */}
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.6" />
      </svg>

      {/* Layered Flowing Bottom Waves: Mocha Cream, Cosmic Latte & Deep Burgundy */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[120px] sm:h-[155px] lg:h-[190px] pointer-events-none select-none z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 220"
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
            d="M 0 45 C 260 65, 500 115, 720 115 C 940 115, 1180 60, 1440 40 L 1440 220 L 0 220 Z"
            fill="url(#bottom-mocha-grad)"
            style={{ filter: 'drop-shadow(0 -3px 8px rgba(114, 47, 55, 0.08))' }}
          />

          {/* 2. Middle Wave Ribbon: Cosmic Latte (#B7A89A) */}
          <path
            d="M 0 75 C 280 90, 510 140, 720 140 C 930 140, 1160 85, 1440 70 L 1440 220 L 0 220 Z"
            fill="url(#bottom-latte-grad)"
            style={{ filter: 'drop-shadow(0 -4px 10px rgba(114, 47, 55, 0.12))' }}
          />

          {/* 3. Bottom Foundation Wave: Deep Burgundy (#722F37) */}
          <path
            d="M 0 110 C 300 125, 520 165, 720 165 C 920 165, 1140 115, 1440 100 L 1440 220 L 0 220 Z"
            fill="url(#bottom-burgundy-grad)"
            style={{ filter: 'drop-shadow(0 -5px 14px rgba(78, 20, 27, 0.25))' }}
          />
        </svg>
      </div>
    </div>
  );
}
