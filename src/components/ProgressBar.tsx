import React from 'react'
import store from '../store/store'
import styled from 'styled-components'
import {ITheme} from '../const/theme'

const ProgressInstance = styled.progress`
	width: 100%;
	max-width: 790px;
	padding: 0 10px;
	height: 5px;
	border-radius: 0 0 16px 16px;

	&::-webkit-progress-bar {
		background-color: transparent;
		border-radius: 0 0 16px 16px;
	}

	&::-webkit-progress-value {
		background-color: ${({theme}: {theme: ITheme}) => theme.secondary};
		border-radius: 0 0 16px 16px;
	}

	&::-moz-progress-bar {
		background-color: ${({theme}: {theme: ITheme}) => theme.secondary};
		border-radius: 0 0 16px 16px;
	}
`

const ProgressBar = () => {
	return (
		<>
			<ProgressInstance value={store.progress} max='100'/>
		</>
	)
}

export default ProgressBar