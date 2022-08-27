import React from 'react'
import styled from 'styled-components'
import ControlsSpeed from './ControlsSpeed'
import ControlsAccuracy from './ControlsAccuracy'
import Button from './Button'

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
			<Button>Заново</Button>
		</ControlsTemplate>
	)
}

export default Controls