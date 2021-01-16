import React from 'react';
import { NavLink } from "react-router-dom";

function MainProposal() {
  return (
    <section className="proposal">
      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Партнёрам</h3>
            <p className="proposal__text">У&nbsp;тебя есть идея проекта, но&nbsp;нет инвестиций. Опиши его подробно и&nbsp;стань партнером. Мы&nbsp;реализуем
            его вместе с&nbsp;тобой для тренировки.</p>
        </div>
        <div className="proposal__button">
          <NavLink className="button button_medium" to="/">Заявка партнёра</NavLink>
        </div>
      </div>

      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Менторам</h3>
            <p className="proposal__text">Ты&nbsp;уже профи и&nbsp;время от&nbsp;времени подумываешь сделать свой
                        стартап, собрать команду с&nbsp;нуля или найти помощника. Подай заявку
                        на&nbsp;менторство и&nbsp;собирай свою команду.</p>
        </div>
        <div className="proposal__button">
          <NavLink className="button button_medium" to="/">Заявка ментора</NavLink>
        </div>
      </div>

      <div className="proposal__content">
        <div>
          <h3 className="proposal__title">Рекрутёрам</h3>
          <p className="proposal__text">Ищешь специалиста в&nbsp;штат? 
            <NavLink className="proposal__link" to="/">Наши ребята все с&nbsp;опытом и&nbsp;реальными проектами в&nbsp;портфолио.</NavLink>
             Опиши специалиста и&nbsp;мы&nbsp;прокачаем его в&nbsp;необоходимых скиллах.
          </p>
        </div>
        <div className="proposal__button">
          <NavLink className="button button_medium" to="/">Заявка рекрутера</NavLink>
        </div>
      </div>
    </section>
  );
}

export default MainProposal;