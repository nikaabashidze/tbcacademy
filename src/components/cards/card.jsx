


import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div>
      <div className='card'>

        <div className='imgbox'>
      <img src={props.image} alt={props.name} />
      </div>
        <h1>{props.name}</h1>
        <p>{props.valid}</p>

       
         <button>{props.buttonComponent}</button>

      </div>
    </div>
  );
};

export default Card;