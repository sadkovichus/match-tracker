import { ReactNode } from "react"

export type ChildrenProps<T extends object = object> = T & {
		children: ReactNode
}