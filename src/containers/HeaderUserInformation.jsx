import React from 'react';
import '../styles/HeaderUserInformation.css';

function HeaderUserInformation() {
  return (
    <div className='header-user-information'>
      <button className='text-light fa fa-video-camera fa-1x btn-header'></button>
      <div>
        <button className='text-light fa fa-bell fa-1x btn-header'></button>
        <span className='number-notify'>9+</span>
      </div>
      <button className='btn-user'>
        <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564400-account_81513.png" alt="user" />
      </button>
    </div>
  )
}

export { HeaderUserInformation };