import {makeAutoObservable} from 'mobx'

class Modal {
	show: boolean = true

	constructor() {
		makeAutoObservable(this)
	}

	handleClose = () => {
		this.show = false
	}

}

export default new Modal()