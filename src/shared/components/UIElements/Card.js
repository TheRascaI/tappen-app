import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
    <div className={`card-inner ${props.innerCardClass}`} style={props.innerCardStyle}>
    {props.children}

    </div>
    </div>
  );
};

export default Card;
