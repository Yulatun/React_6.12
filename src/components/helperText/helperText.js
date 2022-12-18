import React from 'react';
import './helperText.css';
class HelperText extends React.Component {
  render() {
    return (
      <>
        <div className='error-helper-text' >
          {this.props.value}
        </div>
      </>
    );
  }
}

export default HelperText;
