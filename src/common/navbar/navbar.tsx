import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';

const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        {t('navbar.main')}
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        {t('navbar.profile')}
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
      >
        {t('navbar.products')}
      </NavLink>
      <NavLink
        to="/operations"
        className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
      >
        {t('navbar.operations')}
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
        {t('navbar.cart')}
      </NavLink>
    </nav>
  );
};

export default Navbar;
