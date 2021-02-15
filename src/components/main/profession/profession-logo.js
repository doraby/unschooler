import React from 'react';
import { NavLink } from "react-router-dom";

const ProfessionLogo = ()  => {
  return (
      <div className="profession__content ">
        <h2>
          <NavLink className="icon icon_profession" to="/profession">
            <span className="visually-hidden">Профессия</span>
          </NavLink>
        </h2>
        <p className="subtitle profession__subtitle">Пройди <b>курс профориентации</b> и&nbsp;выбери свою профессию</p>
      </div>
  );
}

export default ProfessionLogo;