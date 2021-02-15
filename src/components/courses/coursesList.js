import React from 'react';

const CoursesList = (props) => {
  let {professionSelected, CoursesCardData} = props;
  
  const coursesCard = (cardData) => {
    let {imgURL} = cardData;
    let courses_card__bg = {
      backgroundImage: "url('"+imgURL+"')",
      backgroundPosition: 'center  right 3rem',
      backgroundSize: '50% 100%',
      backgroundRepeat: 'no-repeat',
      opacity: 0.7,
    }
    
    if (cardData.direction.includes(professionSelected))
    return (
        <div className='courses_card' style={courses_card__bg} /*{imgURL ? 'style='+{courses_card__bg}}*/>
          <div className='courses_card__difficult'>{cardData.difficult}</div>
          <div className='courses_card__author'>{cardData.author}</div>
          <div className='courses_card__title'>{cardData.title}</div>
          <div className='courses_card__direction'>{cardData.direction}
            <div className='courses_card_direction-box'>
              <input className='course_card__input' type="checkbox" onChange={() => {props.chengeCheckCoursesCardData(cardData.id)}} /> 
            </div>
            
          </div>
        </div>
    );
  };

  return (
    <main>
      {/*  таблица целиком*/ }
      <div className='courses_list'>
        {CoursesCardData.map(coursesCard)}
      </div>
    </main>
  );
};

export default CoursesList;