import React, { useState } from 'react';

interface SamriddLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  align?: 'left' | 'center';
}

export function SamriddLogo({ size = 'lg', className = '', align = 'center' }: SamriddLogoProps) {
  const [imageError, setImageError] = useState(false);
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {!imageError ? (
        <img
          src="/logo.png"
          alt="SAMRIDD"
          onError={() => setImageError(true)}
          className={`${
            isLarge
              ? 'h-36 sm:h-48'
              : isSmall
              ? 'h-10'
              : 'h-20 sm:h-28'
          } w-auto object-contain transition-transform`}
        />
      ) : (
        /* Vector Lotus & SAMRIDD Fallback */
        <div className={`flex flex-col ${isCenter ? 'items-center' : 'items-start'}`}>
          <div className="mb-2">
            <svg
              className={`${isLarge ? 'w-28 h-24 sm:w-32 sm:h-28' : isSmall ? 'w-9 h-8' : 'w-16 h-14'} text-burgundy`}
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 8 C60 8, 48 28, 48 50 C48 70, 60 76, 60 76 C60 76, 72 70, 72 50 C72 28, 60 8, 60 8 Z"
                fill="currentColor"
              />
              <path
                d="M54 22 C54 22, 35 34, 33 54 C31 68, 44 76, 52 77 C52 77, 43 65, 45 52 C47 38, 54 22, 54 22 Z"
                fill="currentColor"
              />
              <path
                d="M66 22 C66 22, 85 34, 87 54 C89 68, 76 76, 68 77 C68 77, 77 65, 75 52 C73 38, 66 22, 66 22 Z"
                fill="currentColor"
              />
              <path
                d="M48 42 C48 42, 22 50, 17 66 C13 78, 27 82, 39 80 C39 80, 26 73, 29 64 C32 54, 48 42, 48 42 Z"
                fill="currentColor"
              />
              <path
                d="M72 42 C72 42, 98 50, 103 66 C107 78, 93 82, 81 80 C81 80, 94 73, 91 64 C88 54, 72 42, 72 42 Z"
                fill="currentColor"
              />
              <path
                d="M28 82 C44 87, 76 87, 92 82 C82 85, 38 85, 28 82 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className={`font-cinzel font-black tracking-[0.14em] text-burgundy ${
            isLarge ? 'text-4xl sm:text-5xl lg:text-6xl' : isSmall ? 'text-lg tracking-wider' : 'text-2xl sm:text-3xl'
          }`}>
            SAMRIDD
          </div>
        </div>
      )}

      {/* Tagline: — PLAN • TRACK • GROW — in Burgundy */}
      <div className={`flex items-center gap-2.5 font-cinzel font-semibold tracking-[0.24em] text-burgundy uppercase mt-3 ${
        isLarge ? 'text-xs sm:text-sm' : isSmall ? 'text-[9px] tracking-widest' : 'text-[11px]'
      }`}>
        <span className="w-6 sm:w-10 h-[1.5px] bg-burgundy/60"></span>
        <span>PLAN &bull; TRACK &bull; GROW</span>
        <span className="w-6 sm:w-10 h-[1.5px] bg-burgundy/60"></span>
      </div>
    </div>
  );
}
