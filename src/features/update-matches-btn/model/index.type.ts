import { ChildrenProps } from '@shared/types'

export type UpdateBtnProps = ChildrenProps<{
	onClick?: () => void;
	className?: string;
}>;