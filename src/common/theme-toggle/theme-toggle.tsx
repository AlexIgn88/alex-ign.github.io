import React from 'react';
import { useTheme } from '../../app/theming/useTheme';
import s from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={s.button} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Switch to Dark Mode' : '🌞  Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
