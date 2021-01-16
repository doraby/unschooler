import React from 'react';
import { NavLink } from "react-router-dom";

function MainWork() {
  return (
    <section className="work">
      <div className="work__content">
        <h2>
          <NavLink className="icon icon_work" to="/test">
            <span className="visually-hidden">Работа</span>
          </NavLink>
        </h2>
        <p className="subtitle work__subtitle">Попади <b>на&nbsp;доску кандидатов</b> с&nbsp;портфолио проектов</p>
        <span className="work__arrows"></span>
      </div>
    </section>
  );
}

export default MainWork;