import React, {ChangeEvent} from 'react'
import {Modal} from 'react-bootstrap'
import modal from '../store/modal'
import styled from 'styled-components'
import Button from './Controls/Button'
import store, {CurrentLocation} from '../store/store'
import {ITheme} from '../const/theme'

const CenteredBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	background-color: ${({theme}: {theme: ITheme}) => theme.templateBody};
	color: ${({theme}: {theme: ITheme}) => theme.mainText};
	padding: 10px;
	border-radius: 4px;
`

const ChooseLocation = styled.select`
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

const StartModal = () => {

	const handleChangeLocation = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value as CurrentLocation
		store.changeLocation(value)
	}

	return (
		<Modal
			show={modal.show}
			onHide={modal.handleClose}
			backdrop='static'
			keyboard={false}
			centered
		>
			<CenteredBody>
				<Modal.Title>Приготовься печатать. Поехали!</Modal.Title>
				<ChooseLocation onChange={handleChangeLocation}>
					<option>Ru</option>
					<option>En</option>
				</ChooseLocation>
				<Button>Начать</Button>
			</CenteredBody>
		</Modal>
	)
}

export default StartModal