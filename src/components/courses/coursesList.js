import React from 'react';

const CoursesList = (props) => {
  let {professionSelected, CoursesCardData} = props;
  
  const coursesCard = (cardData) => {
    let img = cardData.image;
    let qwe = {
      backgroundImage: "url('"+{img}+"')"
    }
    if (cardData.direction.includes(professionSelected))
    return (
      <div>
        <div className='courses_card qwe' >
          <div>{cardData.difficult}</div>
          <div>{cardData.author}</div>
          <div>{cardData.title}</div>
          <div>{cardData.direction}
          <input type="checkbox" onChange={() => {props.chengeCheckCoursesCardData(0)}} /></div>
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className='courses_list'>
        {CoursesCardData.map(coursesCard)}
      </div>
    </main>
  );
};

export default CoursesList;