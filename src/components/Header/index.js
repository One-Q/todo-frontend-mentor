import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';

const Header = ({ theme, changeTheme }) => (
  <div className={`${styles.background} ${styles[theme]}`}>
    <div className="container">
      <button type="button" onClick={changeTheme}>Set theme</button>
      <h1 className={styles.title}>test</h1>
    </div>
  </div>
);

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
