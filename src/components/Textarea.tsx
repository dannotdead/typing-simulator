import React, {useEffect} from 'react'
import styled from 'styled-components'
import store from '../store/store'
import {observer} from 'mobx-react-lite'

const TextareaTemplate = styled.div`
	position: relative;
	width: 75%;
	padding-right: 10px;
`

const EnteredTextarea = styled.span`
	color: green;
`

const CurrentChar = styled.span<{typingError: boolean}>`
	color: white;
	border: 1px solid ${props => props.typingError ? 'red' : 'green'};
	border-radius: 4px;
	background-color: ${props => props.typingError ? 'red' : 'green'};
`

const Textarea = observer(() => {

	useEffect(() => {
		document.addEventListener('keypress', onKeypress)

		return () => {
			document.removeEventListener('keypress', onKeypress)
		}
	}, [])

	const onKeypress = (event: KeyboardEvent) => {
		console.log(store.typingError)
		if (store.currentChar === event.key) {
			store.incrementCharIndex()
			store.changeCurrentChar()
			store.enterText(event.key)
		} else {
			store.inputWrongChar()
		}
	}

	return (
		<TextareaTemplate>
			{/*<EnteredTextarea>*/}
			{/*	{store.enteredText}*/}
			{/*	<CurrentChar store={store}>{store.currentChar}</CurrentChar>*/}
			{/*</EnteredTextarea>*/}
			{store.text.map((symbol, index) => {
				if (index === store.currentCharIndex) {
					return <CurrentChar key={`${symbol}${index}`} typingError={store.typingError}>{symbol}</CurrentChar>
				}

				if (index < store.currentCharIndex) {
					return <EnteredTextarea key={`${symbol}${index}`}>{symbol}</EnteredTextarea>
				}

				return <span key={`${symbol}${index}`}>{symbol}</span>
			})}
		</TextareaTemplate>
	)
})

export default Textarea