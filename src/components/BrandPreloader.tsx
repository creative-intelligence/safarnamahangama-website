import React, { useState, useEffect } from 'react';

interface BrandPreloaderProps {
  onComplete?: () => void;
}

export const BrandPreloader: React.FC<BrandPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'animating' | 'exit' | 'done'>('animating');

  // Synthesize short electric spark / sizzle sound effect using Web Audio API
  const playSparkSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Create burst noise for electric wire spark crackle
      const bufferSize = ctx.sampleRate * 0.18;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Highpass filter for electric wire sizzle
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 3200;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {
      // Ignore audio policy restrictions on unmuted autoplay
    }
  };

  useEffect(() => {
    playSparkSound();

    // Smooth left-to-right spark sweep over 1.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    // Trigger smooth fade out
    const exitTimer = setTimeout(() => {
      setStage('exit');
    }, 1500);

    // Complete preloader and reveal main website
    const doneTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === 'done') {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#030C07] transition-opacity duration-600 select-none overflow-hidden ${
        stage === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient dark glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Left-to-Right Spark Wire Container */}
      <div className="relative flex items-center justify-center p-4">
        
        {/* Underlay (Low Opacity Base Outline) */}
        <div className="flex items-center gap-4 opacity-15 grayscale">
          <img src="/favicon.svg" alt="TubeScale" className="w-16 h-16 sm:w-20 sm:h-20" />
          <span className="font-extrabold text-4xl sm:text-6xl text-white font-display tracking-tight">
            TubeScale
          </span>
        </div>

        {/* Overlay Revealed by Left-to-Right Electric Spark Wipe */}
        <div
          className="absolute inset-0 flex items-center gap-4 overflow-hidden pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`
          }}
        >
          <img
            src="/favicon.svg"
            alt="TubeScale Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_30px_rgba(16,185,129,0.9)]"
          />
          <span className="font-extrabold text-4xl sm:text-6xl text-white font-display tracking-tight whitespace-nowrap">
            Tube<span className="gradient-text">Scale</span>
          </span>
        </div>

        {/* Leading Edge Electric Wire Spark Particle */}
        {progress > 0 && progress < 100 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75"
            style={{ left: `${progress}%` }}
          >
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute h-8 w-8 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_20px_#10B981]" />
              <span className="absolute h-12 w-0.5 bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_15px_#06B6D4]" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
