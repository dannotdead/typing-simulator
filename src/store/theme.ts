import {makeAutoObservable} from 'mobx'

type ThemeType = 'light' | 'dark'

class Theme {
	theme: ThemeType = 'dark'

	constructor() {
		makeAutoObservable(this)

		const localStorageTheme = localStorage.getItem('theme') as ThemeType

		if (localStorageTheme) {
			this.theme = localStorageTheme
		} else {
			localStorage.setItem('theme', this.theme)
		}
	}

	changeTheme() {
		this.theme = this.theme === 'light' ? 'dark' : 'light'
		localStorage.setItem('theme', this.theme)
	}

	get themeValueString() {
		return `${this.theme === 'light' ? '🌙' : '🌞'}`
	}
}

export default new Theme()