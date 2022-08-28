import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import store from '../../store/store'
import {ITheme} from '../../const/theme'

const AccuracyTemplate = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.mainText};
`

const AccuracyValue = styled.div`
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
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