import React from 'react';
import './button.css';
class Button extends React.Component {
  
  render() {
    return (
      <>
        <button
          className={this.props.className}
          type={this.props.type}
          onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
      </>
    );
  }
}

export default Button;
