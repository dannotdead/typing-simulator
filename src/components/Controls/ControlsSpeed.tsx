import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import {observer} from 'mobx-react-lite'

const SpeedTemplate = styled.div``

const ControlsSpeed = observer(() => {
	return (
		<SpeedTemplate>
			<div>Скорость</div>
			<div>
				{store.typingSpeed > 0 ? store.typingSpeed : 0} слов/мин
			</div>
		</SpeedTemplate>
	)
})

export default ControlsSpeed