import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'

const ButtonTemplate = styled.button``

const StartButton = () => {
	return (
		<ButtonTemplate onClick={() => store.generateText()}>
			Начать
		</ButtonTemplate>
	)
}

export default StartButton