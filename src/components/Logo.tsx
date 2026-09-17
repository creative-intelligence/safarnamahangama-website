import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
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
        <div className="flex flex-col">
          <span className={`font-black tracking-tight text-white ${textSizes[size]} font-sans leading-none`}>
            SAFARNAMA <span className="text-[#E5983A]">HANGAMA</span>
          </span>
          <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mt-0.5">
            Explore Pakistan
          </span>
        </div>
      )}
    </div>
  );
};
