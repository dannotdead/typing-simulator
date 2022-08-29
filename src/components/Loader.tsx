import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'
import {ITheme} from '../const/theme'

const SpinnerTemplate = styled.div`
	position: relative;
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
	width: 50px;
	left: 50%;
	top: 45%;
`

const Loader = () => {
	return (
		<SpinnerTemplate>
			<Spinner animation='border' />
		</SpinnerTemplate>
	)
}

export default Loader