import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import modal from '../../store/modal'

const ButtonTemplate = styled.button``

const StartButton = () => {
	return (
		<ButtonTemplate
			onClick={() => {
				store.generateText()
				modal.handleClose()
			}}
		>
			Начать
		</ButtonTemplate>
	)
}

export default StartButton