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
	uncorrectedErrors: number = 0
	typingSpeed: number = 0
	typingAccuracy: number = 0
	typingTime: number = 0
	startTypingFlag: boolean = false
	interval: any

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
					this.typingSpeed = 0
					this.typingTime = 0
					this.uncorrectedErrors = 0
					this.typingError = false
					this.startTypingFlag = false
					this.typingAccuracy = 0
					clearInterval(this.interval)
				})
			})
			.catch(err => console.error(err))
	}

	incrementCharIndex() {
		this.currentCharIndex += 1
	}

	changeCurrentChar() {
		if (!this.startTypingFlag) {
			this.startTypingFlag = true
			this.interval = setInterval(() => {
				this.countTypingTime()
				this.countTypingSpeed()
				this.countTypingAccuracy()
			}, 1000)
		}

		if (this.text.length === this.currentCharIndex) {
			clearInterval(this.interval)
		} else {
			this.currentChar = this.text[this.currentCharIndex]
		}
	}

	inputWrongChar() {
		this.typingError = true
		this.uncorrectedErrors += 1
	}

	inputCorrectChar() {
		this.typingError = false
	}

	countTypingTime() {
		this.typingTime += 1
	}

	countTypingSpeed() {
		this.typingSpeed = Math.round(((this.currentCharIndex / 5) - this.uncorrectedErrors) / (this.typingTime / 60))
	}

	countTypingAccuracy() {
		this.typingAccuracy = Math.floor((100 - (this.uncorrectedErrors / this.text.length) * 100) * 100) / 100
	}
}

export default new Store()