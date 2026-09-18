import React from 'react';
import { Users, Heart, Sparkles, Building, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PrivateTripsSectionProps {
  onSelectCategoryBooking: (categoryType: string) => void;
}

export const PrivateTripsSection: React.FC<PrivateTripsSectionProps> = ({ onSelectCategoryBooking }) => {
  const tripCategories = [
    {
      id: 'family',
      title: 'Family Customized Expeditions',
      badge: '👨‍👩‍👧‍👦 Family Special',
      badgeColor: 'bg-[#E5983A] text-slate-950',
      description: 'Private dedicated transport with kid-friendly pace, verified safe family resorts, separate rooms, and customized itinerary flexibilities.',
      highlights: [
        'Dedicated Toyota Grand Cabin or Coaster',
        '3-Star / 4-Star Family Executive Rooms',
        'Flexible stops & child care comfort',
        'Islamabad / Lahore door-step pickup'
      ],
      image: '/images/safarnama/safarnama_1.jpg'
    },
    {
      id: 'honeymoon',
      title: 'Honeymoon & Romantic Couple Escapes',
      badge: '👩‍❤️‍👨 Couples Special',
      badgeColor: 'bg-rose-500 text-white',
      description: 'Experience romantic northern views with private 4x4 Prado Jeeps, luxury lakefront suites, candlelight dinners, and complete privacy.',
      highlights: [
        'Private Luxury Prado 4x4 Jeep with Chauffeur',
        '4-Star Romantic Lake View Suites',
        'Candlelight Dinner & Flower Decor Setup',
        'Complimentary Honeymoon Cake & Fruit Basket'
      ],
      image: '/images/safarnama/safarnama_2.jpg'
    },
    {
      id: 'friends',
      title: 'Friends Squad & Adventure Trips',
      badge: '🚴‍♂️ Friends Squad',
      badgeColor: 'bg-amber-500 text-slate-950',
      description: 'High energy group vibes with quad biking in Cold Desert, rafting on Kunhar river, musical bonfire nights, and drone photography.',
      highlights: [
        'Group Grand Cabin or Coaster Saloon',
        'Riverside Glamping & Bonfire Nights',
        'Drone & DSLR Photography Lead',
        'Jeep Safari & Water Sports Vouchers'
      ],
      image: '/images/safarnama/safarnama_3.jpg'
    },
    {
      id: 'corporate',
      title: 'Corporate & University Retreats',
      badge: '🏢 Corporate & Org',
      badgeColor: 'bg-indigo-500 text-white',
      description: 'Tailored for corporate teams, tech companies, and university trips. Complete with logistics, team building, and official invoices.',
      highlights: [
        'Fleet of 22-Seater Coaster Saloons',
        'Corporate Team Building Workshops',
        'Sound System & Campfire Entertainment',
        'NTN / FBR Registered Invoice & GST Support'
      ],
      image: '/images/safarnama/safarnama_4.jpg'
    },
    {
      id: 'solo',
      title: 'Solo Travelers & Solo Females',
      badge: '🎒 Solo & Joiner Seats',
      badgeColor: 'bg-[#E5983A] text-slate-950',
      description: 'Join existing fixed departure groups safely. Female travelers receive twin female sharing rooms and female tour lead guidance.',
      highlights: [
        'Single Joiner Seats on Fixed Departures',
        'Verified Female Twin Sharing Rooms',
        'Professional Tour Escort & 24/7 Support',
        'Welcoming & Respectful Group Environment'
      ],
      image: '/images/safarnama/safarnama_5.jpg'
    }
  ];

  return (
    <section id="private-trips" className="py-12 sm:py-20 lg:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0" />
            <span>Tailored For Every Traveler</span>
          </div>
          <h2 className="text-[18px] xs:text-[21px] sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-center whitespace-nowrap">
            Private & Customized <span className="text-[#E5983A]">Trip Hub</span>
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-1">
            Whether you are planning a family vacation, a romantic honeymoon getaway, a corporate retreat, or joining as a solo traveler—we have a tailored solution for you!
          </p>
        </div>

        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-[#E5983A]/50 transition duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = '/images/destinations/hunza_attabad.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-black rounded-full shadow-lg ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#E5983A] transition">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {cat.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCategoryBooking(cat.id)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#E5983A] via-amber-500 to-[#D97706] hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition hover:scale-[1.02] whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Request {cat.title.split(' ')[0]} Package</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 flex-shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
