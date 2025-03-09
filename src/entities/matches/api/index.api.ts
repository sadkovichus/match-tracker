import { fetchMatches } from '@shared/api'
import { MATCH_KEY } from '@shared/const'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export const getMatchesServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: [MATCH_KEY],
		queryFn: () => fetchMatches
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}