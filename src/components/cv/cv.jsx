import React from 'react';
import TextField from '../textField/textField';
import Heading from '../heading/heading';
import './cv.css';

const CV = (props) => {
  return (
    <div className='main-cv-field'>
      <Heading text={[props.data.name + ' ' + props.data.lastName]} />
      <TextField text={'Дата Рождения'}>{props.data.date}</TextField>
      <TextField text={'Телефон'}>{props.data.tel}</TextField>
      <TextField text={'Сайт'}>{props.data.site}</TextField>
      <TextField text={'О себе'}>{props.data.about}</TextField>
      <TextField text={'Стек технологий'}>{props.data.stack}</TextField>
      <TextField text={'Описание последнего проекта'}>
        {props.data.project}
      </TextField>
    </div>
  );
};
export default CV;
