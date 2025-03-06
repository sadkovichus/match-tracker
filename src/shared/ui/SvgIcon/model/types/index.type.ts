import { JSX } from 'react'

export type SvgIconProps = {
	name: string
	width?: string | number
	height?: string | number
	className?: string
}

export type SvgIconType = Record<string, ({ }: Omit<SvgIconProps, 'name'>) => JSX.Element>