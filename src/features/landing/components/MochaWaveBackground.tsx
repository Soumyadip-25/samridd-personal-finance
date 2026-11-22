import React from 'react';

export function MochaWaveBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      style={{
        background: 'radial-gradient(ellipse 90% 80% at 20% 25%, #FAF5EE 0%, #F5EAE0 45%, #EEDDCF 75%, #E4CFBE 100%)',
      }}
      aria-hidden="true"
    >
      {/* SVG Waves & Curved Contours (Replicating reference geometry without pictures) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle paper/creamy texture via SVG filter */}
          <filter id="mocha-texture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.45   0 0 0 0 0.35   0 0 0 0 0.28  0 0 0 0.04 0"
            />
            <feBlend mode="multiply" in="SourceGraphic" result="blend" />
          </filter>

          {/* Radial glow on the right wave */}
          <radialGradient id="wave-glow" cx="80%" cy="45%" r="65%" fx="75%" fy="40%">
            <stop offset="0%" stopColor="#DFC8B3" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#E9D6C4" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#F5E9DD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FAF5EE" stopOpacity="0" />
          </radialGradient>

          {/* Sweeping crescent linear gradient */}
          <linearGradient id="crescent-grad" x1="45%" y1="0%" x2="95%" y2="85%">
            <stop offset="0%" stopColor="#EEDAC8" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#E5CDB8" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#D9BEA6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E2CCA8" stopOpacity="0.2" />
          </linearGradient>

          {/* Bottom curve gradient */}
          <linearGradient id="bottom-wave" x1="20%" y1="100%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FAF5EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#E7D1BD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DCBEA5" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Large sweeping crescent wave shape on right */}
        <path
          d="M 720 0 C 860 160, 1050 250, 1240 380 C 1360 460, 1420 560, 1440 680 L 1440 0 Z"
          fill="url(#crescent-grad)"
        />

        {/* Massive organic circular wave center */}
        <circle
          cx="1280"
          cy="460"
          r="620"
          fill="url(#wave-glow)"
        />

        {/* Delicate curved line contours matching the reference image */}
        <path
          d="M 520 0 C 660 210, 890 320, 1140 450 C 1280 520, 1380 620, 1440 760"
          stroke="#722F37"
          strokeOpacity="0.16"
          strokeWidth="1.2"
          fill="none"
        />

        <path
          d="M 640 0 C 780 240, 1020 370, 1260 510 C 1360 570, 1410 630, 1440 720"
          stroke="#722F37"
          strokeOpacity="0.10"
          strokeWidth="1"
          fill="none"
        />

        <path
          d="M 420 0 C 580 260, 820 400, 1080 540 C 1240 630, 1370 750, 1440 880"
          stroke="#B7A89A"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Concentric curved wave rings */}
        <circle
          cx="1280"
          cy="460"
          r="480"
          stroke="#722F37"
          strokeOpacity="0.08"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="1280"
          cy="460"
          r="720"
          stroke="#B7A89A"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Soft bottom wave rise */}
        <path
          d="M 280 900 C 520 840, 840 810, 1150 850 C 1290 870, 1380 890, 1440 900 Z"
          fill="url(#bottom-wave)"
        />

        {/* Overlay texture filter */}
        <rect width="100%" height="100%" filter="url(#mocha-texture)" opacity="0.6" />
      </svg>
    </div>
  );
}
