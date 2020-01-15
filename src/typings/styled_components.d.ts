import { theme as StyledTheme } from 'styles/theme'

declare module 'styled-components' {
	interface DefaultTheme extends StyledTheme {}
}
