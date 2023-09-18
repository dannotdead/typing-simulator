import React from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import ChooseLocation from './components/Modal/ChooseLocation';
import CustomModal from './components/Modal/CustomModal';
import ResultValue from './components/Modal/ResultValue';
import ProgressBar from './components/ProgressBar';
import Simulator from './components/Simulator';
import Theme from './components/Theme';
import { ITheme } from './const/theme';
import store from './store/store';
import theme from './store/theme';

import styles from './app.module.scss';

const CapsLockBlock = styled.div`
  color: ${({ theme }: { theme: ITheme }) => theme.secondary};
  margin-bottom: 15px;
`;

const ChangeThemeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 25px;
  margin: 10px 10px 0 0;
  background: transparent;
  outline: none;
  border: none;
`;

const App = observer(() => {
  return (
    <Theme theme={theme.theme}>
      <main
        className={styles.main}
        style={{
          backgroundColor: `${theme.themeCurrentObject.mainBackground}`,
        }}
      >
        <CustomModal
          children={<ChooseLocation />}
          title='Приготовься печатать. Поехали!'
          buttonText='Начать'
        />

        {store.isCapsLock && <CapsLockBlock>Включен Caps Lock</CapsLockBlock>}

        <Simulator />

        <ProgressBar />

        {store.progress === 100 && (
          <CustomModal
            children={<ResultValue />}
            title='Так держать! Вот твой результат:'
            buttonText='Заново'
          />
        )}

        <ChangeThemeButton onClick={() => theme.changeTheme()}>
          {theme.themeValueString}
        </ChangeThemeButton>
      </main>
    </Theme>
  );
});

export default App;
