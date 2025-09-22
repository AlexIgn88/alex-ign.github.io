import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Меня зовут Алексей. Работаю frontend-разработчиком, пишу на React, в качестве стейт-менеджера использую Redux
          Toolkit. Знаком с Next.js. В рамках этого курса хочется углубить знания и отточить навыки написания
          веб-приложений на React. Также хочется освоить вебсокеты и валидацию форм специальными библиотеками, такими
          как formik и react-hook-form.
        </p>
      </header>
    </div>
  );
}

export default App;
