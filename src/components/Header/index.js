import React from 'react';
import PropTypes from 'prop-types';

import moonIcon from '../../images/icon-moon.svg';
import sunIcon from '../../images/icon-sun.svg';

import styles from './Header.module.css';

const Header = ({ theme, changeTheme }) => (
  <div className={styles.titleContainer}>
    <h1>TODO</h1>
    <button type="button" onClick={changeTheme}>
      <img alt="change theme icon" src={theme === 'light' ? moonIcon : sunIcon} />
    </button>
  </div>
);

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
