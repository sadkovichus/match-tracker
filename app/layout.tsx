import { App } from '@app/';
import { Metadata } from 'next';

const URL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Match Tracker',
  description: 'See match results in our match tracker',
  icons: {
    icon: '/favicon.ico', 
    apple: '/favicon.ico', 
    shortcut: '/favicon.png', 
  },
  openGraph: {
    url: URL,
    siteName: 'Match Tracker',
    images: [
      {
        url: `${URL}/og-img.png`,
        width: 1630,
        height: 1630,
        alt: 'Logo',
      },
    ],
    type: 'website',
  },
};

export default App;
