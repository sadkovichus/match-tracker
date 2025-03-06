'use client';

import { ChildrenProps } from '@shared/types';
import { Header } from '@widgets/header'
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};
