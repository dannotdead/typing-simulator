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
	background-color: #F5F5FA;
	padding: 10px;
	border-radius: 16px;
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