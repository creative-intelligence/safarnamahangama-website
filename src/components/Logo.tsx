import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
  };

  const textSizes = {
    sm: 'text-xs sm:text-sm',
    md: 'text-xs sm:text-base md:text-xl',
    lg: 'text-lg sm:text-xl md:text-2xl',
  };

  const tagSizes = {
    sm: 'text-[7px] sm:text-[8px]',
    md: 'text-[8px] sm:text-[10px]',
    lg: 'text-[10px] sm:text-[12px]',
  };

  return (
    <div className={`flex items-center gap-1.5 sm:gap-2.5 select-none ${className}`}>
      {/* Official Circular Logo Image */}
      <div className={`${iconSizes[size]} relative flex-shrink-0 group cursor-pointer`}>
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[6px] group-hover:bg-amber-500/40 transition-all" />
        <img
          src="/logo.png"
          alt="Safar Nama Hangama Official Logo"
          className="relative w-full h-full object-contain rounded-full border border-amber-500/40 shadow-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col min-w-0 justify-center">
          <span className={`font-black tracking-tight text-white ${textSizes[size]} font-sans leading-none whitespace-nowrap`}>
            SAFARNAMA <span className="text-[#E5983A]">HANGAMA</span>
          </span>
          <span className={`font-bold tracking-widest text-[#E5983A] uppercase mt-0.5 whitespace-nowrap ${tagSizes[size]}`}>
            Explore Pakistan
          </span>
        </div>
      )}
    </div>
  );
};
