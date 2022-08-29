import React, {ChangeEvent} from 'react'
import styled from 'styled-components'
import {ITheme} from '../../const/theme'
import store, {CurrentLocation} from '../../store/store'

const ChooseLocationTemplate = styled.select`
	cursor: pointer;
	color: ${({theme}: {theme: ITheme}) => theme.enteredText};
	outline: none;
	border: none;
	background-color: transparent;
	padding: 0 10px;
	
	&:hover {
		text-shadow: 0 0 5px ${({theme}: {theme: ITheme}) => theme.enteredText};
		transition: all 0.1s ease-in;
	}
	
	option {
		color: ${({theme}: {theme: ITheme}) => theme.black};
	}
`

const ChooseLocation = () => {
	const handleChangeLocation = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value as CurrentLocation
		store.changeLocation(value)
	}

	return (
		<ChooseLocationTemplate onChange={handleChangeLocation}>
			<option>Ru</option>
			<option>En</option>
		</ChooseLocationTemplate>
	)
}

export default ChooseLocation