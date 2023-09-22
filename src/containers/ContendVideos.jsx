import React from 'react';
import '../styles/ContendVideos.css';

function ContendVideos({children}) {
  return (
    <div className='contend-videos'>
      {children}
    </div>
  )
}

export { ContendVideos };