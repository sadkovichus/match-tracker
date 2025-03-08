'use client';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { ContainerProps } from '../model/index.type';

const StyledContainer = styled.div<ContainerProps>`
  max-width: ${({ maxWidth }) => maxWidth || '1300px'};
  width: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: 0 10px;
`;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth, direction, className }, ref) => {
    return (
      <StyledContainer ref={ref} maxWidth={maxWidth} direction={direction} className={className}>
        {children}
      </StyledContainer>
    );
  }
);

Container.displayName = 'Container';
