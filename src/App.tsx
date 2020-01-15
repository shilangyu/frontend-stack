import React from 'react'
import Router from 'Router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

const GlobalStyles = createGlobalStyle`
	body, #root {
		height: calc(100 * var(--visible-height, 1vh));
	}
`

const App = () => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyles />
			<Router />
		</>
	</ThemeProvider>
)

export default App
