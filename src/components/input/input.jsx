import React from 'react';
import './input.css';
const Input =(props)=> {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input
        id={props.htmlFor}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={props.className}
        value={props.value}
      />
    </>
  );
}

export default Input;
