import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '../const/theme';

type ThemeType = 'light' | 'dark';

class Theme {
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);

    const localStorageTheme = localStorage.getItem('theme') as ThemeType;

    if (localStorageTheme) {
      this.theme = localStorageTheme;
    } else {
      localStorage.setItem('theme', this.theme);
    }
  }

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
  }

  get themeValueString() {
    return `${this.theme === 'light' ? '🌙' : '🌞'}`;
  }

  get themeCurrentObject() {
    return this.theme === 'light' ? lightTheme : darkTheme;
  }
}

export default new Theme();
