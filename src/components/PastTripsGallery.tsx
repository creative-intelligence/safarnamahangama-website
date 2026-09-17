import React, { useState } from 'react';
import { Camera, Users, Sparkles, Heart, MapPin, Eye, X } from 'lucide-react';

interface GroupPhoto {
  id: string;
  title: string;
  location: string;
  category: 'group' | 'family' | 'friends' | 'honeymoon';
  date: string;
  travelersCount: number;
  image: string;
  caption: string;
}

export const PastTripsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GroupPhoto | null>(null);

  const groupPhotos: GroupPhoto[] = [
    {
      id: 'photo-1',
      title: 'Hunza Group Expedition at Attabad Lake',
      location: 'Attabad Lake, Hunza',
      category: 'group',
      date: 'Autumn 2026',
      travelersCount: 24,
      image: '/images/safarnama/safarnama_6.jpg',
      caption: 'Our amazing 24-member group tour enjoying blue waters and boat rides in Attabad Lake!'
    },
    {
      id: 'photo-2',
      title: 'Campfire & Musical Night in Kalam',
      location: 'Kalam Valley, Swat',
      category: 'friends',
      date: 'Summer 2026',
      travelersCount: 18,
      image: '/images/safarnama/safarnama_7.jpg',
      caption: 'Riverside bonfire with live acoustic guitar music under the stars in Kalam.'
    },
    {
      id: 'photo-3',
      title: 'Romantic Couple Escape at Eagle’s Nest',
      location: 'Duikar, Hunza',
      category: 'honeymoon',
      date: 'Spring 2026',
      travelersCount: 2,
      image: '/images/safarnama/safarnama_8.jpg',
      caption: 'Exclusive honeymoon trip couple witnessing 360-degree sunset over Rakaposhi and Ladyfinger peak.'
    },
    {
      id: 'photo-4',
      title: 'Skardu & Deosai Jeep Safari Group',
      location: 'Deosai National Park',
      category: 'group',
      date: 'July 2026',
      travelersCount: 30,
      image: '/images/safarnama/safarnama_9.jpg',
      caption: 'Conquering the 2nd highest plateau in the world with 5 Prado Jeeps!'
    },
    {
      id: 'photo-5',
      title: 'Family Vacation in Neelum Valley',
      location: 'Arang Kel, Kashmir',
      category: 'family',
      date: 'August 2026',
      travelersCount: 12,
      image: '/images/safarnama/safarnama_10.jpg',
      caption: 'Multigenerational family group enjoying cable car ride and green meadows in Arang Kel.'
    },
    {
      id: 'photo-6',
      title: 'Fairy Meadows Summit Group Photo',
      location: 'Nanga Parbat Base',
      category: 'friends',
      date: 'September 2026',
      travelersCount: 16,
      image: '/images/safarnama/safarnama_11.jpg',
      caption: 'Group photo right in front of Nanga Parbat killer mountain (8,126m) at Beyal Camp.'
    },
    {
      id: 'photo-7',
      title: 'Katpana Cold Desert Stargazing Group',
      location: 'Katpana Desert, Skardu',
      category: 'group',
      date: 'August 2026',
      travelersCount: 28,
      image: '/images/safarnama/safarnama_12.jpg',
      caption: 'High-altitude cold desert camping and starlight photography with Safar Nama group.'
    },
    {
      id: 'photo-8',
      title: 'Ushu Pine Forest Family Trek',
      location: 'Ushu Forest, Kalam',
      category: 'family',
      date: 'July 2026',
      travelersCount: 14,
      image: '/images/safarnama/safarnama_13.jpg',
      caption: 'Dense pine forest nature walk with family group members.'
    },
    {
      id: 'photo-9',
      title: 'Passu Cones Group Expedition',
      location: 'Passu, Upper Hunza',
      category: 'group',
      date: 'June 2026',
      travelersCount: 22,
      image: '/images/safarnama/safarnama_14.jpg',
      caption: 'Striking group memory right under the iconic Cathedral Passu Cones peak.'
    },
    {
      id: 'photo-10',
      title: 'Shangrila Resort Skardu Lake View Group',
      location: 'Lower Kachura Lake',
      category: 'group',
      date: 'May 2026',
      travelersCount: 26,
      image: '/images/safarnama/safarnama_15.jpg',
      caption: 'Iconic group photo at Shangrila Resort in front of red roof Pagodas.'
    },
    {
      id: 'photo-11',
      title: 'Malam Jabba Ski Resort Friends Squad',
      location: 'Malam Jabba, Swat',
      category: 'friends',
      date: 'January 2026',
      travelersCount: 15,
      image: '/images/safarnama/safarnama_16.jpg',
      caption: 'Winter snow games, zip-lining, and chairlift rides with our friends squad.'
    },
    {
      id: 'photo-12',
      title: 'Naran Saiful Malook Lake Group Tour',
      location: 'Lake Saiful Malook',
      category: 'family',
      date: 'July 2026',
      travelersCount: 20,
      image: '/images/safarnama/safarnama_17.jpg',
      caption: 'Unforgettable boat ride and glacier view at Lake Saiful Malook with family members.'
    }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? groupPhotos
    : groupPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#04070d] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-[#E5983A]/40 text-[#E5983A] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Real Memories & Group Vibes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Past Expeditions & <span className="text-[#E5983A]">Group Photos</span>
            </h2>
            <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl">
              Take a look at real trip moments captured during our past Hunza, Skardu, Swat, and Kashmir tours with Safar Nama Hangama family!
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Past Photos' },
              { id: 'group', label: 'Group Tours' },
              { id: 'family', label: 'Family Trips' },
              { id: 'honeymoon', label: 'Couple Escapes' },
              { id: 'friends', label: 'Friends Squad' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  activeCategory === tab.id
                    ? 'bg-[#E5983A] text-slate-950 shadow-lg shadow-amber-950 font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="glass-panel-card rounded-3xl overflow-hidden group border border-slate-800 hover:border-[#E5983A]/50 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-[center_25%] group-hover:scale-110 transition-transform duration-700"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070d] via-[#04070d]/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/90 backdrop-blur-md text-[#E5983A] text-xs font-bold rounded-full border border-[#E5983A]/40 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {photo.location}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-slate-950/90 backdrop-blur-md text-amber-300 text-[10px] font-extrabold rounded-full border border-amber-500/40 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {photo.travelersCount} Travelers
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <div className="p-3 bg-[#E5983A] text-slate-950 rounded-full shadow-2xl flex items-center gap-2 text-xs font-black">
                    <Eye className="w-4 h-4" />
                    <span>View Full Photo</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2 bg-[#04070d]">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="uppercase font-bold text-[#E5983A]">{photo.category} Trip</span>
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-[#E5983A] transition">
                    {photo.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Uncropped High-Res Viewer */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-4xl w-full bg-[#04070d] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-3 bg-slate-950/80 text-white rounded-full border border-slate-700 hover:bg-slate-950"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] sm:max-h-[75vh] w-full bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-full max-w-full object-contain rounded-xl"
                  onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = '/images/destinations/hunza_attabad.jpg';
                  }}
                />
              </div>
              <div className="p-6 bg-[#04070d] border-t border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#E5983A] text-slate-950 text-xs font-black rounded-full">
                    {selectedPhoto.location}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{selectedPhoto.date} • {selectedPhoto.travelersCount} Group Members</span>
                </div>
                <h3 className="text-xl font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-300 mt-2">{selectedPhoto.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
