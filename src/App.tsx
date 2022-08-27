import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import Simulator from './components/Simulator'
import StartModal from './components/Modal'
import modal from './store/modal'

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: lightgray;
	padding: 0 20px;
`

const App = observer(() => {
	return (
		<StyledApp>
			{modal.show && <StartModal />}
			<Simulator />
		</StyledApp>
	);
})

export default App;
