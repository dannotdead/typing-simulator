import React from 'react'
import {Modal} from 'react-bootstrap'
import modal from '../store/modal'
import styled from 'styled-components'
import Button from './Controls/Button'

const CenteredBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
	background-color: #1B1D36;
	color: #99D6EA;
	padding: 10px;
	border-radius: 4px;
`

const StartModal = () => {
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
				<Button>Начать</Button>
			</CenteredBody>
		</Modal>
	)
}

export default StartModal