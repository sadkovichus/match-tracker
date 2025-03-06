// @app/styles/styled-components.config.ts
import { Theme } from '@shared/types'

declare module 'styled-components' {
	export interface DefaultTheme extends Theme { }
}