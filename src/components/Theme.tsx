import React, {ReactNode} from 'react'
import { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme} from '../const/theme'

const Theme = ({ children, theme }: {children: ReactNode, theme: string}) => {
	return (
		<ThemeProvider
			theme={theme === 'light' ? lightTheme : darkTheme}
		>
			{children}
		</ThemeProvider>
	)
}

export default Theme