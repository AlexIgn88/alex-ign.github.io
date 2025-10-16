import React from 'react';
import Logo from '../logo/logo';
import s from './header.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
    </div>
  );
};

export default Header;
