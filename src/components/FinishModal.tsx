import React from 'react'
import modal from '../store/modal'
import {Modal} from 'react-bootstrap'
import Button from './Controls/Button'
import styled from 'styled-components'
import store from '../store/store'

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

const ResultValue = styled.span`
	color: #F9A620;
`

const FinishModal = () => {
	return (
		<Modal
			show={true}
			onHide={modal.handleClose}
			backdrop='static'
			keyboard={false}
			centered
		>
			<CenteredBody>
				<Modal.Title>Так держать! Вот твой результат:</Modal.Title>
				<div>Скорость: <ResultValue>{store.typingSpeedString}</ResultValue></div>
				<div>Точность: <ResultValue>{store.typingAccuracyString}</ResultValue></div>
				<Button>Заново</Button>
			</CenteredBody>
		</Modal>
	)
}

export default FinishModal