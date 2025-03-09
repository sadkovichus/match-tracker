import { theme } from '@shared/const'
import { Container } from '@shared/ui/container'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  padding: 53px 0 30px 0;
`

const ContentStyle = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`

const ContainerStyle = styled(Container)`
  align-items: center;
`

const ErrorStyle = styled.div`
	padding: 14px 24px;
	${theme.blocks.borderRadius};
	background-color: ${theme.colors.errorBackground};
	display: flex;
	align-items: center;
	gap: 10px;
`

export { HeaderStyle, ContentStyle, ContainerStyle, ErrorStyle }