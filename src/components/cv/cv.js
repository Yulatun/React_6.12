import React from 'react';
import TextField from '../textField/textField';
import Heading from '../heading/heading';
import './cv.css';

class CV extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <>
        <div className='main-cv-field'>
          <Heading
            text={[this.props.data.name + ' ' + this.props.data.lastName]}
          ></Heading>
          <TextField text={'Дата Рождения'}>{this.props.data.date}</TextField>
          <TextField text={'Телефон'}>{this.props.data.tel}</TextField>
          <TextField text={'Сайт'}>{this.props.data.site}</TextField>
          <TextField text={'О себе'}>{this.props.data.about}</TextField>
          <TextField text={'Стек технологий'}>
            {this.props.data.stack}
          </TextField>
          <TextField text={'Описание последнего проекта'}>
            {this.props.data.project}
          </TextField>
        </div>
      </>
    );
  }
}

export default CV;
