import React from 'react';
import { NavLink } from "react-router-dom";
import MainCourse from "./main-course-and-books";
import MainProfession from "./main-profession";
import MainProject from "./main-project";
import MainWork from "./main-work";
import mainImage from '../../img/main-image.svg';

function MainPart() {
  return (
    <div className="main-part">
      <MainProfession />
      <MainCourse />
      <MainProject />
      <MainWork />
      <div className="main-part__button">
        <NavLink className="button button_large" to="/">Ну давай!</NavLink>
      </div>
      <div className="main-image">
        <img src={mainImage} alt="new profession"/>
      </div>
    </div>
  );
}

export default MainPart;