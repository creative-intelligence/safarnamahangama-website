export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tourTaken: string;
  reviewText: string;
  verified: boolean;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Hamza & Ayesha',
    location: 'Lahore',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'August 2026',
    tourTaken: '5-Day Hunza & Nagar Valley Expedition',
    reviewText: 'Safarnama Hangama made our honeymoon tour to Hunza absolutely magical! From luxury coaster seats to amazing hotels in Karimabad and the best photography guide. Special thanks to the team for organizing our anniversary surprise at Attabad Lake!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Dr. Zeeshan Malik',
    location: 'Islamabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'July 2026',
    tourTaken: '7-Day Skardu & Deosai Plains Safari',
    reviewText: 'We booked a customized corporate tour for our company team of 24 people. Every detail—from 4x4 Prado jeeps for Deosai to BBQ musical night at Katpana Desert—was flawlessly executed. Safarnama is 100% recommended for family & corporate trips!',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Fatima Noor',
    location: 'Karachi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'September 2026',
    tourTaken: '3-Day Swat & Kalam Weekend Retreat',
    reviewText: 'As solo female travelers joining a group tour, safety and comfort were our top priority. The Safarnama team managed everything so professionally. Felt totally safe, made wonderful friends, and Kalam was stunning!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Usman Chaudhry',
    location: 'Rawalpindi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'June 2026',
    tourTaken: '5-Day Fairy Meadows & Nanga Parbat Trek',
    reviewText: 'The trek to Fairy Meadows with Safarnama Hangama was the adventure of a lifetime! Great group vibe, high-altitude guides who took care of everyone, and unforgettable campfires under the Milky Way!',
    verified: true
  }
];
