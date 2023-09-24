import React from 'react';
import '../styles/Shorts.css';
import { ShortItem } from '../components/ShortItem';

function Shorts() {
  return (
    <div className='shorts'>
      <div className='shorts-bar'></div>
      <div className='shorts-header'>
        <div className='shorts-title'>
          <div>
            <img src="https://cdn.icon-icons.com/icons2/1211/PNG/96/1491580631-yumminkysocialmedia48_83099.png" alt="shorts" />
            <span>Shorts</span>
          </div>
          <button className='fa fa-times fa-1x btn-header text-light'></button>
        </div>
        <div className='shorts-content'>
          <ShortItem/>
          <ShortItem/>
          <ShortItem/>
          <ShortItem/>
          <ShortItem/>
        </div>
        <div className='shorts-mas'>
          <button className='fa fa-chevron-down fa-1x text-light'></button>
        </div>
        <div className='shorts-bar'></div>
      </div>
    </div>
  )
}

export { Shorts };