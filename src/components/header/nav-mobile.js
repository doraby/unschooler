import React from 'react';
import { NavLink, Link } from "react-router-dom";
import classNames from 'classnames';

const NavMobile = ({Show, onShowNav}) => {
    return (
    <nav className={classNames('nav-mobile', {'show': Show})}>
      <ul className="site-nav-mobile">
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/profession" onClick={onShowNav}>профессия</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/courses" onClick={onShowNav}>курсы</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/projects" onClick={onShowNav}>проекты</NavLink></li>
        <li className="site-nav__item"><NavLink className="site-nav__link" to="/test" onClick={onShowNav}>работа</NavLink></li>
      </ul>
      <ul className="user-nav-mobile">
        <li className="user-nav__item"><NavLink className="user-nav__link" to="/">Войти</NavLink></li>
      </ul>
      <ul className="social-mobile">
        <li className="social__button">
          <Link className="icon icon_youtube" to="/">
            <span className="visually-hidden">Youtube</span>
          </Link>
        </li>
        <li className="social__button">
          <Link className="icon icon_twitter" to="/">
            <span className="visually-hidden">Twitter</span>
          </Link>
        </li>
        <li className="social__button">
          <Link className="icon icon_facebook" to="/">
            <span className="visually-hidden">Facebook</span>
          </Link>
        </li>
      </ul>
      <button className="close-button" onClick={onShowNav}><span className="visually-hidden">Закрыть</span></button>
    </nav>
  );
}

export default NavMobile;