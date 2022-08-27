import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import modal from '../../store/modal'

const ButtonTemplate = styled.button`
	align-items: center;
	appearance: none;
	background-color: #F9A620;
	border-radius: 4px;
	border-width: 0;
	box-shadow: rgba(129, 81, 10, 0.4) 0 2px 4px,
	rgba(129, 81, 10, 0.3) 0 7px 13px -3px;
	box-sizing: border-box;
	color: #1B1D36;
	cursor: pointer;
	display: inline-flex;
	height: 48px;
	justify-content: center;
	line-height: 1;
	list-style: none;
	overflow: hidden;
	padding-left: 16px;
	padding-right: 16px;
	position: relative;
	text-align: left;
	text-decoration: none;
	transition: box-shadow .15s, transform .15s;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	white-space: nowrap;
	will-change: box-shadow, transform;
	font-size: 18px;

	&:focus {
		outline: none;
		box-shadow: #66440d 0 0 0 1.5px inset,
			rgba(129, 81, 10, 0.4) 0 2px 4px,
			rgba(129, 81, 10, 0.3) 0 7px 13px -3px;
	}

	&:hover {
		box-shadow: rgba(129, 81, 10, 0.4) 0 4px 8px,
		rgba(129, 81, 10, 0.3) 0 7px 13px -3px;
		transform: translateY(-2px);
	}

	&:active {
		box-shadow: #66440d 0 3px 7px inset;
		transform: translateY(2px);
	}
`

const Button = (props: any) => {

	const handleClick = () => {
		store.generateText()
		if (modal.show) modal.handleClose()
	}

	return (
		<ButtonTemplate onClick={handleClick} {...props} />
	)
}

export default Button