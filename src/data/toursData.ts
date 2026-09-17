export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  overnight: string;
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  region: 'hunza' | 'skardu' | 'swat' | 'kashmir' | 'naran' | 'kumrat' | 'fairy-meadows';
  category: 'group' | 'family' | 'honeymoon' | 'adventure' | 'weekend';
  durationDays: number;
  durationNights: number;
  pricePKR: number;
  discountPricePKR?: number;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  nextDeparture: string;
  pickupCities: string[];
  image: string;
  gallery: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
}

export const TOURS_DATA: Tour[] = [
  {
    id: 'hunza-autumn-spring-expedition',
    title: '5-Day Hunza & Nagar Valley Blossom Expedition',
    subtitle: 'Experience the magical turquoise waters of Attabad Lake, Passu Cones & Karimabad',
    destination: 'Hunza & Nagar Valley',
    region: 'hunza',
    category: 'group',
    durationDays: 5,
    durationNights: 4,
    pricePKR: 28500,
    discountPricePKR: 24999,
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    nextDeparture: 'Every Thursday Night',
    pickupCities: ['Islamabad', 'Lahore', 'Rawalpindi'],
    image: '/images/destinations/hunza_attabad.jpg',
    gallery: [
      '/images/destinations/hunza_attabad.jpg',
      '/images/destinations/hunza_passu.jpg',
      '/images/safarnama/safarnama_1.jpg',
      '/images/safarnama/safarnama_2.jpg'
    ],
    highlights: [
      'Boating in turquoise waters of Attabad Lake',
      'Panoramic view of Passu Cones & Hussaini Suspension Bridge',
      'Historical tour of 900+ years old Altit & Baltit Forts',
      'Shopping & café hopping in Karimabad Bazaar',
      'Bonfire, musical night & traditional Hunzai cultural dinner'
    ],
    inclusions: [
      'AC Luxury Coaster / Grand Cabin Transport',
      '4 Nights Deluxe Hotel Accommodation (Double/Triple sharing)',
      'Daily Breakfasts & Dinners',
      'Professional Tour Guide & Photographer',
      'All Toll Taxes, Parking & Driver Expenses',
      'Bonfire & Music Night'
    ],
    exclusions: [
      'Lunch & personal snacks/drinks',
      'Entry tickets to historical Forts & boat rides',
      '4x4 Jeep rentals if required due to weather',
      'Anything not mentioned in inclusions'
    ],
    itinerary: [
      { day: 1, title: 'Departure & Scenic Journey via KKH', description: 'Overnight journey starting from Islamabad/Lahore via Hazara Motorway.', activities: ['Departure at 10:00 PM', 'Night travel across Hazara Motorway', 'Short tea break at Abbottabad'], overnight: 'Hotel stay at Chilas / Naran' },
      { day: 2, title: 'Chilas to Karimabad, Hunza', description: 'Drive along Indus river gorge with stops at 3-Mountain Junction & Rakaposhi Viewpoint.', activities: ['Stop at 3-Mountain Junction', 'Rakaposhi Viewpoint lunch break', 'Arrival in Karimabad'], overnight: 'Hotel stay in Karimabad, Hunza' },
      { day: 3, title: 'Attabad Lake, Passu Cones & Hussaini Bridge', description: 'Full day adventure to Upper Hunza. Cruise on Attabad Lake and walk Hussaini Bridge.', activities: ['Boating at Attabad Lake', 'Crossing Hussaini Suspension Bridge', 'Passu Cones photography', 'Sost Border market visit'], overnight: 'Hotel stay in Karimabad, Hunza' },
      { day: 4, title: 'Altit Fort, Royal Garden & Eagle’s Nest Sunset', description: 'Explore ancient architecture of Altit & Baltit Forts, and watch sunset from Eagle’s Nest.', activities: ['Guided tour of Altit & Baltit Forts', 'Walnut garden walk', 'Sunset at Eagle’s Nest Duikar', 'Hangama Cultural Musical Night'], overnight: 'Hotel stay in Karimabad' },
      { day: 5, title: 'Return Journey to Islamabad/Lahore', description: 'Early departure back to Islamabad with sweet memories of Hunza Valley.', activities: ['Breakfast in Hunza', 'Souvenir shopping', 'Arrival in Islamabad around 11:00 PM'], overnight: 'Home' }
    ]
  },
  {
    id: 'skardu-deosai-plains-safari',
    title: '7-Day Skardu & Deosai Plains Shangrila Safari',
    subtitle: 'Explore Shangrila Lake, Katpana Cold Desert, Manthoka Waterfall & Deosai Plateau',
    destination: 'Skardu, Baltistan',
    region: 'skardu',
    category: 'group',
    durationDays: 7,
    durationNights: 6,
    pricePKR: 38000,
    discountPricePKR: 34500,
    featured: true,
    rating: 5.0,
    reviewsCount: 198,
    nextDeparture: 'Every Friday Night',
    pickupCities: ['Islamabad', 'Lahore'],
    image: '/images/destinations/skardu_shangrila.jpg',
    gallery: [
      '/images/destinations/skardu_shangrila.jpg',
      '/images/destinations/skardu_deosai.jpg',
      '/images/safarnama/safarnama_3.jpg',
      '/images/safarnama/safarnama_4.jpg'
    ],
    highlights: [
      '4x4 Prado Jeep Safari to Deosai National Park & Sheosar Lake',
      'Stargazing & Quad Biking at Katpana Cold Desert',
      'Visiting Shangrila Lower Kachura Lake & Upper Kachura',
      'Manthoka Waterfall photography & organic trout fish lunch',
      'Exploring Shigar Fort (Palace on the Rock)'
    ],
    inclusions: [
      'AC Transport from Islamabad + 4x4 Jeeps for Deosai',
      '6 Nights Executive Hotel Accommodation',
      'Breakfast & Gourmet Dinners',
      'First Aid Kit & Mountain Safety Equipment',
      'Professional Tour Manager & Content Creator'
    ],
    exclusions: [
      'Quad bike rentals in Cold Desert',
      'Personal shopping & extras',
      'Lunch meals'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Chilas', description: 'Depart from Islamabad via Hazara Motorway and KKH.', activities: ['Departure 11 PM', 'Babusar Top photo break'], overnight: 'Hotel in Chilas' },
      { day: 2, title: 'Chilas to Skardu Valley', description: 'Drive along Indus river gorge to reach Skardu city.', activities: ['Alam Bridge stop', 'Arrival in Skardu'], overnight: 'Hotel in Skardu' },
      { day: 3, title: 'Shangrila Lake & Upper Kachura Lake', description: 'Visit famous heart-shaped lake & tranquil Upper Kachura Lake.', activities: ['Boating', 'Short hike to Upper Kachura'], overnight: 'Hotel in Skardu' },
      { day: 4, title: 'Deosai National Park & Sheosar Lake Safari', description: 'Full day jeep safari across land of giants (2nd highest plateau in the world).', activities: ['Bara Pani bridge crossing', 'Sheosar Lake view', 'Wild bear spotting'], overnight: 'Hotel in Skardu' },
      { day: 5, title: 'Shigar Valley & Katpana Cold Desert', description: 'Explore historic Shigar Fort and sunset at high-altitude sand dunes.', activities: ['Shigar Fort tour', 'Katpana desert quad biking'], overnight: 'Hotel in Skardu' },
      { day: 6, title: 'Manthoka Waterfall & Khaplu Fort', description: 'Visit spectacular cascading waterfall and royal Khaplu palace.', activities: ['Manthoka photography', 'Khaplu village walk'], overnight: 'Hotel in Skardu' },
      { day: 7, title: 'Return to Islamabad', description: 'Scenic drive back through KKH reaching Islamabad by midnight.', activities: ['Souvenir buying', 'Dropoff at Islamabad'], overnight: 'Home' }
    ]
  },
  {
    id: 'swat-kalam-malam-jabba-retreat',
    title: '3-Day Swat, Kalam & Malam Jabba Weekend Retreat',
    subtitle: 'Green pine forests, roaring Swat river, Malam Jabba chairlift & Mahodand Lake',
    destination: 'Swat & Kalam Valley',
    region: 'swat',
    category: 'weekend',
    durationDays: 3,
    durationNights: 2,
    pricePKR: 16500,
    discountPricePKR: 13999,
    featured: true,
    rating: 4.8,
    reviewsCount: 230,
    nextDeparture: 'Every Friday Night',
    pickupCities: ['Islamabad', 'Lahore', 'Peshawar'],
    image: '/images/destinations/swat_malamjabba.jpg',
    gallery: [
      '/images/destinations/swat_malamjabba.jpg',
      '/images/destinations/swat_kalam.jpg',
      '/images/safarnama/safarnama_5.jpg'
    ],
    highlights: [
      'Ski Resort & Chairlift ride at Malam Jabba',
      '4x4 Jeep trip to Mahodand Lake & Ushu Forest',
      'Riverside dining in Kalam with local trout fish',
      'Fizaghat park & Mingora bazaar shopping'
    ],
    inclusions: [
      'Luxury Coaster / Grand Cabin Transport',
      '2 Nights Riverside Hotel Stay in Kalam',
      'Daily Breakfasts & Dinners',
      'Live Bonfire & Music Night in Kalam',
      'Tour Lead & Basic First Aid'
    ],
    exclusions: [
      'Mahodand Lake Jeep fare',
      'Malam Jabba Chairlift & Zipline tickets'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Kalam Valley', description: 'Drive through Swat Motorway, visit Fizaghat and reach Kalam.', activities: ['Swat Expressway drive', 'Kalam arrival'], overnight: 'Hotel stay in Kalam' },
      { day: 2, title: 'Ushu Forest & Mahodand Lake Jeep Safari', description: 'Jeep ride through dense pine forest of Ushu and Mahodand Lake.', activities: ['Ushu Forest trek', 'Mahodand boating', 'Kalam Bonfire Night'], overnight: 'Hotel stay in Kalam' },
      { day: 3, title: 'Malam Jabba Ski Resort & Return', description: 'Visit Malam Jabba for chairlift and zipline, then return back.', activities: ['Chairlift ride', 'Zipline', 'Return to Islamabad'], overnight: 'Home' }
    ]
  },
  {
    id: 'neelum-valley-arang-kel-escape',
    title: '4-Day Neelum Valley & Arang Kel Kashmir Escape',
    subtitle: 'The Pearl of Azad Kashmir: Kutton Jagran, Keran LOC view & hilltop paradise Arang Kel',
    destination: 'Neelum Valley, Kashmir',
    region: 'kashmir',
    category: 'family',
    durationDays: 4,
    durationNights: 3,
    pricePKR: 21000,
    discountPricePKR: 18500,
    featured: false,
    rating: 4.9,
    reviewsCount: 115,
    nextDeparture: 'Every Thursday Night',
    pickupCities: ['Islamabad', 'Lahore', 'Rawalpindi'],
    image: '/images/destinations/kashmir_arangkel.jpg',
    gallery: [
      '/images/destinations/kashmir_arangkel.jpg',
      '/images/safarnama/safarnama_6.jpg'
    ],
    highlights: [
      'Cable car ride & trek to magical hilltop village Arang Kel',
      'Historical 5000-year-old Sharda Peeth University Ruins',
      'Dhani Waterfall & Kutton Jagran Waterfall view',
      'Border view of Line of Control (LOC) at Keran'
    ],
    inclusions: [
      'Coaster/Grand Cabin Transport from Islamabad',
      '3 Nights Resort Accommodation',
      'Daily Breakfasts & Dinners',
      'Kashmiri Cultural BBQ & Musical Evening'
    ],
    exclusions: [
      'Dolly / Cable car tickets to Arang Kel',
      'Personal expenses & lunches'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Keran via Muzaffarabad', description: 'Cross Kohala bridge, stop at Dhani waterfall and reach Keran along Neelum River.', activities: ['Dhani Waterfall stop', 'LOC Viewpoint'], overnight: 'Resort stay in Keran' },
      { day: 2, title: 'Sharda Ruins & Kel Village', description: 'Travel deeper into Neelum Valley to Sharda ancient ruins and onwards to Kel.', activities: ['Sharda Peeth tour', 'Kel valley walk'], overnight: 'Hotel stay in Kel / Sharda' },
      { day: 3, title: 'Arang Kel Cable Car Trek & Meadow Exploration', description: 'Ride the chairlift and hike up to the green paradise of Arang Kel.', activities: ['Arang Kel cable car', 'Photography in lush meadows', 'Barbecue night'], overnight: 'Hotel stay in Keran' },
      { day: 4, title: 'Kutton Waterfall & Return', description: 'Visit Kutton Jagran resort and waterfall before driving back to Islamabad.', activities: ['Kutton Waterfall', 'Return to Islamabad'], overnight: 'Home' }
    ]
  },
  {
    id: 'fairy-meadows-nanga-parbat-trek',
    title: '5-Day Fairy Meadows & Nanga Parbat Basecamp Trek',
    subtitle: 'Unleash the adventure: Thrill jeep track to Tatto & trek to Killer Mountain (8,126m)',
    destination: 'Fairy Meadows & Nanga Parbat',
    region: 'fairy-meadows',
    category: 'adventure',
    durationDays: 5,
    durationNights: 4,
    pricePKR: 32000,
    discountPricePKR: 28999,
    featured: true,
    rating: 5.0,
    reviewsCount: 87,
    nextDeparture: 'Every Thursday Night',
    pickupCities: ['Islamabad', 'Lahore'],
    image: '/images/destinations/fairy_meadows.jpg',
    gallery: [
      '/images/destinations/fairy_meadows.jpg',
      '/images/safarnama/safarnama_7.jpg'
    ],
    highlights: [
      'World famous thrill jeep track from Raikot Bridge to Tatto village',
      'Trek through alpine forest to Fairy Meadows cottages',
      'Day hike to Beyal Camp & Nanga Parbat Viewpoint (Raiphi Glacier)',
      'Camping under starry night skies next to killer mountain'
    ],
    inclusions: [
      'Transport Islamabad to Raikot Bridge',
      '4x4 Thrill Jeeps Raikot to Tatto (Round Trip)',
      'Wooden Cottage / Glamping Tent Accommodation',
      'All Meals during camping',
      'Experienced High-Altitude Mountain Guide'
    ],
    exclusions: [
      'Pony / Horse ride charges for hiking',
      'Personal sleeping bags if extra requested'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Chilas / Raikot', description: 'Overnight drive via KKH to Raikot Bridge.', activities: ['Night departure', 'KKH scenic drive'], overnight: 'Hotel near Raikot' },
      { day: 2, title: 'Jeep Safari & Hike to Fairy Meadows', description: 'Ride the world-renowned narrow jeep track and trek 3 hours up to Fairy Meadows.', activities: ['Tatto Jeep Safari', 'Alpine Forest Hike'], overnight: 'Wooden Cottages in Fairy Meadows' },
      { day: 3, title: 'Day Trek to Beyal Camp & Nanga Parbat Viewpoint', description: 'Walk towards Nanga Parbat (8,126m) base camp along giant glaciers.', activities: ['Beyal Camp trek', 'View of Raikhot Glacier', 'Bonfire under stars'], overnight: 'Fairy Meadows Cottages' },
      { day: 4, title: 'Trek Down to Tatto & Raikot', description: 'Hike down to Tatto village and jeep ride back to highway.', activities: ['Trek down', 'Jeep ride back to Raikot'], overnight: 'Hotel in Chilas / Naran' },
      { day: 5, title: 'Return to Islamabad', description: 'Drive back to Islamabad arriving late night.', activities: ['Breakfast', 'Return dropoff'], overnight: 'Home' }
    ]
  },
  {
    id: 'naran-kaghan-saiful-malook-tour',
    title: '3-Day Naran, Kaghan & Saif-ul-Malook Lake Tour',
    subtitle: 'Fairy tale lake views, Babusar Top elevation (13,700 ft) & Lulusar Lake safari',
    destination: 'Naran Kaghan Valley',
    region: 'naran',
    category: 'weekend',
    durationDays: 3,
    durationNights: 2,
    pricePKR: 15500,
    discountPricePKR: 12999,
    featured: false,
    rating: 4.7,
    reviewsCount: 310,
    nextDeparture: 'Every Friday Night',
    pickupCities: ['Islamabad', 'Lahore', 'Rawalpindi'],
    image: '/images/destinations/naran_saifulmalook.jpg',
    gallery: [
      '/images/destinations/naran_saifulmalook.jpg',
      '/images/safarnama/safarnama_8.jpg'
    ],
    highlights: [
      'Jeep excursion to legendary Saif-ul-Malook Lake',
      'Panoramic 360-degree views at Babusar Top (13,700 ft)',
      'Lulusar Lake & Pyala Lake stops',
      'Rafting on Kunhar River in Naran'
    ],
    inclusions: [
      'AC Transport from Islamabad/Lahore',
      '2 Nights Family Hotel Stay in Main Naran Bazaar',
      'Breakfast & Dinners',
      'Driver expenses & tolls'
    ],
    exclusions: [
      'Saif-ul-Malook Jeep tickets',
      'Kunhar River Rafting tickets'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Naran via Balakot', description: 'Drive through Hazara Motorway, Kewai waterfall stop and arrival in Naran.', activities: ['Kewai Waterfall cup of tea', 'Naran arrival'], overnight: 'Hotel stay in Naran' },
      { day: 2, title: 'Saif-ul-Malook Lake & Babusar Top Excursion', description: 'Jeep ride to legendary lake in morning, followed by drive to high altitude Babusar Pass.', activities: ['Saif-ul-Malook boating', 'Lulusar Lake view', 'Babusar Top photo session'], overnight: 'Hotel stay in Naran' },
      { day: 3, title: 'River Rafting & Return to Islamabad', description: 'Enjoy river rafting on icy Kunhar river and return back to Islamabad.', activities: ['River rafting', 'Balakot shopping', 'Return to Islamabad'], overnight: 'Home' }
    ]
  },
  {
    id: 'kumrat-valley-katora-lake-adventure',
    title: '6-Day Kumrat Valley & Katora Lake Wilderness Expedition',
    subtitle: 'Camp beside the rushing Panjkora River & trek to crystal turquoise Katora Bowl Lake',
    destination: 'Kumrat Valley, Upper Dir',
    region: 'kumrat',
    category: 'adventure',
    durationDays: 6,
    durationNights: 5,
    pricePKR: 29500,
    discountPricePKR: 25999,
    featured: false,
    rating: 4.8,
    reviewsCount: 76,
    nextDeparture: 'Every Wednesday Night',
    pickupCities: ['Islamabad', 'Lahore', 'Peshawar'],
    image: '/images/destinations/kumrat_katora.jpg',
    gallery: [
      '/images/destinations/kumrat_katora.jpg',
      '/images/safarnama/safarnama_9.jpg'
    ],
    highlights: [
      'Dense Deodar tree forest walk in Kumrat',
      'Kumrat Waterfall & Kala Chashma (Black Water Spring)',
      'Challenging trek to turquoise Katora Alpine Lake (11,500 ft)',
      'Riverside Glamping tents under star-studded skies'
    ],
    inclusions: [
      'Transport + 4x4 Jeeps for Kumrat Valley',
      'Camping & Hotel stay combination',
      'Daily Meals',
      'Trekking guide & campfire setup'
    ],
    exclusions: [
      'Pony rides during Katora trek',
      'Personal snacks'
    ],
    itinerary: [
      { day: 1, title: 'Islamabad to Thal Village', description: 'Drive via Lowari Tunnel route to Thal village in Upper Dir.', activities: ['Lowari tunnel crossing', 'Thal wooden mosque visit'], overnight: 'Hotel in Thal' },
      { day: 2, title: 'Jeep into Kumrat Valley Forest', description: 'Jeep ride into dense pine forest, set up camp by Panjkora river.', activities: ['Kumrat Waterfall', 'Forest exploration'], overnight: 'Riverside Glamping in Kumrat' },
      { day: 3, title: 'Kala Chashma & Jahaz Banda Trek Base', description: 'Visit black water spring and trek up to Jahaz Banda high meadows.', activities: ['Kala Chashma jeep tour', 'Trek to Jahaz Banda'], overnight: 'Cottages at Jahaz Banda' },
      { day: 4, title: 'Day Trek to Katora Bowl Lake', description: 'Trek to the breathtaking high-altitude Katora lake surrounded by snow caps.', activities: ['Katora Lake trek', 'Photography & picnic'], overnight: 'Jahaz Banda' },
      { day: 5, title: 'Trek Down & Return to Thal', description: 'Descend back to Thal village for rest.', activities: ['Descent trek', 'Local trout fish dinner'], overnight: 'Hotel in Thal' },
      { day: 6, title: 'Return to Islamabad', description: 'Drive back to Islamabad via Swat Motorway.', activities: ['Return drive', 'Arrival midnight'], overnight: 'Home' }
    ]
  }
];
