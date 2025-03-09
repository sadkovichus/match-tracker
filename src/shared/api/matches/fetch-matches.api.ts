import { MatchType } from '@shared/types'
import axios from 'axios'

export const fetchMatches = async (): Promise<{data: {matches: MatchType[]}, ok: boolean}> => {
	const res = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/fronttemp')
	return res.data
}