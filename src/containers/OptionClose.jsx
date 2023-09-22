import React from 'react';
import '../styles/OptionClose.css';

function OptionClose() {
  return (
    <div className='option-close'>
        <div className='option-close-item'>
            <i className='fa fa-home fa-1x'></i>
            <span>Principal</span>
        </div>
        <div className='option-close-item'>
            <i className='fa fa-play-circle-o fa-1x'></i>
            <span>Shorts</span>
        </div>
        <div className='option-close-item'>
            <i className='fa fa-caret-square-o-right fa-1x'></i>
            <span>Suscripciones</span>
        </div>
        <div className='option-close-item'>
            <i className='fa fa-caret-square-o-right  fa-1x'></i>
            <span>Biblioteca</span>
        </div>
    </div>
  )
}

export {OptionClose};