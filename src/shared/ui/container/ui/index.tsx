'use client';

import { ChildrenProps } from '@shared/types';
import styled from 'styled-components';

type ContainerProps = {
  align?: 'center' | 'left' | 'right';
  direction?: 'vertical' | 'horizontal';
};

const StyledContainer = styled.div<ContainerProps>`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
	flex: 1;
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
`;

export const Container = ({ children }: ChildrenProps<ContainerProps>) => {
  return (
    <StyledContainer>
      {children} 
    </StyledContainer>
  );
};
