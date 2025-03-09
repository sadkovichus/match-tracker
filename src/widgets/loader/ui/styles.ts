'use client'

import { SvgIcon } from '@shared/ui'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
`

const LoaderAnimation = styled(SvgIcon)`
	animation: ${spin} 1s linear infinite;
`

const LoaderContainerStyle = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`

export { LoaderContainerStyle, LoaderAnimation }