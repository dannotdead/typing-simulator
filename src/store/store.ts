import {runInAction, makeAutoObservable} from 'mobx'

type Response = {
	status: string
	text: string
}

class Store {
	text: string[] = []
	currentChar: string = ''
	currentCharIndex: number = 0
	enteredText: string = ''
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
					this.enteredText = ''
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

	enterText(key: string) {
		this.enteredText = this.enteredText + key
	}

	inputWrongChar() {
		this.typingError = true
	}

	inputCorrectChar() {
		this.text[this.currentCharIndex].fontcolor('green')
	}
}

export default new Store()