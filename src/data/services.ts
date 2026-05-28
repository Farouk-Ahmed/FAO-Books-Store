import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cyber-sandbox',
    title: 'Live Code Sandboxes',
    description: 'Every chapter ships with a live code sandbox. Run the exercises in the browser — no setup, no node_modules graveyard.',
    iconName: 'Play',
    badge: 'Playgrounds',
    metrics: '50+ runnable sandboxes per book'
  },
  {
    id: 'universal-access',
    title: 'Download Any Format You Want',
    description: 'EPUB, PDF, Jupyter notebooks, or audio. Read offline, no DRM. Once you buy it, it is yours.',
    iconName: 'Download',
    badge: 'DRM-Free',
    metrics: '4 formats + lifetime updates'
  },
  {
    id: 'author-connect',
    title: 'Talk to the Author',
    description: 'Stuck on a chapter? Every purchase opens monthly Q&A sessions, and occasionally a pull request review straight from the author.',
    iconName: 'Users',
    badge: '1-on-1 Support',
    metrics: 'Monthly live Q&A with authors'
  },
  {
    id: 'team-portals',
    title: 'Team and Company Portals',
    description: 'Onboard the whole engineering org at once. Bulk licenses, role-based access, and a curated reading path for each team.',
    iconName: 'Building',
    badge: 'For Teams',
    metrics: 'From 5 to 5000+ seats'
  },
  {
    id: 'community-hubs',
    title: 'Private Channel Per Book',
    description: 'A private channel for each book. Share code, ask for reviews, see who is hiring, and talk to the author when something does not click.',
    iconName: 'MessageSquare',
    badge: 'Private Forums',
    metrics: '12,000+ active members'
  },
  {
    id: 'premium-transit',
    title: 'Print Editions, Shipped Worldwide',
    description: 'Prefer paper? Heavy stock, sturdy binding, and a holographic sticker on the back. Shipped in a box that does not get crushed in transit.',
    iconName: 'Truck',
    badge: 'Global Shipping',
    metrics: 'Average 3-day international transit'
  }
];
