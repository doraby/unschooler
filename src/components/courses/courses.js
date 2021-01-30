import React from 'react';
import CoursesIntro from './coursesIntro';
import CoursesList from './coursesList';
import CoursesOutro from './coursesOutro';


const Courses = (props) => {

  return (
    <main>
      <div>
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