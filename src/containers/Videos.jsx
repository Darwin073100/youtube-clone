import React from 'react';
import image from '../assets/images/video.png';
import user from '../assets/images/user.svg';
import '../styles/Videos.css';

function Videos() {
  return (
    <div className='videos'>
      <div className='video'>
        <div className='video-image'>
          <img src={image} alt="video" />
          <span>10:30</span>
        </div>
        <div className='video-title'>
          <img src={user} alt="usuario" />
          <span><strong>React.js un framework de javascript</strong></span>
        </div>
        <div className='video-information'>
          <span>Meta@oficial</span>
          <span>100 k vistas · hace 2 semanas</span>
        </div>
      </div>
      <div className='video'>
        <div className='video-image'>
          <img src={image} alt="video" />
          <span>10:30</span>
        </div>
        <div className='video-title'>
          <img src={user} alt="usuario" />
          <span><strong>React.js un framework de javascript</strong></span>
        </div>
        <div className='video-information'>
          <span>Meta@oficial</span>
          <span>100 k vistas · hace 2 semanas</span>
        </div>
      </div>
      <div className='video'>
        <div className='video-image'>
          <img src={image} alt="video" />
          <span>10:30</span>
        </div>
        <div className='video-title'>
          <img src={user} alt="usuario" />
          <span><strong>React.js un framework de javascript</strong></span>
        </div>
        <div className='video-information'>
          <span>Meta@oficial</span>
          <span>100 k vistas · hace 2 semanas</span>
        </div>
      </div>
      <div className='video'>
        <div className='video-image'>
          <img src={image} alt="video" />
          <span>10:30</span>
        </div>
        <div className='video-title'>
          <img src={user} alt="usuario" />
          <span><strong>React.js un framework de javascript</strong></span>
        </div>
        <div className='video-information'>
          <span>Meta@oficial</span>
          <span>100 k vistas · hace 2 semanas</span>
        </div>
      </div>
      <div className='video'>
        <div className='video-image'>
          <img src={image} alt="video" />
          <span>10:30</span>
        </div>
        <div className='video-title'>
          <img src={user} alt="usuario" />
          <span><strong>React.js un framework de javascript</strong></span>
        </div>
        <div className='video-information'>
          <span>Meta@oficial</span>
          <span>100 k vistas · hace 2 semanas</span>
        </div>
      </div>
    </div>
  )
}

export { Videos };