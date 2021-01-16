import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <section className="sidebar">
      <NavLink className="logo__text logo__text_transform" to="/">unschooler&nbsp;IT</NavLink>
      <ul className="social">
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
    </section>
  );
}

export default Sidebar;