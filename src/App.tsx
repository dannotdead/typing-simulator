import React from 'react'
import styled from 'styled-components'
import Simulator from './components/Simulator'

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: lightgray;
	padding: 0 20px;
`

const App = () => {
	return (
		<StyledApp>
			<Simulator />
		</StyledApp>
	);
}

export default App;
