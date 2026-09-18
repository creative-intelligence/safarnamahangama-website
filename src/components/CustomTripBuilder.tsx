import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, Car, Hotel, Check, ArrowRight, ArrowLeft, MessageCircle, DollarSign } from 'lucide-react';

interface CustomTripBuilderProps {
  formatPrice: (pricePKR: number) => string;
}

export const CustomTripBuilder: React.FC<CustomTripBuilderProps> = ({ formatPrice }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Customization State
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Hunza & Nagar']);
  const [tripType, setTripType] = useState<'family' | 'honeymoon' | 'corporate' | 'friends'>('family');
  const [durationDays, setDurationDays] = useState<number>(5);
  const [peopleCount, setPeopleCount] = useState<number>(4);
  const [vehicle, setVehicle] = useState<'grand-cabin' | 'coaster' | 'prado' | 'revo'>('grand-cabin');
  const [hotelTier, setHotelTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [addOns, setAddOns] = useState<string[]>(['Bonfire & Music Night', 'Photography Guide']);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  const destinationsList = [
    'Hunza & Nagar Valley',
    'Skardu & Deosai Plains',
    'Swat, Kalam & Malam Jabba',
    'Neelum Valley & Arang Kel',
    'Fairy Meadows & Nanga Parbat',
    'Naran, Kaghan & Babusar',
    'Kumrat Valley & Katora Lake'
  ];

  const vehiclesList = [
    { id: 'grand-cabin', label: 'Toyota Grand Cabin (13 Seats)', ratePerDay: 18000 },
    { id: 'coaster', label: 'Coaster Saloon AC (22 Seats)', ratePerDay: 24000 },
    { id: 'prado', label: 'Toyota Prado 4x4 Jeep', ratePerDay: 22000 },
    { id: 'revo', label: 'Hilux Revo Luxury 4x4', ratePerDay: 26000 },
  ];

  const hotelTiersList = [
    { id: 'standard', label: 'Standard 3-Star Hotels', ratePerNightRoom: 7000 },
    { id: 'deluxe', label: 'Executive Deluxe Resorts', ratePerNightRoom: 12000 },
    { id: 'luxury', label: '4-Star Premium & Glamping', ratePerNightRoom: 22000 },
  ];

  const addOnsList = [
    'Bonfire & Music Night',
    'Professional Photographer / Drone',
    'Traditional Hunzai / Kashmiri BBQ Feast',
    'Jeep Safari (Deosai / Mahodand)',
    'Paragliding / Zipline Vouchers'
  ];

  // Calculate live estimate
  const selectedVehicleObj = vehiclesList.find(v => v.id === vehicle) || vehiclesList[0];
  const selectedHotelObj = hotelTiersList.find(h => h.id === hotelTier) || hotelTiersList[1];

  const roomsNeeded = Math.ceil(peopleCount / 2);
  const totalTransportCost = selectedVehicleObj.ratePerDay * durationDays;
  const totalHotelCost = selectedHotelObj.ratePerNightRoom * (durationDays - 1) * roomsNeeded;
  const addOnsTotal = addOns.length * 5000;
  const estimatedTotalPKR = totalTransportCost + totalHotelCost + addOnsTotal;

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const toggleAddOn = (addon: string) => {
    if (addOns.includes(addon)) {
      setAddOns(addOns.filter(a => a !== addon));
    } else {
      setAddOns([...addOns, addon]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello *Safar Nama Hangama*! I would like to request a customized tour plan:
    
📍 *Destinations*: ${selectedDestinations.join(', ')}
👥 *Trip Type*: ${tripType.toUpperCase()} (${peopleCount} People)
📅 *Duration*: ${durationDays} Days / ${durationDays - 1} Nights
🚘 *Vehicle*: ${selectedVehicleObj.label}
🏨 *Hotel Tier*: ${selectedHotelObj.label}
✨ *Add-ons*: ${addOns.length > 0 ? addOns.join(', ') : 'None'}
👤 *Name*: ${contactName || 'Valued Guest'}
📞 *Phone*: ${contactPhone || 'Provided'}

💰 *Estimated Price*: ${formatPrice(estimatedTotalPKR)}

Please share full itinerary & final price quote!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923331588959?text=${encodedText}`, '_blank');
  };

  return (
    <section id="custom-trip" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tailor-Made Expeditions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Build Your <span className="text-emerald-400">Customized Trip</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Designing a private family trip, honeymoon, or corporate getaway? Configure your destinations, vehicle, and hotel tier for instant price calculation!
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  currentStep === step
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/20'
                    : currentStep > step
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900 text-slate-500 border border-slate-800'
                }`}>
                  {currentStep > step ? <Check className="w-4 h-4" /> : step}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-slate-400">
                  {step === 1 && 'Destinations'}
                  {step === 2 && 'Dates & Group'}
                  {step === 3 && 'Vehicle & Hotel'}
                  {step === 4 && 'Summary & Send'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Select Destinations */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                Step 1: Choose Destinations to Cover
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {destinationsList.map((dest) => {
                  const isSelected = selectedDestinations.includes(dest);
                  return (
                    <button
                      key={dest}
                      onClick={() => toggleDestination(dest)}
                      className={`p-4 rounded-2xl text-left border text-xs font-bold transition flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <span>{dest}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Duration, Group & Type */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                Step 2: Trip Duration & Passenger Count
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">Trip Category:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'family', label: 'Family Tour' },
                      { id: 'honeymoon', label: 'Honeymoon Couple' },
                      { id: 'friends', label: 'Friends Group' },
                      { id: 'corporate', label: 'Corporate Team' },
                    ].map((t: any) => (
                      <button
                        key={t.id}
                        onClick={() => setTripType(t.id)}
                        className={`p-3 rounded-xl text-xs font-bold border transition ${
                          tripType === t.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">Duration (Days):</label>
                  <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-2xl">
                    {[3, 5, 7, 10].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDurationDays(d)}
                        className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition ${
                          durationDays === d ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {d} Days
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-2">Total Passengers:</label>
                  <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-2xl">
                    <button
                      onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                      className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold text-lg hover:bg-slate-700"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-extrabold text-white text-base">
                      {peopleCount} Person{peopleCount > 1 ? 's' : ''}
                    </span>
                    <button
                      onClick={() => setPeopleCount(peopleCount + 1)}
                      className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold text-lg hover:bg-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Vehicle & Hotel */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-emerald-400" />
                Step 3: Preferred Vehicle & Hotel Tier
              </h3>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-300 block">Select Vehicle Type:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehiclesList.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVehicle(v.id as any)}
                      className={`p-4 rounded-2xl text-left border text-xs font-bold transition flex items-center justify-between ${
                        vehicle === v.id
                          ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{v.label}</span>
                      {vehicle === v.id && <Check className="w-4 h-4 text-emerald-400" />}
                    </button>
                  ))}
                </div>

                <label className="text-xs font-bold text-slate-300 block pt-2">Select Hotel Accommodation Tier:</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {hotelTiersList.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => setHotelTier(h.id as any)}
                      className={`p-4 rounded-2xl text-left border text-xs font-bold transition flex flex-col justify-between h-24 ${
                        hotelTier === h.id
                          ? 'bg-amber-950/60 border-amber-500 text-amber-300 shadow'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{h.label}</span>
                      {hotelTier === h.id && <Check className="w-4 h-4 text-amber-400 self-end" />}
                    </button>
                  ))}
                </div>

                <label className="text-xs font-bold text-slate-300 block pt-2">Optional Add-ons:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addOnsList.map((addon) => {
                    const isChecked = addOns.includes(addon);
                    return (
                      <button
                        key={addon}
                        onClick={() => toggleAddOn(addon)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition flex items-center justify-between ${
                          isChecked
                            ? 'bg-slate-800 border-emerald-500/50 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span>{addon}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Review & WhatsApp Submit */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Step 4: Contact & Instant WhatsApp Submission
              </h3>

              <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Selected Destinations:</span>
                  <span className="font-bold text-emerald-300">{selectedDestinations.join(', ')}</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Duration & Group:</span>
                  <span className="font-bold text-white">{durationDays} Days / {peopleCount} Passengers</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Vehicle & Hotel:</span>
                  <span className="font-bold text-white">{selectedVehicleObj.label} • {selectedHotelObj.label}</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-slate-300 font-bold">Estimated Package Total:</span>
                  <span className="text-2xl font-black text-emerald-400">{formatPrice(estimatedTotalPKR)}</span>
                </div>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-400 block mb-1">Your Full Name:</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ali Raza"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-400 block mb-1">WhatsApp / Phone Number:</label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transition hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Send Custom Request to @safarnamahangama (+92 333 1588959)</span>
                </button>
              </form>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-2 transition whitespace-nowrap flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-5 sm:px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-emerald-950 transition whitespace-nowrap flex-shrink-0 ml-auto"
              >
                <span className="whitespace-nowrap">Continue Step {currentStep + 1}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
