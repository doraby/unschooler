import React from 'react';
import video1 from './../../video/CuteCat.mp4'
import video2 from './../../video/Cat2.mp4'



const ProfessionVideo = (props) => {

  let {professionSelected} = props;

  const defineVideo = (profession) => {
    switch (profession) {
      case 'Web-дизайнер': return video1;
      case 'HTML&CSS': return video2;
      case 'Frontend-Программист': return video1;
      case 'Backend-Программист': return video2;
      case 'Тестировщик': return video1;
      case 'Менеджер проектов': return video2;
      case 'Менеджер продукта': return video1;
      case 'Бизнес аналитик': return video2;
      default: return video1;
    }
  }

  return (
    <div>
      <iframe
        title='video'
        src={defineVideo(professionSelected)}
      ></iframe>
    </div>
  );
}

export default ProfessionVideo;