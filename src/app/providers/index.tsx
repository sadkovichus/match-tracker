'use client'

import GlobalStyles from '@app/styles';
import { theme } from '@shared/const';
import { ChildrenProps } from '@shared/types';
import { ThemeProvider } from 'styled-components';

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
