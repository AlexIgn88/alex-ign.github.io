import React, { FC } from 'react';
import logo from 'src/app/logo.svg';
import { useTranslation } from 'react-i18next';

const HomeScreen: FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      <img src={logo} className="App-logo" alt="logo" />
      <div style={{ padding: '30px', lineHeight: '1.8', fontSize: '16px' }}>
        <p>{t('screens.home.intro')}</p>
      </div>
    </main>
  );
};

export default HomeScreen;
