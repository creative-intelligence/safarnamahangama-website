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
      badgeColor: 'bg-emerald-500 text-slate-950',
      description: 'Private dedicated transport with kid-friendly pace, verified safe family resorts, separate rooms, and customized itinerary flexibilities.',
      highlights: [
        'Dedicated Toyota Grand Cabin or Coaster',
        '3-Star / 4-Star Family Executive Rooms',
        'Flexible stops & child care comfort',
        'Islamabad / Lahore door-step pickup'
      ],
      image: 'https://images.unsplash.com/photo-1539635273304-0e8723e07256?auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'solo',
      title: 'Solo Travelers & Solo Females',
      badge: '🎒 Solo & Joiner Seats',
      badgeColor: 'bg-cyan-500 text-slate-950',
      description: 'Join existing fixed departure groups safely. Female travelers receive twin female sharing rooms and female tour lead guidance.',
      highlights: [
        'Single Joiner Seats on Fixed Departures',
        'Verified Female Twin Sharing Rooms',
        'Professional Tour Escort & 24/7 Support',
        'Welcoming & Respectful Group Environment'
      ],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="private-trips" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Tailored For Every Traveler
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Private & Customized <span className="text-amber-400">Trip Hub</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Whether you are planning a family vacation, a romantic honeymoon getaway, a corporate retreat, or joining as a solo traveler—we have a tailored solution for you!
          </p>
        </div>

        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel-card rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-emerald-500/40 transition duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-black rounded-full shadow-lg ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {cat.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
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
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition hover:scale-[1.02]"
                >
                  <span>Request {cat.title.split(' ')[0]} Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
