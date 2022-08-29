import React from 'react'
import store from '../../store/store'
import styled from 'styled-components'
import {ITheme} from '../../const/theme'

const ResultValueTemplate = styled.span`
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
`

const ResultValue = () => {
	return (
		<>
			<div>
				Скорость: <ResultValueTemplate>{store.typingSpeedString}</ResultValueTemplate>
			</div>
			<div>
				Точность: <ResultValueTemplate>{store.typingAccuracyString}</ResultValueTemplate>
			</div>
		</>
	)
}

export default ResultValue