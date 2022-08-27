import React from 'react'
import {Modal} from 'react-bootstrap'
import modal from '../store/modal'
import StartButton from './Controls/StartButton'
import styled from 'styled-components'

const CenteredBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
`

const StartModal = () => {
	return (
		<>
			<Modal
				show={modal.show}
				onHide={modal.handleClose}
				backdrop='static'
				keyboard={false}
				centered
			>
				<Modal.Body>
					<CenteredBody>
						<Modal.Title>Приготовься печатать. Поехали!</Modal.Title>
						<StartButton />
					</CenteredBody>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default StartModal