import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../../img/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <div className="footer-logo">
          <img className="logo__image" src={logo} alt="логотип"/>
          <p className="logo__text logo__text_light">Unschooler</p>
        </div>
        <Link className="email" to="mailto:unschooler97@gmail.com">unschooler97@gmail.com</Link>
      </div>

      <div className="footer-nav">
        <ul className="nav-list">
          <li><NavLink className="nav-list__link" to="/">Web-designer</NavLink></li>
          <li><NavLink className="nav-list__link" to="/">HTML&CSS Верстальщик</NavLink></li>
          <li><NavLink className="nav-list__link" to="/">Frontend Программист</NavLink></li>
          <li><NavLink className="nav-list__link" to="/">Backend Программист</NavLink></li>
          <li><NavLink className="nav-list__link" to="/">Тестировщик</NavLink></li>
          <li><NavLink className="nav-list__link" to="/">Менеджер проектов</NavLink></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;