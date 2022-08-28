import React from 'react'
import styled from 'styled-components'
import Textarea from './Textarea'
import Controls from './Controls/Controls'

const SimulatorTemplate = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #1B1D36;
	padding: 30px;
	width: 100%;
	max-width: 800px;
	border-radius: 16px;
	box-shadow: -2px -2px 10px 5px #212340, 2px 2px 15px 10px #07070d;
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