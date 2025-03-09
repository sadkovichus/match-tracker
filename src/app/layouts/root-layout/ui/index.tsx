import { ChildrenProps } from '@shared/types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
      <html className={inter.className}>
        <body>{children}</body>
      </html>
  );
};
