import {runInAction, makeAutoObservable} from 'mobx'

type Response = {
	status: string
	text: string
}

// 1 - characters per minute (cpm), 5 - words per minute (wpm)
type SpeedUnits = 1 | 5

class Store {
	text: string[] = []
	currentCharIndex: number = 0
	typingError: boolean = false
	currentChar: string = ''
	progress: number = 0
	private typingAccuracy: number = 0
	private typingSpeed: number = 0
	private typingSpeedUnits: SpeedUnits = 1
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
			this.countTypingSpeed()
		} else {
			this.currentChar = this.text[this.currentCharIndex]
		}

		this.progress = this.currentCharIndex / this.text.length * 100
	}

	inputWrongChar() {
		this.typingError = true
		this.uncorrectedErrors += 1
	}

	inputCorrectChar() {
		this.typingError = false
	}

	// Speed and accuracy processing
	changeTypingSpeedUnits() {
		this.typingSpeedUnits = this.typingSpeedUnits === 1 ? 5 : 1
		this.countTypingSpeed()
	}

	private countTypingTime() {
		this.typingTime += 1
	}

	private countTypingSpeed() {
		this.typingSpeed = Math.round(((this.currentCharIndex / this.typingSpeedUnits) - this.uncorrectedErrors) / (this.typingTime / 60))
	}

	private countTypingAccuracy() {
		this.typingAccuracy = 100 - (this.uncorrectedErrors / this.text.length) * 100
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
		this.progress = 0
		clearInterval(this.interval)
	}

	get typingSpeedString() {
		return `${this.typingSpeed > 0 ? this.typingSpeed : 0} ${this.typingSpeedUnits === 1 ? 'зн./мин.' : 'слов/мин.'}`
	}

	get typingAccuracyString() {
		return `${this.typingAccuracy.toFixed(2)} %`
	}
}

export default new Store()