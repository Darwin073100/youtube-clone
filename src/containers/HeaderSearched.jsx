import React from 'react';
import '../styles/HeaderSearched.css';

function HeaderSearched() {
  return (
    <div className='header-searched'>
      <div className='searched'>
        <input type="text" className='text-light' name="seacrhed" id="" placeholder='Buscar' />
        <button className='fa fa-search fa-1x text-light'></button>
      </div>
      <button className='fa fa-microphone fa-1x text-light btn-header-active'></button>
    </div>
  )
}

export { HeaderSearched };