import React from 'react'
import styled from 'styled-components'
import Textarea from './Textarea'
import Controls from './Controls/Controls'
import {ITheme} from '../const/theme'

const SimulatorTemplate = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: ${({theme}: {theme: ITheme}) => theme.templateBody};
	padding: 30px;
	width: 100%;
	max-width: 800px;
	border-radius: 16px;
	box-shadow: -2px -2px 10px 5px ${({theme}: {theme: ITheme}) => theme.templateBoxShadowLighten},
		2px 2px 15px 10px ${({theme}: {theme: ITheme}) => theme.templateBoxShadowDarken};
`

const Simulator = () => {
	return (
		<SimulatorTemplate>
			<Textarea />
			<Controls />
		</SimulatorTemplate>
	)
}

export default Simulator