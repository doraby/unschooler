import React from 'react';
import { NavLink } from "react-router-dom";

function MainCourse() {
  return (
    <section className="course-and-books">
      <div className="course-and-books__content">
        <h2>
          <NavLink className="icon icon_course-and-books" to="/courses">
            <span className="visually-hidden">Курсы и книги</span>
          </NavLink>
        </h2>
        <p className="subtitle course-and-books__subtitle">Пройди курсы и&nbsp;прочитай книги по&nbsp;направлению
          <b>самостоятельно</b>
        </p>
        <span className="course-and-books__arrows"></span>
        <p className="thought thought_5">Ай, лень. Что&nbsp;там&nbsp;на&nbsp;Netfix?</p>
        <p className="thought thought_6">Своя компания. Здравствуй свобода, прощай 8-ми часовой рабочий день.</p>
      </div>
    </section>
  );
}

export default MainCourse;