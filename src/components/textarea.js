import React from 'react';

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
          maxlength={this.props.maxlength}
        ></textarea>
      </>
    );
  }
}

export default TextArea;
