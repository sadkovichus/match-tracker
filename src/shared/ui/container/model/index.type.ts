import { ChildrenProps } from '@shared/types'

export type ContainerProps = ChildrenProps<{
	maxWidth?: string
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	className?: string
}>