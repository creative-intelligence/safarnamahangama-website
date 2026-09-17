import React, { useState } from 'react';
import { Tour } from '../data/toursData';
import { X, Calendar, Clock, MapPin, CheckCircle, XCircle, Users, PhoneCall, ShieldCheck, Sparkles, Image, ArrowRight, MessageCircle } from 'lucide-react';

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  formatPrice: (pricePKR: number) => string;
  onBookNow: (tour: Tour, customDetails?: any) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  formatPrice,
  onBookNow
}) => {
  if (!tour) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'gallery'>('itinerary');
  const [adultSeats, setAdultSeats] = useState<number>(2);
  const [roomType, setRoomType] = useState<'triple' | 'twin' | 'single'>('twin');
  const [pickupCity, setPickupCity] = useState<string>(tour.pickupCities[0] || 'Islamabad');

  const basePricePerPerson = tour.discountPricePKR || tour.pricePKR;
  
  // Single room supplement addition (+PKR 8,000 per room)
  const roomSupplement = roomType === 'single' ? 8000 : roomType === 'twin' ? 2500 : 0;
  const totalPricePKR = (basePricePerPerson + roomSupplement) * adultSeats;

  const handleProceedBooking = () => {
    onBookNow(tour, {
      adultSeats,
      roomType,
      pickupCity,
      totalPricePKR
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Banner */}
        <div className="relative h-64 sm:h-80 flex-shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-950/60" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 bg-slate-950/80 hover:bg-slate-950 text-white rounded-full border border-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-full uppercase">
                {tour.destination}
              </span>
              <span className="px-3 py-1 bg-slate-950/80 text-amber-400 text-xs font-bold rounded-full border border-slate-700">
                {tour.durationDays} Days / {tour.durationNights} Nights
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {tour.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              {tour.subtitle}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-slate-950 border-b border-slate-800 px-6 gap-4">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-4 text-xs font-bold border-b-2 transition ${
              activeTab === 'itinerary'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Day-by-Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-4 text-xs font-bold border-b-2 transition ${
              activeTab === 'inclusions'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Inclusions & Exclusions
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-4 text-xs font-bold border-b-2 transition ${
              activeTab === 'gallery'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Photos & Highlights
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                Tour Timeline Schedule
              </h3>
              <div className="relative border-l-2 border-slate-800 ml-3 space-y-6 pl-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-[10px] font-black text-emerald-300">
                      {day.day}
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider">
                        Day {day.day}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">{day.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{day.description}</p>
                      
                      {/* Activities bullets */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {day.activities.map((act, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-[11px] rounded-lg border border-slate-700">
                            • {act}
                          </span>
                        ))}
                      </div>

                      <p className="text-[11px] text-emerald-400 font-semibold mt-2">
                        🏨 Overnight: {day.overnight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-950/30 p-5 rounded-2xl border border-emerald-500/30">
                <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  What is Included
                </h4>
                <ul className="space-y-2">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-950/20 p-5 rounded-2xl border border-rose-500/20">
                <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2 mb-3">
                  <XCircle className="w-4 h-4 text-rose-400" />
                  What is Excluded
                </h4>
                <ul className="space-y-2">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Gallery & Highlights */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Image className="w-4 h-4 text-amber-400" />
                Expedition Highlights Gallery
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tour.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="h-36 rounded-xl overflow-hidden border border-slate-800">
                    <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seat Cost Estimator Box */}
          <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Interactive Trip Cost Estimator
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Seats Counter */}
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Number of Passengers:</label>
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl p-1">
                  <button
                    onClick={() => setAdultSeats(Math.max(1, adultSeats - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-white">{adultSeats} Seats</span>
                  <button
                    onClick={() => setAdultSeats(adultSeats + 1)}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Room Sharing Preference:</label>
                <select
                  value={roomType}
                  onChange={(e: any) => setRoomType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white font-semibold cursor-pointer"
                >
                  <option value="triple">Triple Sharing (Standard)</option>
                  <option value="twin">Twin / Couple Sharing (+PKR 2.5k)</option>
                  <option value="single">Private Single Room (+PKR 8k)</option>
                </select>
              </div>

              {/* Pickup City */}
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Departure Pickup City:</label>
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white font-semibold cursor-pointer"
                >
                  {tour.pickupCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Total Calculated Estimate */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Total Estimated Cost ({adultSeats} Seat{adultSeats > 1 ? 's' : ''}):</span>
                <span className="text-2xl font-black text-emerald-400">{formatPrice(totalPricePKR)}</span>
              </div>
              <button
                onClick={handleProceedBooking}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-950 flex items-center gap-2 transition hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book This Tour</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
