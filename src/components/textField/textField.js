import React from 'react';
import './textField.css';

class TextField extends React.Component {
  render() {
    return (
      <div className='text-field-cv'>
        <div>{this.props.text}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default TextField;
