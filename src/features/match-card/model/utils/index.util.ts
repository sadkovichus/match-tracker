import { MatchType } from '@shared/types'
import { StatisticType } from '../types/index.type'

export const statisticUtil = (key: keyof StatisticType, match: MatchType) => {
	const statistic: StatisticType = {
		home: {
			players: match.homeTeam.players,
			points: match.homeTeam.points,
			place: match.homeTeam.place,
			total_kills: match.homeTeam.total_kills,
		},
		away: {
			players: match.awayTeam.players,
			points: match.awayTeam.points,
			place: match.awayTeam.place,
			total_kills: match.awayTeam.total_kills,
		},
	}

	return statistic[key]
}