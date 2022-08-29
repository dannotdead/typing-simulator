import React from 'react'
import styled from 'styled-components'
import store from '../../store/store'
import {ITheme} from '../../const/theme'

const ButtonTemplate = styled.button`
	align-items: center;
	appearance: none;
	background-color: ${({theme}: {theme: ITheme}) => theme.secondary};
	border-radius: 4px;
	border-width: 0;
	box-shadow: ${({theme}: {theme: ITheme}) => theme.button.boxShadowSecond} 0 2px 4px,
		${({theme}: {theme: ITheme}) => theme.button.boxShadowThird} 0 7px 13px -3px;
	box-sizing: border-box;
	color: ${({theme}: {theme: ITheme}) => theme.templateBody};
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
		box-shadow: ${({theme}: {theme: ITheme}) => theme.button.boxShadow} 0 0 0 1.5px inset,
    	${({theme}: {theme: ITheme}) => theme.button.boxShadowSecond} 0 2px 4px,
    	${({theme}: {theme: ITheme}) => theme.button.boxShadowThird} 0 7px 13px -3px;
	}

	&:hover {
		box-shadow: ${({theme}: {theme: ITheme}) => theme.button.boxShadowSecond} 0 4px 8px,
    	${({theme}: {theme: ITheme}) => theme.button.boxShadowThird} 0 7px 13px -3px;
		transform: translateY(-2px);
	}

	&:active {
		box-shadow: ${({theme}: {theme: ITheme}) => theme.button.boxShadow} 0 3px 7px inset;
		transform: translateY(2px);
	}
`

const Button = (props: any) => {
	const handleMouseDown = (event: React.MouseEvent) => {
		event.preventDefault()
		store.generateText()
	}

	return (
		<ButtonTemplate {...props} onMouseDown={(event) => handleMouseDown(event)}/>
	)
}

export default Button