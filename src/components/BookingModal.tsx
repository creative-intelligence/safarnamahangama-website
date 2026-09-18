import React, { useState, useEffect } from 'react';
import { Tour, TOURS_DATA } from '../data/toursData';
import { X, MessageCircle, ShieldCheck, CheckCircle2, CreditCard, Building2, Smartphone } from 'lucide-react';

interface BookingModalProps {
  selectedTour: Tour | null;
  customDetails?: any;
  onClose: () => void;
  formatPrice: (pricePKR: number) => string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  selectedTour,
  customDetails,
  onClose,
  formatPrice
}) => {
  const [tourId, setTourId] = useState<string>(selectedTour?.id || TOURS_DATA[0].id);
  const [fullName, setFullName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [cnicNumber, setCnicNumber] = useState<string>('');
  const [seatsCount, setSeatsCount] = useState<number>(customDetails?.adultSeats || 2);
  const [pickupCity, setPickupCity] = useState<string>(customDetails?.pickupCity || 'Islamabad');
  const [paymentMethod, setPaymentMethod] = useState<'advance' | 'full' | 'cash'>('advance');
  const [specialNote, setSpecialNote] = useState<string>('');

  useEffect(() => {
    if (selectedTour) {
      setTourId(selectedTour.id);
    }
  }, [selectedTour]);

  const tourObj = TOURS_DATA.find(t => t.id === tourId) || TOURS_DATA[0];
  const unitPrice = tourObj.discountPricePKR || tourObj.pricePKR;
  const grandTotalPKR = customDetails?.totalPricePKR || (unitPrice * seatsCount);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `🎉 *NEW TOUR BOOKING REQUEST - SAFAR NAMA HANGAMA* 🎉

📍 *Tour*: ${tourObj.title}
🗓️ *Duration*: ${tourObj.durationDays} Days / ${tourObj.durationNights} Nights
🚀 *Next Departure*: ${tourObj.nextDeparture}

👤 *Guest Name*: ${fullName}
📞 *WhatsApp / Phone*: ${whatsappNumber}
🪪 *CNIC*: ${cnicNumber || 'Provided during travel'}
🚌 *Pickup City*: ${pickupCity}
👥 *Seats Count*: ${seatsCount} Person(s)
💳 *Payment Plan*: ${paymentMethod.toUpperCase()} (Total: ${formatPrice(grandTotalPKR)})

📝 *Special Instructions / Add-ons*: ${specialNote || 'None'}

Please send account details for deposit confirmation!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923331588959?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Instant Reservation Form
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Book Your Expedition
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full border border-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmitBooking} className="mt-6 space-y-4">
          
          {/* Tour Selector Dropdown */}
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Select Tour Package:</label>
            <select
              value={tourId}
              onChange={(e) => setTourId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white font-semibold cursor-pointer focus:border-emerald-500"
            >
              {TOURS_DATA.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title} — {formatPrice(t.discountPricePKR || t.pricePKR)} / head
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Full Name (Lead Passenger):</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Muhammad Hamza"
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">WhatsApp / Contact Number:</label>
              <input
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="e.g. 0333 1234567"
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* CNIC Number */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">CNIC / Passport No:</label>
              <input
                type="text"
                value={cnicNumber}
                onChange={(e) => setCnicNumber(e.target.value)}
                placeholder="35202-XXXXXXX-X"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Seats Count */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Number of Seats:</label>
              <input
                type="number"
                min="1"
                max="30"
                value={seatsCount}
                onChange={(e) => setSeatsCount(parseInt(e.target.value) || 1)}
                required
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white font-bold focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Pickup City */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Pickup City:</label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white font-semibold cursor-pointer focus:border-emerald-500"
              >
                <option value="Islamabad">Islamabad / Rawalpindi</option>
                <option value="Lahore">Lahore (+PKR 1.5k fuel)</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Karachi">Karachi (Fly to ISB / Train)</option>
              </select>
            </div>
          </div>

          {/* Payment Plan Selection */}
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Preferred Deposit Plan:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'advance', label: '50% Advance Deposit' },
                { id: 'full', label: 'Full Payment (Discount)' },
                { id: 'cash', label: 'Reserve & Pay at Departure' },
              ].map((pm: any) => (
                <button
                  type="button"
                  key={pm.id}
                  onClick={() => setPaymentMethod(pm.id)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-xs font-bold text-center transition ${
                    paymentMethod === pm.id
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {pm.label}
                </button>
              ))}
            </div>
          </div>

          {/* Special Instruction */}
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">Special Requirements (Optional):</label>
            <textarea
              rows={2}
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="e.g. Dietary requirements, separate room for couple, front seat request..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Cost Summary Box */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] text-slate-400 block">Total Booking Amount ({seatsCount} Seat{seatsCount > 1 ? 's' : ''}):</span>
              <span className="text-xl font-black text-emerald-400">{formatPrice(grandTotalPKR)}</span>
            </div>
            <div className="text-left sm:text-right text-[11px] text-slate-400">
              <span>Accepted: </span>
              <span className="font-bold text-slate-200">JazzCash • EasyPaisa • Bank Transfer</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transition hover:scale-[1.01]"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 flex-shrink-0" />
            <span>Confirm Booking via WhatsApp (+92 333 1588959)</span>
          </button>
        </form>

      </div>
    </div>
  );
};
