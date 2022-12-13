import React from 'react';
import './input.css'
class Input extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
        <input
          id={this.props.htmlFor}
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          value={this.props.value}
        ></input>
      </>
    );
  }
}

export default Input;
