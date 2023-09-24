import React from 'react';
import '../styles/FavoriteOption.css';

function FavoriteOptions() {
  return (
    <div className='favorite-options'>
        <div className='options'>
            <button className='btn-favorite-active'>Favorite 1</button>
            <button className='btn-favorite'>Favorite 2</button>
            <button className='btn-favorite'>Favorite 3</button>
            <button className='btn-favorite'>Favorite 4</button>
            <button className='btn-favorite'>Favorite 5</button>
            <button className='btn-favorite'>Favorite 6</button>
            <button className='btn-favorite'>Favorite 7</button>
            <button className='btn-favorite'>Favorite 8</button>
            <button className='btn-favorite'>Favorite 9</button>
            <button className='btn-favorite'>Favorite 10</button>
            <button className='btn-favorite'>Favorite 11</button>
            <button className='btn-favorite'>Favorite 12</button>
        </div>
        <button className='btn-header fa fa-angle-right fa-1x text-light'
            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Siguiente"></button>
    </div>
  )
}

export { FavoriteOptions };