import React, {useEffect} from 'react'
import styled from 'styled-components'
import store from '../store/store'
import {observer} from 'mobx-react-lite'

const TextareaTemplate = styled.div`
	position: relative;
	width: 75%;
	padding-right: 10px;
	color: #99D6EA;
`

const EnteredTextarea = styled.span`
	color: #FCA6D1;
`

const CurrentChar = styled.span<{typingError: boolean}>`
	color: #1B1D36;
	border-left: 2px solid ${props => props.typingError ? '#F9A620' : '#99D6EA'};
	background-color: ${props => props.typingError ? '#F9A620' : '#99D6EA'};
`

const Textarea = observer(() => {

	useEffect(() => {
		document.addEventListener('keypress', onKeypress)

		return () => {
			document.removeEventListener('keypress', onKeypress)
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

	return (
		<TextareaTemplate>
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