export interface ITheme {
	mainBackground: string
	mainText: string
	enteredText: string
	secondary: string
	templateBody: string
	black: string
	templateBoxShadowLighten: string
	templateBoxShadowDarken: string
	gray: string
	button: {
		boxShadow: string
		boxShadowSecond: string
		boxShadowThird: string
	}
}

export const lightTheme: ITheme = {
	mainBackground: '#F5F5FA',
	mainText: '#3454D1',
	enteredText: '#87A330',
	secondary: '#F9A620',
	templateBody: '#f5f5fa',
	black: '#000',
	templateBoxShadowLighten: '#fff',
	templateBoxShadowDarken: '#1d0dca17',
	gray: '#555',
	button: {
		boxShadow: '#66440d',
		boxShadowSecond: 'rgba(129, 81, 10, 0.4)',
		boxShadowThird: 'rgba(129, 81, 10, 0.3)'
	}
}

export const darkTheme: ITheme = {
	mainBackground: '#101120',
	mainText: '#99D6EA',
	enteredText: '#FCA6D1',
	secondary: '#F9A620',
	templateBody: '#1B1D36',
	black: '#000',
	templateBoxShadowLighten: '#212340',
	templateBoxShadowDarken: '#07070d',
	gray: '#555',
	button: {
		boxShadow: '#66440d',
		boxShadowSecond: 'rgba(129, 81, 10, 0.4)',
		boxShadowThird: 'rgba(129, 81, 10, 0.3)'
	}
}