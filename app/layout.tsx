import { App } from '@app/';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Match Tracker',
  description: 'See match results in our match tracker',
  icons: {
    icon: '/favicon.ico', // Путь к вашей иконке
    apple: '/favicon.ico', // Для устройств Apple
    shortcut: '/favicon.png', // Shortcut иконка
  },
  openGraph: {
    url: 'https://medium-voted-theory-friendship.trycloudflare.com',
    siteName: 'Match Tracker',
    images: [
      {
        url: 'https://medium-voted-theory-friendship.trycloudflare.com/og-img.png', // Абсолютный путь
        width: 1630,
        height: 1630,
        alt: 'Logo',
      },
    ],
    type: 'website',
  },
};

export default App;
