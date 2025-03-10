import { MatchType } from '../match/index.type'

export type MatchesResponseType = {
	data: { matches: MatchType[] }
	ok: boolean
}