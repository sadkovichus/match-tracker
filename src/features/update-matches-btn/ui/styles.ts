import { theme } from '@shared/const'
import styled from 'styled-components'

const colors = theme.colors

export const ButtonStyle = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 9px 30px;
  border-radius: 4px;
	color: ${colors.buttonColor};
	background-color: ${colors.buttonBackground};
	
  font-weight: 500;
	
  &[data-updating='false'] {
		&:hover {
			background-color: ${colors.buttonBackgroundHover};
		}
  }
	&[data-updating='true'] {
		color: ${colors.buttonColorUpdating};
    background-color: ${colors.buttonBackgroundUpdating};
		cursor: wait;
	}
`