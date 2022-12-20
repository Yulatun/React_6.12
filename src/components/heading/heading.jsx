import React from 'react';
import './heading.css';
const Heading=(props)=> {
  return <h1 className={props.className}>{props.text}</h1>;
}

export default Heading;
