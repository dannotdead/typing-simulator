import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import Simulator from './components/Simulator'
import StartModal from './components/StartModal'
import modal from './store/modal'
import store from './store/store'
import FinishModal from './components/FinishModal'
import Theme from './components/Theme'
import theme from './store/theme'
import {ITheme} from './const/theme'

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	background-color: ${({theme}: {theme: ITheme}) => theme.mainBackground};
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
		background-color: ${({theme}: {theme: ITheme}) => theme.secondary};
		border-radius: 0 0 16px 16px;
	}

	&::-moz-progress-bar {
		background-color: ${({theme}: {theme: ITheme}) => theme.secondary};
		border-radius: 0 0 16px 16px;
	}
`

const CapsLockBlock = styled.div`
  color: ${({theme}: {theme: ITheme}) => theme.secondary};
	margin-bottom: 15px;
`

const ChangeThemeButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	line-height: 25px;
	margin: 10px 10px 0 0;
  background: transparent;
	outline: none;
	border: none;
`

const App = observer(() => {
	return (
		<Theme theme={theme.theme}>
			<StyledApp>
				{modal.show && <StartModal />}
				{store.isCapsLock && <CapsLockBlock>Включен Caps Lock</CapsLockBlock>}
				<Simulator />
				<ProgressInstance value={store.progress} max='100'/>
				{store.progress === 100 && <FinishModal />}
				<ChangeThemeButton onClick={() => theme.changeTheme()}>{theme.themeValueString}</ChangeThemeButton>
			</StyledApp>
		</Theme>
	);
})

export default App;
