import React from 'react';

import Form from '../form/form';
import Heading from '../heading/heading';
import CV from '../cv/cv';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'form', data: {} };
  }
  changePage(data) {
    this.setState({ page: 'cv', data });
  }
  render() {
    return (
      <>
        {this.state.page === 'form' ? (
          <div className='main-field'>
            <Heading text='Создание анкеты' className='main-head'></Heading>
            <Form onChangePage={this.changePage.bind(this)} />
          </div>
        ) : (
          <CV data={this.state.data} />
        )}
      </>
    );
  }
}

export default Navigation;
