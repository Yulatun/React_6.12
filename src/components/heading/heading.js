import React from 'react';
import './heading.css';
class Heading extends React.Component {
  render() {
    return <h1 className={this.props.className}>{this.props.text}</h1>;
  }
}

export default Heading;
