import React from 'react';
import { NavLink } from "react-router-dom";

function MainProject() {
  return (
    <section className="project">
      <div className="project__content">
        <h2>
          <NavLink className="icon icon_project" to="/projects">
            <span className="visually-hidden">Проекты</span>
          </NavLink>
        </h2>
        <p className="subtitle project__subtitle">Тренируйся <b>на&nbsp;проектах</b> и&nbsp;оттачивай знания <b>фидбеком менторов</b></p>
        <span className="project__arrows"></span>
        <p className="thought thought_7">Не для найма мама ягодку растила? Ты – фрилансер. 
          <NavLink className="project__link" to="/projects">Тебе сюда</NavLink>
        </p>
      </div>
    </section>
  );
}

export default MainProject;