import React, { useState } from 'react';

interface SamriddLogoCreamProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SamriddLogoCream({ className = '', size = 'md' }: SamriddLogoCreamProps) {
  const [imageError, setImageError] = useState(false);
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {!imageError ? (
        <img
          src="/logo-cream.png"
          alt="SAMRIDD"
          onError={() => setImageError(true)}
          className={`${
            isLarge ? 'h-24 sm:h-28' : isSmall ? 'h-10' : 'h-16'
          } w-auto object-contain drop-shadow-sm transition-transform`}
        />
      ) : (
        /* Vector Lotus & SAMRIDD Fallback in Mocha Cream (#E8DCC6) */
        <div className="flex flex-col items-center">
          <svg
            className={`${
              isLarge ? 'w-20 h-16 sm:w-24 sm:h-20' : isSmall ? 'w-10 h-8' : 'w-16 h-14'
            } text-[#E8DCC6] drop-shadow-sm transition-transform`}
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Central Petal */}
            <path
              d="M60 8 C60 8, 48 28, 48 50 C48 70, 60 76, 60 76 C60 76, 72 70, 72 50 C72 28, 60 8, 60 8 Z"
              fill="currentColor"
            />
            {/* Left Mid Petal */}
            <path
              d="M54 22 C54 22, 35 34, 33 54 C31 68, 44 76, 52 77 C52 77, 43 65, 45 52 C47 38, 54 22, 54 22 Z"
              fill="currentColor"
            />
            {/* Right Mid Petal */}
            <path
              d="M66 22 C66 22, 85 34, 87 54 C89 68, 76 76, 68 77 C68 77, 77 65, 75 52 C73 38, 66 22, 66 22 Z"
              fill="currentColor"
            />
            {/* Left Outer Wing Petal */}
            <path
              d="M48 42 C48 42, 22 50, 17 66 C13 78, 27 82, 39 80 C39 80, 26 73, 29 64 C32 54, 48 42, 48 42 Z"
              fill="currentColor"
            />
            {/* Right Outer Wing Petal */}
            <path
              d="M72 42 C72 42, 98 50, 103 66 C107 78, 93 82, 81 80 C81 80, 94 73, 91 64 C88 54, 72 42, 72 42 Z"
              fill="currentColor"
            />
            {/* Base Calyx Curve */}
            <path
              d="M28 82 C44 87, 76 87, 92 82 C82 85, 38 85, 28 82 Z"
              fill="currentColor"
            />
          </svg>
          <span
            className={`font-cinzel font-black tracking-[0.18em] text-[#E8DCC6] mt-2 ${
              isLarge ? 'text-2xl sm:text-3xl' : isSmall ? 'text-base' : 'text-xl'
            }`}
          >
            SAMRIDD
          </span>
        </div>
      )}
    </div>
  );
}
