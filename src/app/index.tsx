import { ChildrenProps } from '@shared/types';
import { RootLayout } from './layouts';
import { Providers } from './providers';

export const App = ({ children }: ChildrenProps) => {
  return (
    <Providers>
      <RootLayout>{children}</RootLayout>
    </Providers>
  );
};
