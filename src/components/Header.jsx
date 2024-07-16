import React from 'react';
import harryTitle from '../images/harryGold.png';

function Header({ characters }) {
  return (
    <header className="header">
      <img className="header__title" src={harryTitle} alt="title" />
    </header>
  );
}

export default Header;
