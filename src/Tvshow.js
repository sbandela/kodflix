import React from 'react';
export default function Tvshow(props) {
    return (
      <div className='item'>
        <img src={props.logo} alt={props.name} />
        <div className='overlay'>
          <h3>{props.name}</h3>
        </div>
      </div>
    );
  }