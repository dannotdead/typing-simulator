import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const AccuracyTemplate = styled.div``

const ControlsAccuracy = observer(() => {
	return (
		<AccuracyTemplate>
			<div>Точность</div>
			<div>{store.typingAccuracy} %</div>
		</AccuracyTemplate>
	)
})

export default ControlsAccuracy