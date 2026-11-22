import React from 'react';
import creamLogo from '@/assets/logo-cream.png';

interface SamriddLogoCreamProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SamriddLogoCream({ className = '', size = 'md' }: SamriddLogoCreamProps) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <img
        src={creamLogo}
        alt="SAMRIDD — Lotus Logo"
        className={`${
          isLarge
            ? 'h-24 sm:h-28 max-w-[170px]'
            : isSmall
            ? 'h-9 sm:h-10 max-w-[80px]'
            : 'h-16 sm:h-20 max-w-[130px]'
        } w-auto object-contain drop-shadow-sm transition-transform duration-200 hover:scale-[1.02]`}
      />
    </div>
  );
}
