import React from 'react';
import { NavLink } from "react-router-dom";
import CoursesIntro from './coursesIntro';
import CoursesList from './coursesList';
import CoursesOutro from './coursesOutro';
import StrelkaRight from './../../img/strelka-right.svg';
import Strelkaleft from './../../img/strelka.svg'


const Courses = (props) => {

  return (
    <main>
      <div>
      <NavLink className='profession_strelka-left' to="/profession"><img  src={Strelkaleft} alt=""/></NavLink>
      <NavLink className='profession_strelka' to="/projects"><img  src={StrelkaRight} alt=""/></NavLink>
        <CoursesIntro />
        <CoursesList
          professionSelected={props.professionSelected}
          CoursesCardData={props.CoursesCardData}
          chengeCheckCoursesCardData={props.chengeCheckCoursesCardData}
        />
        <CoursesOutro />
      </div>
    </main>
  );
}

export default Courses;