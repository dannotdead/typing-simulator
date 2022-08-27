import {runInAction, makeAutoObservable} from 'mobx'

type Response = {
	status: string
	text: string
}

class Store {
	text: string[] = []
	currentCharIndex: number = 0
	typingSpeed: number = 0
	typingAccuracy: number = 0
	typingError: boolean = false
	currentChar: string = ''
	private uncorrectedErrors: number = 0
	private typingTime: number = 0
	private startTypingFlag: boolean = false
	private interval: any

	constructor() {
		makeAutoObservable(this)
	}

	// API - Get text
	generateText() {
		fetch('https://fish-text.ru/get?&format=json&number=1')
			.then(res => res.json())
			.then((data: Response) => {
				runInAction(() => this.resetValues(data))
			})
			.catch(err => console.error(err))
	}

	// Character processing
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

	// Speed and accuracy processing
	private countTypingTime() {
		this.typingTime += 1
	}

	private countTypingSpeed() {
		this.typingSpeed = Math.round(((this.currentCharIndex / 5) - this.uncorrectedErrors) / (this.typingTime / 60))
	}

	private countTypingAccuracy() {
		this.typingAccuracy = Math.floor((100 - (this.uncorrectedErrors / this.text.length) * 100) * 100) / 100
	}

	private resetValues = (data: Response) => {
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
	}
}

export default new Store()