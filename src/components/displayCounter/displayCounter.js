import React from 'react';
import './displayCounter.css';
class DisplayCounter extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.text}
        {this.props.restNumber}/{this.props.allNumber}
      </div>
    );
  }
}

export default DisplayCounter;
