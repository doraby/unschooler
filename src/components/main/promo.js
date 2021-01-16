import React from 'react';
import { NavLink } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1>
          <span className="visually-hidden">Бесплатные курсы</span>IT
          <span className="big-logo"></span>
        </h1>
        <p className="promo__text">Мы&nbsp;помогаем людям без подготовки 
          <b className="highlight highlight_red">
            <span className="ico ico_triangle"></span>выбрать профессию в&nbsp;IT,
          </b>
          <b className="highlight highlight_blue">
            <span className="ico ico_square-blue"></span>подобрать бесплатные курсы,
          </b> создать с&nbsp;помощью менторов 
          <b className="highlight highlight_orange">
            <span className="ico ico_ellipse"></span>проекты для портфолио
          </b> и&nbsp;найти первую 
          <b className="highlight highlight_yellow">
            <span className="ico ico_square-yellow"></span>работу
          </b>.
        </p>
      </div>
      <div className="promo__button">
        <NavLink className="button button_large" to="/">Начни с выбора профессии</NavLink>
      </div>
    </section>
  );
}

export default Promo;