import React from 'react';
import '../styles/HeaderLogo.css';
import logo from '../assets/logos/youtube.svg';

function HeaderLogo() {
  return (
    <div className="header-logo">
      <button className='btn-header text-light fa fa-bars fa-1x'></button>
      <button className='btn-logo text-light'>
        <img src={logo} alt="logo" />
        <span>YouTube</span>
      </button>
    </div>
  )
}

export { HeaderLogo };