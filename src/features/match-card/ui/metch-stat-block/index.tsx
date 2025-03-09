import { SvgIcon } from '@shared/ui'
import { StatContentStyle, StaticsRowStyle } from './styles';
import { StatisticValueType } from '@features/match-card/model'

export const MatchStatBlock = ({statistic}: {statistic: StatisticValueType}) => {
  const { players, points, place, total_kills } = statistic

  return (
    <StatContentStyle>
      {players.map(player => (
        <div key={player.username} className={'stat-block'}>
          <SvgIcon name='playerAvatar' />
          <p className='player-name'>{player.username}</p>
          <p className='kills'>
            <span className='secondary'>Убийств:</span>
            {player.kills}
          </p>
        </div>
      ))}
      <StaticsRowStyle className={'stat-block'}>
        <p className='points'>
          <span className='secondary'>Points:</span>
          {points}
        </p>
        <p className='place'>
          <span className='secondary'>Место:</span>
          {place}
        </p>
        <p className='points'>
          <span className='secondary'>Всего убийств:</span>
          {total_kills}
        </p>
      </StaticsRowStyle>
    </StatContentStyle>
  );
};
