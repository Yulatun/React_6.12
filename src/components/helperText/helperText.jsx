import React from 'react';
import './helperText.css';
const HelperText = (props) => {
  return <div className='error-helper-text'>{props.value}</div>;
};

export default HelperText;
