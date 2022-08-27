import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import {observer} from 'mobx-react-lite'

const SpeedTemplate = styled.div`
	color: #99D6EA;
`

const SpeedValue = styled.div`
	color: #F9A620;
	cursor: pointer;

	&:hover {
		text-shadow: 0 0 10px #F9A620;
		transition: all 0.1s ease-in;
	}
	
	&:active {
		transform: scale(1.05);
	}
`

const ControlsSpeed = observer(() => {
	return (
		<SpeedTemplate>
			<div>Скорость</div>
			<SpeedValue onClick={() => store.changeTypingSpeedUnits()}>
				{store.typingSpeedString}
			</SpeedValue>
		</SpeedTemplate>
	)
})

export default ControlsSpeed