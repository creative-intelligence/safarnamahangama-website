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
      title: 'Hunza Group Photo at Attabad Lake',
      location: 'Attabad Lake, Hunza',
      category: 'group',
      date: 'Autumn 2026',
      travelersCount: 24,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
      caption: 'Our amazing 24-member group tour enjoying blue waters and boat rides in Attabad Lake!'
    },
    {
      id: 'photo-2',
      title: 'Campfire & Musical Night in Kalam',
      location: 'Kalam Valley, Swat',
      category: 'friends',
      date: 'Summer 2026',
      travelersCount: 18,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      caption: 'Riverside bonfire with live guitar acoustic music under the stars in Kalam.'
    },
    {
      id: 'photo-3',
      title: 'Romantic Sunset at Eagle’s Nest',
      location: 'Duikar, Hunza',
      category: 'honeymoon',
      date: 'Spring 2026',
      travelersCount: 2,
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
      caption: 'Exclusive honeymoon trip couple witnessing 360-degree sunset over Rakaposhi and Ladyfinger peak.'
    },
    {
      id: 'photo-4',
      title: 'Skardu & Deosai Jeep Safari Group',
      location: 'Deosai National Park',
      category: 'group',
      date: 'July 2026',
      travelersCount: 30,
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      caption: 'Conquering the 2nd highest plateau in the world with 5 Prado Jeeps!'
    },
    {
      id: 'photo-5',
      title: 'Family Vacation in Neelum Valley',
      location: 'Arang Kel, Kashmir',
      category: 'family',
      date: 'August 2026',
      travelersCount: 12,
      image: 'https://images.unsplash.com/photo-1539635273304-0e8723e07256?auto=format&fit=crop&w=1200&q=80',
      caption: 'Multigenerational family group enjoying cable car ride and green meadows in Arang Kel.'
    },
    {
      id: 'photo-6',
      title: 'Fairy Meadows Summit Group Photo',
      location: 'Nanga Parbat Base',
      category: 'friends',
      date: 'September 2026',
      travelersCount: 16,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Group photo right in front of Nanga Parbat killer mountain (8,126m) at Beyal Camp.'
    }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? groupPhotos
    : groupPhotos.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Real Memories & Group Vibes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Past Expeditions & <span className="text-emerald-400">Group Photos</span>
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
                    ? 'bg-emerald-600 text-white shadow'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
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
              className="glass-panel-card rounded-3xl overflow-hidden group border border-slate-800 hover:border-emerald-500/40 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold rounded-full border border-amber-500/30 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {photo.location}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-emerald-950/90 backdrop-blur-md text-emerald-300 text-[10px] font-extrabold rounded-full border border-emerald-500/40 flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {photo.travelersCount} Travelers
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <div className="p-3 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold">
                    <Eye className="w-4 h-4" />
                    <span>View Full Photo</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="uppercase font-bold text-emerald-400">{photo.category} Trip</span>
                    <span>{photo.date}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-emerald-300 transition">
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

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-3 bg-slate-950/80 text-white rounded-full border border-slate-700 hover:bg-slate-950"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="h-96 sm:h-[500px] w-full">
                <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-slate-950">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-black rounded-full">
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
