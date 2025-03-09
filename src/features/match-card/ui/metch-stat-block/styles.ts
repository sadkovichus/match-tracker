import { theme } from '@shared/const'
import styled from 'styled-components'

const StatContentStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	flex-direction: row;
	width: 100%;
	
	.stat-block {
		flex: 1 1 calc(100% / 3 - 10px);
		padding: 8px 10px;
		border-radius: 4px;
		white-space: nowrap;
		background-color: ${theme.colors.statBlockColor};
		display: flex;
		align-items: center;
	}

	.player-name {
		margin-left: 5px;

		font-size: 13px;
	}

	.kills {
		margin-left: auto;
		
		font-size: 14px;
		
	}
	.secondary {
		margin-right: 5px;

		color: ${theme.colors.secondaryColor};
		font-size: 12px;
	}
	
`

const StaticsRowStyle = styled.div`
	justify-content: space-around;
`

export { StatContentStyle, StaticsRowStyle }