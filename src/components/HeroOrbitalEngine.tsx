import React, { useState, useEffect } from 'react';

export const HeroOrbitalEngine: React.FC = () => {
  const [needleAngle, setNeedleAngle] = useState(-20);
  const [liveRevenue, setLiveRevenue] = useState(5280);
  const [rateDelta, setRateDelta] = useState(145);
  const [activeMode, setActiveMode] = useState<'milestone' | 'speedometer'>('milestone');
  const [selectedOption, setSelectedOption] = useState<1 | 2 | 3 | 4 | 5>(2);

  // Infinite 3D Flip Cycle: Revenue Closed Card (2.8s) ↔ Speedometer Gauge (7.5s)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeMode === 'milestone') {
      timer = setTimeout(() => {
        setActiveMode('speedometer');
      }, 2800);
    } else {
      timer = setTimeout(() => {
        setActiveMode('milestone');
      }, 7500);
    }
    return () => clearTimeout(timer);
  }, [activeMode]);

  // Secret delayed reset while hidden 100% behind back face (resets secretly to $5,280 and -20°)
  useEffect(() => {
    let resetTimer: NodeJS.Timeout;
    if (activeMode === 'milestone') {
      // Wait 1200ms until card has completely turned away before resetting secretly!
      resetTimer = setTimeout(() => {
        setNeedleAngle(-20);
        setLiveRevenue(5280);
        setRateDelta(115);
      }, 1200);
    }
    return () => clearTimeout(resetTimer);
  }, [activeMode]);

  // Strict 1:1 Math-Locked Speedometer Physics (Dynamic continuous growth past $20,000)
  useEffect(() => {
    let speedoTime = 0;
    let prevA = -20;
    let peakAccumulated = 0;

    if (activeMode === 'milestone') {
      return;
    }

    const engineInterval = setInterval(() => {
      speedoTime += 0.04;

      // 450ms flip rotation delay so price visually starts at $5,280-$5,600 right when card faces front!
      const FLIP_DELAY = 0.45;
      const elapsed = Math.max(0, speedoTime - FLIP_DELAY);

      // Ramp progress: 0.0 to 1.0 over ~3.2 seconds after flip completes
      const rawRamp = Math.min(1.0, elapsed / 3.2);
      const easeRamp = Math.pow(rawRamp, 0.8); // smooth acceleration curve

      // High-RPM subtle pulse vibration at peak
      const rpmVibration = rawRamp >= 0.95 ? (Math.sin(speedoTime * 7) * 2.5 + Math.cos(speedoTime * 11) * 1.5) : 0;

      // Current Angle: Starts at -20° ($5,280) and sweeps clockwise to +76° ($20,000+)
      const currentAngle = parseFloat((-20 + easeRamp * 96 + rpmVibration).toFixed(1));

      // STRICT 1:1 Direct Math Coupling (Normalized between -20° and +76°)
      const normAngle = Math.max(0, Math.min(1, (currentAngle - (-20)) / (76 - (-20))));
      const basePrice = Math.round(5280 + normAngle * 14720);

      // Once peak is reached, keep adding continuous ticker growth so price is NEVER frozen at $20k!
      if (rawRamp >= 1.0) {
        peakAccumulated += Math.max(1, Math.round(14 + Math.sin(speedoTime * 6) * 6));
      }

      const totalPrice = basePrice + peakAccumulated;

      // Rate delta calculation based on direction
      const dAngle = currentAngle - prevA;
      prevA = currentAngle;
      const rateVal = Math.round(Math.abs(dAngle) * 55 + 40);

      setNeedleAngle(currentAngle);
      setLiveRevenue(totalPrice);
      setRateDelta(rateVal);
    }, 40);

    return () => clearInterval(engineInterval);
  }, [activeMode]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none group [perspective:1400px] space-y-6">
      
      {/* 3D FLIP CONTAINER */}
      <div
        className={`relative w-full max-w-[640px] h-[400px] sm:h-[480px] lg:h-[520px] flex items-center justify-center transition-transform duration-1000 [transform-style:preserve-3d] ${
          selectedOption !== 5 && activeMode === 'milestone' ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >

        {/* FRONT FACE: DYNAMIC FRAMELESS SPEEDOMETER GAUGE */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden]">
          
          <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
            <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 500 360">
              <defs>
                <linearGradient id="limitSpeedoGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="40%" stopColor="#10B981" />
                  <stop offset="85%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>

                <filter id="limitGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#10B981" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Background Track Arc */}
              <path
                d="M 60,320 A 190,190 0 0,1 440,320"
                fill="none"
                stroke="rgba(16, 185, 129, 0.16)"
                strokeWidth="28"
                strokeLinecap="round"
              />

              {/* Active Gradient Speedometer Arc */}
              <path
                d="M 60,320 A 190,190 0 0,1 440,320"
                fill="none"
                stroke="url(#limitSpeedoGrad)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeDasharray="597"
                strokeDashoffset={Math.max(0, 597 - ((needleAngle + 90) / 180) * 597)}
                filter="url(#limitGlow)"
                className="transition-all duration-75 ease-out"
              />

              {/* Laser Tick Marks */}
              {[-90, -67.5, -45, -22.5, 0, 22.5, 45, 67.5, 90].map((deg, i) => {
                const rad = (deg - 90) * (Math.PI / 180);
                const x1 = 250 + Math.cos(rad) * 156;
                const y1 = 320 + Math.sin(rad) * 156;
                const x2 = 250 + Math.cos(rad) * 188;
                const y2 = 320 + Math.sin(rad) * 188;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i >= 7 ? '#F59E0B' : i >= 4 ? '#34D399' : '#10B981'}
                    strokeWidth={i % 2 === 0 ? '5' : '3'}
                    opacity={i >= 6 ? '1' : '0.75'}
                  />
                );
              })}

              {/* LOCKED BOTTOM PIVOT NEEDLE */}
              <g transform={`rotate(${needleAngle}, 250, 320)`} className="transition-transform duration-75 ease-out">
                <polygon
                  points="242,320 258,320 253,155 247,155"
                  fill="url(#limitSpeedoGrad)"
                  filter="url(#limitGlow)"
                />
                <polygon
                  points="247,155 253,155 250,140"
                  fill={needleAngle > 60 ? '#F59E0B' : '#FFFFFF'}
                />
              </g>

              {/* Center Hub */}
              <circle cx="250" cy="320" r="21" fill="#030C07" stroke="#10B981" strokeWidth="4.5" />
              <circle cx="250" cy="320" r="9" fill="#34D399" />
            </svg>
          </div>

          {/* DYNAMIC REVENUE DISPLAY */}
          <div className="space-y-2 pt-2 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">
                ${liveRevenue.toLocaleString()}.00
              </span>

              <span className="text-xs sm:text-sm font-mono font-extrabold px-4 py-1.5 rounded-lg border bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-glow-emerald animate-pulse">
                +${rateDelta}/sec
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                ESTIMATED MONTHLY REVENUE CLOSED
              </span>
            </div>
          </div>

        </div>

        {/* BACK FACE: HIGH-ENERGY 3D TACHOMETER GEAR ENGINE */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] text-center p-4">
          
          <div className="relative flex items-center justify-center w-80 h-80 sm:w-[440px] sm:h-[440px] overflow-visible">
            
            {/* Pulsing Backlight Ambient Core */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-emerald-500/20 blur-3xl animate-pulse pointer-events-none"></div>

            {/* Floating Laser Sparks */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-1/6 left-1/4 h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
              <span className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-cyan-300 animate-ping opacity-60"></span>
              <span className="absolute top-1/2 right-1/6 h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            </div>

            {/* SVG Multi-Stage Mechanical Gear Engine Visualizer */}
            <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="gearGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="40%" stopColor="#34D399" />
                  <stop offset="85%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>

                <filter id="gearGlow2" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#10B981" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Outer Clockwise Gear Teeth Ring */}
              <g className="animate-spin-slow origin-center">
                <circle cx="200" cy="200" r="172" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="8" strokeDasharray="14 10" />
                <circle cx="200" cy="200" r="154" fill="none" stroke="url(#gearGrad1)" strokeWidth="3.5" filter="url(#gearGlow2)" />
                {Array.from({ length: 32 }).map((_, i) => {
                  const angle = (i * 11.25 * Math.PI) / 180;
                  const x1 = 200 + Math.cos(angle) * 172;
                  const y1 = 200 + Math.sin(angle) * 172;
                  const x2 = 200 + Math.cos(angle) * 184;
                  const y2 = 200 + Math.sin(angle) * 184;
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 4 === 0 ? '#F59E0B' : '#10B981'} strokeWidth={i % 2 === 0 ? '4' : '2'} opacity={i % 2 === 0 ? '0.9' : '0.6'} />;
                })}
              </g>

              {/* Middle Counter-Rotating Orbit Ring */}
              <g className="animate-spin-slow-reverse origin-center">
                <circle cx="200" cy="200" r="128" fill="none" stroke="rgba(6, 182, 212, 0.45)" strokeWidth="2.5" strokeDasharray="24 16" />
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const cx = 200 + Math.cos(angle) * 128;
                  const cy = 200 + Math.sin(angle) * 128;
                  return <circle key={i} cx={cx} cy={cy} r="3.5" fill="#06B6D4" className="animate-pulse" />;
                })}
              </g>

              {/* Inner Pulsing Radar Circle */}
              <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1.5" className="animate-pulse origin-center" />

              {/* Cardinal Crosshairs */}
              <line x1="200" y1="18" x2="200" y2="38" stroke="#10B981" strokeWidth="3" />
              <line x1="200" y1="362" x2="200" y2="382" stroke="#10B981" strokeWidth="3" />
              <line x1="18" y1="200" x2="38" y2="200" stroke="#10B981" strokeWidth="3" />
              <line x1="362" y1="200" x2="382" y2="200" stroke="#10B981" strokeWidth="3" />
            </svg>

            {/* Central Holographic Core Panel */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[11px] font-mono font-extrabold text-emerald-300 uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                ⚙ SYSTEM GEAR ENGINE #01
              </div>

              <div className="text-3xl sm:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-cyan-300 tracking-tight leading-tight max-w-xs drop-shadow-[0_0_35px_rgba(16,185,129,0.95)]">
                REVENUE CLOSED THIS MONTH
              </div>

              <div className="w-40 sm:w-52 h-1 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10B981] animate-pulse"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
