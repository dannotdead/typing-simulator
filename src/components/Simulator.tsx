import React from 'react'
import styled from 'styled-components'
import Textarea from './Textarea'
import Controls from './Controls/Controls'

const SimulatorTemplate = styled.div`
	display: flex;
	background-color: white;
	padding: 30px;
	width: 800px;
	height: 400px;
	border-radius: 16px;
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