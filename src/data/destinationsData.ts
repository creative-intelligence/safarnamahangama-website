export interface Destination {
  id: string;
  name: string;
  regionTag: string;
  altitude: string;
  bestMonths: string;
  temperature: string;
  distanceFromIslamabad: string;
  image: string;
  shortDesc: string;
  topAttractions: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'hunza',
    name: 'Hunza & Nagar Valley',
    regionTag: 'Gilgit-Baltistan',
    altitude: '2,438 m (8,000 ft)',
    bestMonths: 'April to October (Blossom & Autumn)',
    temperature: '15°C to 25°C Summer | -5°C Winter',
    distanceFromIslamabad: '595 km (12 hrs drive via KKH)',
    image: 'https://images.unsplash.com/photo-1586351012965-861624544334?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Known as Shangri-La on Earth, famous for majestic Passu Cones, Attabad Lake, ancient Altit & Baltit Forts, and apricot blossom colors.',
    topAttractions: ['Attabad Lake', 'Passu Cones', 'Karimabad Bazaar', 'Eagle\'s Nest Duikar', 'Hussaini Suspension Bridge', 'Khunjerab Pass (China Border)']
  },
  {
    id: 'skardu',
    name: 'Skardu & Baltistan',
    regionTag: 'Gilgit-Baltistan',
    altitude: '2,228 m (7,310 ft)',
    bestMonths: 'May to September',
    temperature: '18°C to 28°C Summer | -10°C Winter',
    distanceFromIslamabad: '640 km (14 hrs drive or 45 mins flight)',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Gateway to K2 and high peaks. Home to Deosai National Park (Land of Giants), Katpana Cold Desert, Shangrila Lake, and Shigar Valley.',
    topAttractions: ['Deosai Plains', 'Katpana Cold Desert', 'Shangrila Resort', 'Manthoka Waterfall', 'Upper Kachura Lake', 'Shigar Fort Palace']
  },
  {
    id: 'swat',
    name: 'Swat, Kalam & Malam Jabba',
    regionTag: 'Khyber Pakhtunkhwa',
    altitude: '2,000 m (6,560 ft in Kalam)',
    bestMonths: 'All Year Round (Ski in Winter, Greenery in Summer)',
    temperature: '10°C to 22°C Summer | -2°C Winter',
    distanceFromIslamabad: '280 km (5 hrs via Swat Expressway)',
    image: 'https://images.unsplash.com/photo-1596707323605-650a25695026?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'The Switzerland of the East. Pristine rivers, dense forests in Ushu, alpine lakes, and Pakistan\'s premier ski resort at Malam Jabba.',
    topAttractions: ['Malam Jabba Ski Resort', 'Mahodand Lake', 'Ushu Forest', 'Matiltan Waterfall', 'Fizaghat Riverside', 'Mingora Market']
  },
  {
    id: 'kashmir',
    name: 'Neelum Valley, Kashmir',
    regionTag: 'Azad Jammu & Kashmir',
    altitude: '1,615 m to 2,380 m',
    bestMonths: 'May to November',
    temperature: '12°C to 24°C Summer',
    distanceFromIslamabad: '210 km to Keran (6 hrs drive)',
    image: 'https://images.unsplash.com/photo-1609825488888-3a766db05542?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'A bow-shaped forested valley with rushing river streams, wooden chalets, cable car ride to hilltop paradise Arang Kel, and Sharda Temple ruins.',
    topAttractions: ['Arang Kel', 'Sharda Peeth Ruins', 'Kutton Jagran Waterfall', 'Keran LOC Viewpoint', 'Dhani Waterfall', 'Taobat']
  },
  {
    id: 'fairy-meadows',
    name: 'Fairy Meadows & Nanga Parbat',
    regionTag: 'Gilgit-Baltistan',
    altitude: '3,300 m (10,800 ft)',
    bestMonths: 'June to September',
    temperature: '8°C to 18°C Summer | Freezing Nights',
    distanceFromIslamabad: '480 km to Raikot Bridge + Jeep & Trek',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Lush alpine plateau sitting right at the base of Nanga Parbat (8,126m), the 9th highest mountain in the world. Famous for thrill jeep tracks & starlight camping.',
    topAttractions: ['Fairy Meadows Plateau', 'Beyal Camp', 'Nanga Parbat Viewpoint', 'Raikhot Glacier', 'Tatto Village Trek']
  }
];
