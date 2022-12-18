import React from 'react';
import './input.css';
class Input extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
        <input
          id={this.props.htmlFor}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          className={this.props.className}
          value={this.props.value}
        />
      </>
    );
  }
}

export default Input;
