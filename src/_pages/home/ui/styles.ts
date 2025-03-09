'use client'

import { Container } from '@shared/ui/container'
import styled from 'styled-components'

export const ContainerStyle = styled(Container)`
	flex: 1;
	overflow-y: auto;
	 &::-webkit-scrollbar {
    display: none
  }
`