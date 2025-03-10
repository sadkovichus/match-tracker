import { MatchesResponseType } from '@shared/types'
import axios from 'axios'

export const fetchMatches = async (): Promise<MatchesResponseType> => {
	const res = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/fronttemp')
	return res.data
}