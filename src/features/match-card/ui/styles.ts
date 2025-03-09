import { theme } from '@shared/const'
import { MatchStatus } from '@shared/types/match/index.type'
import { SvgIcon } from '@shared/ui'
import styled from 'styled-components'

const CardStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background: ${theme.colors.cardBackground};
`

const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
	cursor: pointer;
  padding: 10px 30px;
`
const TeamInfoStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  font-size: 14px;
`

const ScoreStyle = styled.div`
  display: flex;
  gap: 5px;
`

const StatusStyle = styled.div<{ status: MatchStatus }>`
  background-color: ${({ status }) => theme.statusColors[status]};
  padding: 6px;
  border-radius: 5px;
  width: 90px;

  font-size: 12px;
  text-align: center;
`

const LiveInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

type ChevrobProps = {
  isActive: boolean
}

const ChevronUpStyle = styled(SvgIcon)<ChevrobProps>`
  transition-duration: .2s;
  rotate: ${({ isActive }) => (isActive ? '180deg' : '0deg')};
`

export { HeadingStyle, CardStyle, TeamInfoStyle, ScoreStyle, StatusStyle, LiveInfoStyle, ChevronUpStyle }