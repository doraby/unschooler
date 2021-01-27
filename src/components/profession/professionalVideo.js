import React from 'react';
import video1 from './../../video/CuteCat.mp4'
import video2 from './../../video/Cat1.mp4'
import video3 from './../../video/Cat2.mp4'
import video4 from './../../video/Cat3.mp4'
import video5 from './../../video/Cat4.mp4'



const ProfessionVideo = (props) => {

  let {professionSelected} = props;

  const defineVideo = (profession) => {
    switch (profession) {
      case 'Web-дизайнер': return video1;
      case 'HTML&CSS': return video2;
      case 'Frontend-Программист': return video3;
      case 'Backend-Программист': return video4;
      case 'Тестировщик': return video5;
      case 'Менеджер проектов': return video1;
      case 'Менеджер продукта': return video2;
      case 'Бизнес аналитик': return video3;
      default: return video1;
    }
  }

  return (
    <div className='profession-video'>
      <iframe
        title='video'
        src={defineVideo(professionSelected)}
      ></iframe>
    </div>
  );
}

export default ProfessionVideo;