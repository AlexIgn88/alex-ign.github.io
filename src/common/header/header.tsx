import React from 'react';
import Logo from '../logo/logo';
import s from './header.module.scss';
import ThemeToggle from '../../common/theme-toggle/theme-toggle';
import LanguageToggle from '../../common/language-toggle/language-toggle';
import Navbar from 'src/common/navbar/navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <Logo />
      </div>
      <Navbar />
      <div className={s.right}>
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
