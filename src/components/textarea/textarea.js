import React from 'react';
import './textarea.css';

class TextArea extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.htmlFor}>{this.props.title} </label>
        <textarea
          id={this.props.htmlFor}
          placeholder={this.props.placeholder}
          className={this.props.className}
          rows={this.props.rows}
          maxLength={this.props.maxLength}
          onChange={this.props.onChange}
          value={this.props.value}
        ></textarea>
      </>
    );
  }
}

export default TextArea;
