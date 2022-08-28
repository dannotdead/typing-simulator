import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import Simulator from './components/Simulator'
import StartModal from './components/StartModal'
import modal from './store/modal'
import store from './store/store'
import FinishModal from './components/FinishModal'

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	background-color: #101120;
	padding: 0 20px;
`

const ProgressInstance = styled.progress`
	width: 100%;
	max-width: 790px;
	padding: 0 10px;
	height: 5px;
	border-radius: 0 0 16px 16px;

	&::-webkit-progress-bar {
		background-color: transparent;
		border-radius: 0 0 16px 16px;
	}

	&::-webkit-progress-value {
		background-color: #F9A620;
		border-radius: 0 0 16px 16px;
	}

	&::-moz-progress-bar {
		background-color: #F9A620;
		border-radius: 0 0 16px 16px;
	}
`

const CapsLockBlock = styled.div`
  color: #F9A620;
	margin-bottom: 15px;
`

const App = observer(() => {
	return (
		<StyledApp>
			{modal.show && <StartModal />}
			{store.isCapsLock && <CapsLockBlock>Включен Caps Lock</CapsLockBlock>}
			<Simulator />
			<ProgressInstance value={store.progress} max='100'/>
			{store.progress === 100 && <FinishModal />}
		</StyledApp>
	);
})

export default App;
