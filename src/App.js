import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <Header {... { theme, changeTheme }} />
    </div>
  );
}

export default App;
