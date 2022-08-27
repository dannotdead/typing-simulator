import {runInAction, makeAutoObservable} from 'mobx'

type Response = {
	status: string
	text: string
}

class Store {
	text: string[] = []
	currentChar: string = ''
	currentCharIndex: number = 0
	typingError: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	generateText() {
		fetch('https://fish-text.ru/get?&format=json&number=1')
			.then(res => res.json())
			.then((data: Response) => {
				runInAction(() => {
					this.text = data.text.split('')
					this.currentChar = data.text[0]
					this.currentCharIndex = 0
				})
			})
			.catch(err => console.error(err))
	}

	incrementCharIndex() {
		this.currentCharIndex = this.currentCharIndex + 1
	}

	changeCurrentChar() {
		this.currentChar = this.text[this.currentCharIndex]
	}

	inputWrongChar() {
		this.typingError = true
	}

	inputCorrectChar() {
		this.typingError = false
	}
}

export default new Store()