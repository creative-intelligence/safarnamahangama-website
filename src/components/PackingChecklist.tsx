import React, { useState } from 'react';
import { CheckSquare, Square, Sun, Snowflake, Copy, RefreshCw, Check, ShieldAlert } from 'lucide-react';

export const PackingChecklist: React.FC = () => {
  const [season, setSeason] = useState<'summer' | 'winter'>('summer');
  const [copied, setCopied] = useState<boolean>(false);

  const initialItemsSummer = [
    { id: '1', text: 'Comfortable Trekking / Jogging Shoes with Good Grip', checked: true },
    { id: '2', text: 'Warm Jacket / Fleece Hoodie (Nights can be cold)', checked: true },
    { id: '3', text: 'Sunscreen Lotion (SPF 50+), Lip Balm & Sunglasses', checked: false },
    { id: '4', text: 'Power Bank (10,000 mAh+) & Car Charging Adapter', checked: true },
    { id: '5', text: 'CNIC / Passport (Essential for Chekposts)', checked: true },
    { id: '6', text: 'Water Bottle & Energy Bars / Dry Fruits', checked: false },
    { id: '7', text: 'Personal Medications (Painkillers, Motion Sickness, Panadol)', checked: false },
    { id: '8', text: 'Raincoat / Umbrella for unexpected mountain showers', checked: false },
    { id: '9', text: 'Towel, Hygiene Kit & Wet Wipes', checked: false },
    { id: '10', text: 'Sufficient Cash (ATMs can be offline in Upper Hunza/Skardu)', checked: true },
  ];

  const initialItemsWinter = [
    { id: '11', text: 'Heavy Down Jacket / Windproof Winter Parka (-5°C Rated)', checked: true },
    { id: '12', text: 'Thermal Inner Layer Sets (Upper & Lower)', checked: true },
    { id: '13', text: 'Waterproof Snow Boots with Snow Grippers', checked: true },
    { id: '14', text: 'Woolen Beanie Cap, Scarf & Thermal Gloves', checked: false },
    { id: '15', text: 'Cold Weather Moisturizer & Cold Cream', checked: false },
    { id: '16', text: 'Hot Water Flask Bottle', checked: false },
    { id: '17', text: 'CNIC / Passport Originals', checked: true },
    { id: '18', text: 'Power Bank (Keep warm as battery drains fast in cold)', checked: true },
    { id: '19', text: 'Personal Emergency First Aid Kit', checked: false },
    { id: '20', text: 'Extra Woolen Socks (3-4 pairs)', checked: false },
  ];

  const [items, setItems] = useState(season === 'summer' ? initialItemsSummer : initialItemsWinter);

  const handleSeasonToggle = (newSeason: 'summer' | 'winter') => {
    setSeason(newSeason);
    setItems(newSeason === 'summer' ? initialItemsSummer : initialItemsWinter);
  };

  const toggleItem = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const checkedCount = items.filter(i => i.checked).length;
  const progressPercent = Math.round((checkedCount / items.length) * 100);

  const handleCopy = () => {
    const text = `Safar Nama Hangama - Northern Pakistan Packing List (${season.toUpperCase()}):\n\n` +
      items.map(i => `${i.checked ? '[✓]' : '[ ]'} ${i.text}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="checklist" className="py-16 sm:py-24 bg-slate-950 text-white relative w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 max-w-full">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
            <span className="whitespace-nowrap">Essential Traveler Utility</span>
          </div>
          <h2 className="text-[16px] xs:text-[19px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Northern Pakistan <span className="text-amber-400">Packing Checklist</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Make sure you never forget any essential gear before embarking on your Safar Nama Hangama adventure!
          </p>
        </div>

        {/* Card Panel */}
        <div className="glass-panel-card p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 sm:space-y-6">
          
          {/* Season Toggle Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-800">
            <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl sm:rounded-2xl border border-slate-800">
              <button
                onClick={() => handleSeasonToggle('summer')}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition whitespace-nowrap ${
                  season === 'summer'
                    ? 'bg-amber-500 text-slate-950 shadow font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">Summer & Autumn</span>
              </button>
              <button
                onClick={() => handleSeasonToggle('winter')}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition whitespace-nowrap ${
                  season === 'winter'
                    ? 'bg-cyan-500 text-slate-950 shadow font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Snowflake className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">Winter & Snow</span>
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] sm:text-xs font-bold text-slate-200 rounded-xl transition whitespace-nowrap flex-shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Copy className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
              <span className="whitespace-nowrap">{copied ? 'Copied to Clipboard!' : 'Copy Checklist'}</span>
            </button>
          </div>

          {/* Progress Indicator */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-slate-300">Packing Readiness Progress:</span>
              <span className="text-emerald-400">{checkedCount} of {items.length} Packed ({progressPercent}%)</span>
            </div>
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-start gap-3 transition ${
                  item.checked
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {item.checked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                )}
                <span className={item.checked ? 'line-through opacity-80' : ''}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-400/90 font-medium">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>Pro Tip: Carry original CNIC / passport copies for security checkposts along Karakoram Highway & Azad Kashmir!</span>
          </div>

        </div>

      </div>
    </section>
  );
};
