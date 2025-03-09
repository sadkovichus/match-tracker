'use client';

import GlobalStyles from '@app/styles';
import { theme } from '@shared/const';
import { ChildrenProps } from '@shared/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import StyledComponentSSRProvider from './registry-provider';

const queryClient = new QueryClient();

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentSSRProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentSSRProvider>
    </QueryClientProvider>
  );
};
