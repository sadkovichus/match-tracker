'use client';

import { getMatchesServerSideProps } from '@entities/matches';
import { MatchCard } from '@features/match-card';
import { fetchMatches } from '@shared/api';
import { MATCH_KEY } from '@shared/const';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { ListStyle } from './styles';
import { Loader } from '@widgets/loader';

export const MatchList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [MATCH_KEY],
    queryFn: fetchMatches,
  });

  if (isLoading) return <Loader />;
  if (isError || data === undefined) return <p>Error</p>;
  const list = data['data']['matches'];

  return (
    <ListStyle>
      {list.map((item, index) => (
        <MatchCard key={index.toString()} match={item} />
      ))}
    </ListStyle>
  );
};

export const getServerSideProps: GetServerSideProps = getMatchesServerSideProps;
