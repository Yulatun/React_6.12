import React from 'react';
import Input from '../input/input';
import TextArea from '../textarea/textarea';
import './form.css';
import Button from '../button/button';

class Form extends React.Component {
  render() {
    return (
      <form id='userData' className='form-field'>
        <Input
          title='Имя'
          placeholder='Имя'
          htmlFor='name'
          className='input-form'
        />
        <Input
          type='text'
          title='Фамилия'
          placeholder='Фамилия'
          htmlFor='lastName'
          className='input-form'
        />
        <Input
          title='Дата Рождения'
          htmlFor='name'
          type='date'
          className='input-form'
        />
        <Input
          title='Телефон'
          placeholder='+370'
          htmlFor='phone'
          type='tel'
          className='input-form'
        />
        <Input
          title='Сайт'
          placeholder='https://'
          htmlFor='site'
          className='input-form'
        />
        <TextArea
          rows='7'
          title='О себе'
          placeholder='О себе'
          htmlFor='About'
          maxlength='600'
          className='textarea-form'
        ></TextArea>
        <TextArea
          rows='7'
          title='Стек технологий'
          placeholder='Стек технологий'
          htmlFor='stack'
          maxlength='600'
          className='textarea-form'
        />
        <TextArea
          rows='7'
          title='Описание последнего проекта'
          placeholder='Описание последнего проекта'
          htmlFor='project'
          maxlength='600'
          className='textarea-form'
        />
        <div className='btn-block'>
          <Button className='reset' text='Отмена' type='reset'></Button>
          <Button className='save' text='Сохранить' type='submit'></Button>
        </div>
      </form>
    );
  }
}

export default Form;
