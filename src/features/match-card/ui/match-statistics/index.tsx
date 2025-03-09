import { MatchType } from '@shared/types';
import { StatContainerStyle } from './styles';
import { MatchStatBlock } from '../metch-stat-block'
import { statisticUtil } from '@features/match-card/model'

type MatchStatisticsProps = {
  isShowMoreStat: boolean;
  match: MatchType;
};

export const MatchStatistics = ({ isShowMoreStat, match }: MatchStatisticsProps) => {
  if (!isShowMoreStat) return null;

  return (
    <StatContainerStyle>
      <MatchStatBlock statistic={statisticUtil('home', match)}/>
      <MatchStatBlock statistic={statisticUtil('away', match)}/>
    </StatContainerStyle>
  );
};
