import { ChildrenProps } from '@shared/types';
import { Header } from '@widgets/header'
import { Layout } from './styles'

export const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};
