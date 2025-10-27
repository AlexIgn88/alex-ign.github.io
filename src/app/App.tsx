import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../common/header/header';
import { ThemeProvider } from '../app/theming/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ padding: '30px' }}>
          Меня зовут Алексей.
          <br />
          Работаю frontend-разработчиком, пишу на React,
          <br />в качестве стейт-менеджера использую Redux Toolkit. Знаком с Next.js.
          <br />В рамках этого курса хочется углубить знания
          <br />и отточить навыки написания веб-приложений на React.
          <br />
          Также хочется освоить вебсокеты и валидацию форм специальными библиотеками, такими как formik и
          react-hook-form.
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
