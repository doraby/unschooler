import React from 'react';
import video1 from './../../video/CuteCat.mp4'



const ProfessionVideo = () => {
  return (
    <div>
      <iframe
        title='video'
        src={video1}
      ></iframe>
    </div>
  );
}

export default ProfessionVideo;