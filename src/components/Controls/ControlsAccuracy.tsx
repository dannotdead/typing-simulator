import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'

const AccuracyTemplate = styled.div`
	color: #99D6EA;
`

const AccuracyValue = styled.div`
	color: #F9A620;
`

const ControlsAccuracy = observer(() => {
	return (
		<AccuracyTemplate>
			<div>Точность</div>
			<AccuracyValue>
				{store.typingAccuracyString}
			</AccuracyValue>
		</AccuracyTemplate>
	)
})

export default ControlsAccuracy