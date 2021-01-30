import React from 'react';
import dogImg from './resources/media/dog.jpg'

const dogStyle = {
    'background': `url(${dogImg}) 50% no-repeat`,
    width: '900px',
    height: '506px'
}

function Courses() {
  return (
    <main>
      <div>
        Courses
          <div className="dog-box" style={dogStyle}>
          </div>
      </div>
    </main>
  );
}

export default Courses;