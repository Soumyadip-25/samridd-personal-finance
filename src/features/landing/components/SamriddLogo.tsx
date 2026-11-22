import React from 'react';
import burgundyLogo from '@/assets/logo.png';

interface SamriddLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  align?: 'left' | 'center';
}

export function SamriddLogo({ size = 'lg', className = '', align = 'center' }: SamriddLogoProps) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {/* Logo Container with Elegance Circle & Golden Star Flare */}
      <div className="relative group flex items-center justify-center">
        {isLarge && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] lg:w-[420px] lg:h-[420px] pointer-events-none select-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Soft Mocha Disc Interior Fill */}
                <radialGradient id="mocha-disc-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E8DCC6" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#E8DCC6" stopOpacity="0.25" />
                  <stop offset="85%" stopColor="#B7A89A" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#B7A89A" stopOpacity="0" />
                </radialGradient>

                {/* Delicate Mocha-Gold Embossed Ring */}
                <linearGradient id="mocha-ring-gradient" x1="15%" y1="90%" x2="85%" y2="10%">
                  <stop offset="0%" stopColor="#B7A89A" stopOpacity="0.35" />
                  <stop offset="35%" stopColor="#E8DCC6" stopOpacity="0.65" />
                  <stop offset="70%" stopColor="#F5EDE0" stopOpacity="0.9" />
                  <stop offset="82%" stopColor="#FFF9EE" stopOpacity="1" />
                  <stop offset="100%" stopColor="#B7A89A" stopOpacity="0.45" />
                </linearGradient>

                {/* Star Ambient Corona Glow */}
                <radialGradient id="star-ambient-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
                  <stop offset="30%" stopColor="#E8DCC6" stopOpacity="0.75" />
                  <stop offset="60%" stopColor="#B7A89A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#B7A89A" stopOpacity="0" />
                </radialGradient>

                {/* Star Metallic Gold-Mocha Facets */}
                <linearGradient id="star-gold-facet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#FFF4E0" />
                  <stop offset="65%" stopColor="#E8DCC6" />
                  <stop offset="100%" stopColor="#B7A89A" />
                </linearGradient>
              </defs>

              {/* 1. Soft Mocha Disc Fill */}
              <circle cx="200" cy="200" r="162" fill="url(#mocha-disc-glow)" />

              {/* 2. Delicate Golden-Mocha Ring */}
              <circle
                cx="200"
                cy="200"
                r="162"
                fill="none"
                stroke="url(#mocha-ring-gradient)"
                strokeWidth="2.5"
              />

              {/* 3. Star Flare at (314.5, 85.5) on the circle arc (approx 45° angle) */}
              <g transform="translate(314.5, 85.5)">
                {/* Soft Star Corona Glow */}
                <circle cx="0" cy="0" r="38" fill="url(#star-ambient-glow)" />
                <circle cx="0" cy="0" r="18" fill="url(#star-ambient-glow)" opacity="0.8" />

                {/* 4-Pointed Star Flare with Concave Tapered Arms */}
                <path
                  d="M 0 -24 C 0.8 -4.5, 4.5 -0.8, 19 0 C 4.5 0.8, 0.8 4.5, 0 24 C -0.8 4.5, -4.5 0.8, -19 0 C -4.5 -0.8, -0.8 -4.5, 0 -24 Z"
                  fill="url(#star-gold-facet)"
                  style={{ filter: 'drop-shadow(0 0 5px rgba(232, 220, 198, 0.85))' }}
                />

                {/* Central White Sparkle Core */}
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        )}

        <img
          src={burgundyLogo}
          alt="SAMRIDD — Lotus Logo"
          className={`${
            isLarge
              ? 'h-36 sm:h-48'
              : isSmall
              ? 'h-10'
              : 'h-20 sm:h-28'
          } w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02] relative z-10`}
        />
      </div>

      {/* Tagline: ✦ PLAN • TRACK • GROW ✦ in Bold Dark Burgundy */}
      <div className={`flex items-center gap-3 font-cinzel font-bold tracking-[0.28em] text-burgundy uppercase mt-4 relative z-10 ${
        isLarge ? 'text-xs sm:text-sm' : isSmall ? 'text-[9px] tracking-widest' : 'text-[11px]'
      }`}>
        <span className="w-8 sm:w-12 h-[2px] bg-burgundy"></span>
        <span>PLAN &bull; TRACK &bull; GROW</span>
        <span className="w-8 sm:w-12 h-[2px] bg-burgundy"></span>
      </div>

      {/* Luxury Credential */}
      {isLarge && (
        <div className="mt-3 text-[11px] font-cinzel tracking-[0.22em] text-espresso-muted uppercase font-bold relative z-10">
          ✦ Sovereign Indian Personal Finance ✦
        </div>
      )}
    </div>
  );
}
