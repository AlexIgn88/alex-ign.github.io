import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../app/theming/theme-provider';
import LanguageProvider from 'src/app/localization/language-provider';
import Layout from 'src/common/layout/layout';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Layout />
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ padding: '30px', lineHeight: '1.8', fontSize: '16px' }}>
            <p>{t('home.intro')}</p>
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
