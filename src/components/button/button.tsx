import React, { MouseEventHandler } from 'react'
import './button.css';

interface ButtonProps  {
  onClick: MouseEventHandler,
  text: string,
  className?: string,
  type: "button" | "submit" | "reset" | undefined,
}


const Button = ({ className, type, onClick, text }: ButtonProps) => {
  return (
    <button
      className={className}
      type={type!}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
