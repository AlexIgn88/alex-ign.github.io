import React from 'react';
import { useTheme } from '../../app/theming/useTheme';
import { useTranslation } from 'react-i18next';
import s from './theme-toggle.module.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button className={s.button} onClick={toggleTheme}>
      {isDark ? '🌞' : '🌙'}&ensp;
      <span>{isDark ? t('theme.light') : t('theme.dark')}</span>
    </button>
  );
};

export default ThemeToggle;
