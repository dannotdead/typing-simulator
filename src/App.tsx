import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import Simulator from './components/Simulator'
import store from './store/store'
import Theme from './components/Theme'
import theme from './store/theme'
import {ITheme} from './const/theme'
import ProgressBar from './components/ProgressBar'
import CustomModal from './components/Modal/CustomModal'
import ChooseLocation from './components/Modal/ChooseLocation'
import ResultValue from './components/Modal/ResultValue'

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	background-color: ${({theme}: {theme: ITheme}) => theme.mainBackground};
	padding: 0 20px;
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
				<CustomModal
					children={<ChooseLocation />}
					title='Приготовься печатать. Поехали!'
					buttonText='Начать'
				/>

				{store.isCapsLock && <CapsLockBlock>Включен Caps Lock</CapsLockBlock>}

				<Simulator />

				<ProgressBar />

				{store.progress === 100 &&
					<CustomModal
						children={<ResultValue />}
						title='Так держать! Вот твой результат:'
						buttonText='Заново'
					/>
				}

				<ChangeThemeButton onClick={() => theme.changeTheme()}>
					{theme.themeValueString}
				</ChangeThemeButton>
			</StyledApp>
		</Theme>
	);
})

export default App;
