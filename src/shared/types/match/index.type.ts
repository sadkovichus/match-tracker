export type Player = {
	username: string
	kills: number
}

export type Team = {
	name: string
	players: Player[]
	points: number
	place: number
	total_kills: number 
}

export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished'

export type MatchType = {
	time: string 
	title: string
	homeTeam: Team
	awayTeam: Team
	homeScore: number
	awayScore: number
	status: MatchStatus
}