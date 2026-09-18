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
      title: 'Safar Nama Group Expedition with Banner',
      location: 'Shogran & Siri Paye Meadows',
      category: 'group',
      date: 'Autumn 2026',
      travelersCount: 16,
      image: '/images/safarnama/safarnama_1.jpg',
      caption: 'Official Safar Nama Hangama group holding our banner during the Shogran Siri Paye expedition!'
    },
    {
      id: 'photo-2',
      title: 'Neelum Valley Kel Group Arrival Photo',
      location: 'Kel, Neelum Valley Kashmir',
      category: 'group',
      date: 'Summer 2026',
      travelersCount: 14,
      image: '/images/safarnama/safarnama_2.jpg',
      caption: 'Group arrival memory at Oriental View Guest House in Kel after cable car trek.'
    },
    {
      id: 'photo-3',
      title: 'Safar Nama Friends Squad Retreat',
      location: 'Swat Valley',
      category: 'friends',
      date: 'Spring 2026',
      travelersCount: 12,
      image: '/images/safarnama/safarnama_3.jpg',
      caption: 'Sunlit group photo of our friends squad relaxing at the valley resort.'
    },
    {
      id: 'photo-4',
      title: 'Safar Nama Group Dinner & Celebration Night',
      location: 'Islamabad / Resort',
      category: 'group',
      date: 'July 2026',
      travelersCount: 20,
      image: '/images/safarnama/safarnama_4.jpg',
      caption: 'Group members holding Safar Nama custom fans during our tour farewell dinner.'
    },
    {
      id: 'photo-5',
      title: 'Malam Jabba Winter Snow Group Tour',
      location: 'Malam Jabba, Swat',
      category: 'friends',
      date: 'January 2026',
      travelersCount: 8,
      image: '/images/safarnama/safarnama_5.jpg',
      caption: 'Winter snow fun and group picture at the Malam Jabba I-Love sign.'
    },
    {
      id: 'photo-6',
      title: 'Siri Paye Meadows Group Assembly',
      location: 'Siri Paye, Shogran',
      category: 'group',
      date: 'August 2026',
      travelersCount: 18,
      image: '/images/safarnama/safarnama_6.jpg',
      caption: 'Group sitting together on the lush green alpine slopes with Safar Nama banner.'
    },
    {
      id: 'photo-7',
      title: 'Jeep Roof Top Friends Squad Adventure',
      location: 'Naran Valley Safari',
      category: 'friends',
      date: 'July 2026',
      travelersCount: 7,
      image: '/images/safarnama/safarnama_7.jpg',
      caption: 'Friends squad enjoying scenic views while sitting on top of 4x4 Jeep roof.'
    },
    {
      id: 'photo-8',
      title: 'Safar Nama Grand Tour Group Family Photo',
      location: 'Northern Expeditions Hub',
      category: 'family',
      date: 'June 2026',
      travelersCount: 22,
      image: '/images/safarnama/safarnama_8.jpg',
      caption: '22-member group and family photo celebration during evening resort gathering.'
    },
    {
      id: 'photo-9',
      title: 'Mountain Trail Banner Trekking Group',
      location: 'Hunza & Nagar Trail',
      category: 'group',
      date: 'September 2026',
      travelersCount: 15,
      image: '/images/safarnama/safarnama_9.jpg',
      caption: 'Trekking group proudly displaying Safar Nama banner along the mountain trail.'
    },
    {
      id: 'photo-10',
      title: 'Pine Meadows Friends Squad Selfie',
      location: 'Arang Kel, Kashmir',
      category: 'friends',
      date: 'May 2026',
      travelersCount: 3,
      image: '/images/safarnama/safarnama_10.jpg',
      caption: 'Sunny selfie memory of female travelers enjoying pine forest views.'
    },
    {
      id: 'photo-11',
      title: 'Attabad Lake Emerald Waters Group Photo',
      location: 'Attabad Lake, Hunza',
      category: 'group',
      date: 'August 2026',
      travelersCount: 24,
      image: '/images/safarnama/safarnama_11.jpg',
      caption: 'Our amazing 24-member group tour enjoying blue waters and boat rides in Attabad Lake!'
    },
    {
      id: 'photo-12',
      title: 'Katpana Cold Desert Skardu Stargazing Group',
      location: 'Katpana Desert, Skardu',
      category: 'group',
      date: 'July 2026',
      travelersCount: 28,
      image: '/images/safarnama/safarnama_12.jpg',
      caption: 'High-altitude cold desert camping and group photography with Safar Nama family.'
    }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? groupPhotos
    : groupPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#04070d] text-white relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-[#E5983A]/40 text-[#E5983A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 max-w-full">
            <Camera className="w-3.5 h-3.5 text-[#E5983A] flex-shrink-0" />
            <span>Real Memories & Group Vibes</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-center">
            Past Expeditions & <span className="text-[#E5983A]">Group Photos</span>
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-1 text-center">
            Take a look at real trip moments captured during our past Hunza, Skardu, Swat, and Kashmir tours with Safar Nama Hangama family!
          </p>

          {/* Category Filter Pills */}
          <div className="mt-4 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
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
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
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
