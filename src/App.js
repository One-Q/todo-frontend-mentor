import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function changeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <div className={`app ${theme}`}>
      <div className="banner" />
      <div className="container">
        <Header {...{ theme, changeTheme }} />
      </div>
    </div>
  );
}

export default App;
