import React from 'react'
import styled from 'styled-components'
import ControlsSpeed from './ControlsSpeed'
import ControlsAccuracy from './ControlsAccuracy'
import RestartButton from './RestartButton'
import StartButton from './StartButton'

const ControlsTemplate = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	gap: 25px;
`

const Controls = () => {
	return (
		<ControlsTemplate>
			<ControlsSpeed />
			<ControlsAccuracy />
			<RestartButton />
			<StartButton />
		</ControlsTemplate>
	)
}

export default Controls