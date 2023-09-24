import React from 'react';
import image from '../assets/images/video.png';
import user from '../assets/images/user.svg';
import '../styles/Videos.css';
import { VideoItem } from '../components/VideoItem';

function Videos() {
  return (
    <div className='videos'>
      <VideoItem 
        miniatureImage={image}
        userImage={user}
        title={'React.js el framework apoyado por Facebook'}/>
        <VideoItem 
        miniatureImage={image}
        userImage={user}
        title={'React.js el framework apoyado por Facebook'}/>
        <VideoItem 
        miniatureImage={image}
        userImage={user}
        title={'React.js el framework apoyado por Facebook'}/>
        <VideoItem 
        miniatureImage={image}
        userImage={user}
        title={'React.js el framework apoyado por Facebook'}/>
    </div>
  )
}

export { Videos };