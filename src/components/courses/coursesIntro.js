import React from 'react';
import imgMan1 from './../../img/image-man1.png';
import imgMan2 from './../../img/image-man2.png';
import imgMan3 from './../../img/image-man3.png';
import imgCourse from './../../img/course-and-books.svg';
import imgRect1 from './../../img/Rectangle1.svg';
import imgRect2 from './../../img/Rectangle2.svg';

const CoursesIntro = () => {
  return (
    <main>
      <div className='course_picture'>
        <div>
           <img className="course_picture-man1" src={imgMan1} alt=""/>
           <img className='course_picture-rect' src={imgRect1} alt=""/>
        </div>
        <div>
            <img className="course_picture-man2" src={imgMan2} alt=""/>
        </div>
        
        <div>
           <img className='course_picture-img' src={imgCourse} alt=""/>
           <span className='course_picture-text'>Пройди курсы и прочитай книги по направлению<b> самостоятельно</b></span>
        </div>
        <div>
            <img className="course_picture-man3" src={imgMan3} alt=""/>
            <img className='course_picture-rect2' src={imgRect2} alt=""/>
        </div>
        
        
      </div>
    </main>
  );
}

export default CoursesIntro;