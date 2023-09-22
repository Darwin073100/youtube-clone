import React from 'react';
import '../styles/Header.css';

function Header({children}) {
  return (
    <header className='header'>
      {children}
    </header>
  )
}

export { Header };