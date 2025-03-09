'use client';

import { SvgIcon } from '@shared/ui';
import { MatchCardProps } from '../model';
import {
  CardStyle,
  ChevronUpStyle,
  HeadingStyle,
  LiveInfoStyle,
  ScoreStyle,
  StatusStyle,
  TeamInfoStyle,
} from './styles';
import { useState } from 'react';
import { MatchStatistics } from './match-statistics';

export const MatchCard = ({ match }: MatchCardProps) => {
  const [isShowMoreStat, setIsShowMoreStat] = useState(false);

  return (
    <CardStyle>
      <HeadingStyle onClick={() => setIsShowMoreStat(prev => !prev)}>
        <TeamInfoStyle>
          <SvgIcon size={35} name='teamAvatar' />
          <p>{match.awayTeam.name}</p>
        </TeamInfoStyle>
        <LiveInfoStyle>
          <ScoreStyle>
            <span>{match.awayScore}</span>:<span>{match.homeScore}</span>
          </ScoreStyle>
          <StatusStyle status={match.status}>{match.status}</StatusStyle>
        </LiveInfoStyle>
        <TeamInfoStyle>
          <p>{match.homeTeam.name}</p>
          <SvgIcon size={35} name='teamAvatar' />
          <ChevronUpStyle isActive={isShowMoreStat} name='chevronUp' width={13} />
        </TeamInfoStyle>
      </HeadingStyle>
      <MatchStatistics match={match} isShowMoreStat={isShowMoreStat} />
    </CardStyle>
  );
};
