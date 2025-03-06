'use client';

import { ChildrenProps } from '@shared/types';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <Layout>
      <header>HEader</header>
      {children}
      <footer>FOoter</footer>
    </Layout>
  );
};
