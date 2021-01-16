import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../img/header-logo.svg';

function HeaderLogo() {
  return (
    <div className="header-logo">
      <NavLink to="/">
        <img className="logo__image" src={logo} alt="логотип"/>
      </NavLink>
    </div>
  );
}

export default HeaderLogo;