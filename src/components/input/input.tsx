import React, { ChangeEventHandler } from 'react'
import './input.css';

type InputProps = {
  text?: string,
  className: string,
  type?: string,
  htmlFor?: string
  title?: string
  placeholder?: string,
  onChange: ChangeEventHandler,
  value: string
}

const Input = ({ htmlFor, title, type, placeholder, onChange, className, value }:InputProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        value={value}
      />
    </>
  );
};

export default Input;


