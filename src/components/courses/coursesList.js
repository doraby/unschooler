import React from 'react';

const CoursesList = (props) => {
  let {professionSelected, CoursesCardData} = props;
  
  const coursesCard = (cardData) => {
    let {imgURL} = cardData;
    let courses_card__bg = {
      backgroundImage: "url('"+imgURL+"')",
      backgroundPosition: '30%',
      backgroundSize: 'auto 100%',
    }
    
    if (cardData.direction.includes(professionSelected))
    return (
      <div>
        <div className='courses_card' style={courses_card__bg} /*{...imgURL ? 'style='+{courses_card__bg} : {}}*/>
          <div>{cardData.difficult}</div>
          <div>{cardData.author}</div>
          <div>{cardData.title}</div>
          <div>{cardData.direction}
          <input type="checkbox" onChange={() => {props.chengeCheckCoursesCardData(cardData.id)}} /></div>
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