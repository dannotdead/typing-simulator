import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import {observer} from 'mobx-react-lite'
import {ITheme} from '../../const/theme'

const SpeedTemplate = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.mainText};
`

const SpeedValue = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
	cursor: pointer;

	&:hover {
		text-shadow: 0 0 10px ${({theme}: {theme: ITheme}) => theme.secondary};
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