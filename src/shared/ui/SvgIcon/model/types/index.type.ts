import { icons } from './../const/index.const'

export type SvgIconProps = {
	name: keyof typeof icons
	width?: number
	height?: number
	size?: number
	className?: string
}