import React from 'react'
import modal from '../store/modal'
import {Modal} from 'react-bootstrap'
import Button from './Controls/Button'
import styled from 'styled-components'
import store from '../store/store'
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

const ResultValue = styled.span`
	color: ${({theme}: {theme: ITheme}) => theme.secondary};
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