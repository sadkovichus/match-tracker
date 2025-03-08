import { theme } from '@shared/const';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { UpdateBtnProps } from '../model/index.type';

const ButtonStyled = styled.button`
  background-color: ${theme.colors.buttonBackground};
  color: ${theme.colors.buttonColor};
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 9px 30px;
  border-radius: 4px;

  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.buttonBackgroundHover};
  }
`;

export const UpdateBtn = forwardRef<HTMLButtonElement, UpdateBtnProps>(({ children }, ref) => {
  return <ButtonStyled ref={ref}>{children}</ButtonStyled>;
});

UpdateBtn.displayName = 'UpdateBtn';
