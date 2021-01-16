import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="site-nav">
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/profession">профессия</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/courses">курсы</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/projects">проекты</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/test">работа</NavLink></li>
      </ul>
      <ul className="user-nav">
        <li className="user-nav__item"><NavLink className="user-nav__link" to="/">Войти</NavLink></li>
        </ul>
      </nav>
  );
}

export default Nav;