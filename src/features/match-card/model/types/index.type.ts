import { MatchType, Team } from '@shared/types'

export type MatchCardProps = {
	match: MatchType
}

export type StatisticValueType = Omit<Team, 'name'>
export type StatisticType = Record<'home' | 'away', StatisticValueType>
