import React, {useEffect} from 'react'
import styled from 'styled-components'
import store from '../store/store'
import {observer} from 'mobx-react-lite'
import Spinner from 'react-bootstrap/Spinner'
import {ITheme} from '../const/theme'

const TextareaTemplate = styled.div`
	position: relative;
	width: 75%;
	padding-right: 10px;
	color: ${({theme}: {theme: ITheme}) => theme.mainText};
`

const EnteredTextarea = styled.span`
	color: ${({theme}: {theme: ITheme}) => theme.enteredText};
`

const CurrentChar = styled.span<{typingError: boolean}>`
	color: ${({theme}: {theme: ITheme}) => theme.templateBody};
	border-left: 2px solid ${props => props.typingError ? props.theme.secondary : props.theme.mainText};
	background-color: ${props => props.typingError ? props.theme.secondary : props.theme.mainText};
`

const SpinnerTemplate = styled.div`
	position: relative;
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
	width: 50px;
	left: 50%;
	top: 45%;
`

const Textarea = observer(() => {

	useEffect(() => {
		document.addEventListener('keypress', onKeypress)
		document.addEventListener('keydown', onKeyDown)

		return () => {
			document.removeEventListener('keypress', onKeypress)
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [])

	const onKeypress = (event: KeyboardEvent) => {
		if (store.currentChar === event.key) {
			store.incrementCharIndex()
			store.changeCurrentChar()
			store.inputCorrectChar()
		} else if (!store.typingError) {
			store.inputWrongChar()
		}
	}

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.code === 'CapsLock') store.changeCapsLockState()
	}

	return (
		<TextareaTemplate>
			{store.text.length ?
				store.text.map((symbol, index) => {
					if (index === store.currentCharIndex) {
						return <CurrentChar key={`${symbol}${index}`} typingError={store.typingError}>{symbol}</CurrentChar>
					}

					if (index < store.currentCharIndex) {
						return <EnteredTextarea key={`${symbol}${index}`}>{symbol}</EnteredTextarea>
					}

					return <span key={`${symbol}${index}`}>{symbol}</span>
				}) :
				<SpinnerTemplate>
					<Spinner animation='border' />
				</SpinnerTemplate>
			}
		</TextareaTemplate>
	)
})

export default Textarea