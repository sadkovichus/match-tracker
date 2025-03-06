import { ChildrenProps } from '@shared/types';

export const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <html>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  );
};
