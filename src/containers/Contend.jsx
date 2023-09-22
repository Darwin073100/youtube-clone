import React from 'react';
import '../styles/Contend.css';

function Contend({children}) {
  return (
    <main className='contend'>
      {children}
    </main>
  )
}

export { Contend };