import React, {ReactNode, useState} from 'react'
import {Modal} from 'react-bootstrap'
import Button from '../Controls/Button'
import styled from 'styled-components'
import {ITheme} from '../../const/theme'

interface ICustomModal {
	children: ReactNode
	title: string
	buttonText: string
}

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

const CustomModal = ({children, title, buttonText}: ICustomModal) => {
	const [show, setShow] = useState(true)

	const handleClick = () => {
		setShow(false)
	}

	return (
		<Modal
			show={show}
			backdrop='static'
			keyboard={false}
			centered
		>
			<CenteredBody>
				<Modal.Title>{title}</Modal.Title>
					{children}
				<Button onClick={handleClick}>{buttonText}</Button>
			</CenteredBody>
		</Modal>
	)
}

export default CustomModal