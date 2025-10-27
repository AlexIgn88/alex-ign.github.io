import React from 'react';
import Logo from '../logo/logo';
import ThemeToggle from '../../common/theme-toggle/theme-toggle';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
        <span>Market</span>
      </div>
      <div className={s.controls}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
