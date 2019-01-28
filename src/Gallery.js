import React from 'react';
import Tvshow from './Tvshow';
import getGallery from './Gallery-get';


export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(stack => (
            <Tvshow key={stack.id} id={stack.id} name={stack.name} logo={stack.logo} />
          ))
        }
      </div>
    </div>
  );
}

