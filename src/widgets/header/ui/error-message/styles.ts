import { theme } from '@shared/const'
import styled from 'styled-components'

export const ErrorStyle = styled.div`
	padding: 14px 24px;
	${theme.blocks.borderRadius};
	background-color: ${theme.colors.errorBackground};
	display: flex;
	align-items: center;
	gap: 10px;
`