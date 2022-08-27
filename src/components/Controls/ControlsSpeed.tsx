import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import {observer} from 'mobx-react-lite'

const SpeedTemplate = styled.div`
	color: #99D6EA;
`

const SpeedValue = styled.div`
	color: #F9A620;
`

const ControlsSpeed = observer(() => {
	return (
		<SpeedTemplate>
			<div>Скорость</div>
			<SpeedValue>
				{store.typingSpeed > 0 ? store.typingSpeed : 0} слов/мин
			</SpeedValue>
		</SpeedTemplate>
	)
})

export default ControlsSpeed