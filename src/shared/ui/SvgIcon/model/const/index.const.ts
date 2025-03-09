import { StaticImageData } from 'next/image'
import LogoImg from '@../public/icons/logo.svg'
import UpdateImg from '@../public/icons/update.svg'
import TeamImg from '@../public/icons/team-avatar.svg'
import UpdatingImg from '@../public/icons/updating.svg'
import ErrorImg from '@../public/icons/error.svg'
import ChevronUp from '@../public/icons/chevron-up.svg'
import PlayerAvatar from '@../public/icons/avatar_global.svg'

export const icons = {
	logo: LogoImg as StaticImageData,
	update: UpdateImg as StaticImageData,
	updating: UpdatingImg as StaticImageData,
	teamAvatar: TeamImg as StaticImageData,
	error: ErrorImg as StaticImageData,
	chevronUp: ChevronUp as StaticImageData,
	playerAvatar: PlayerAvatar as StaticImageData,
	// Add more icons as needed
	//...
} as const