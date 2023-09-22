import React from 'react';
import '../styles/HeaderUserInformation.css';
import user from '../assets/images/user.svg';

function HeaderUserInformation() {
  return (
    <div className='header-user-information'>
      <button className='text-light fa fa-video-camera fa-1x btn-header'></button>
      <div>
        <button className='text-light fa fa-bell fa-1x btn-header'></button>
        <span className='number-notify'>9+</span>
      </div>
      <button className='btn-user'>
        <img src={user} alt="user" />
      </button>
    </div>
  )
}

export { HeaderUserInformation };