import React, {useState} from 'react';
import {ThemeContext} from '../context/theme';

import darkTheme from '../constants/dark';
import lightTheme from '../constants/light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleThemeDark = () => {
    if (theme.type === 'dark') {
      setTheme(lightTheme);
    }
  };
  const toggleThemeLight = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleThemeLight,
        toggleThemeDark,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
