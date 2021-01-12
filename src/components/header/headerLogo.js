import React from 'react';
import logo from '../../img/header-logo.svg';

function HeaderLogo() {
  return (
    <div className="header-logo">
      <a href="/">
        <img className="logo__image" src={logo} alt="логотип"/>
      </a>
    </div>
  );
}

export default HeaderLogo;