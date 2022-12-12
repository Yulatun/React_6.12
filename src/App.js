import './App.css';

import Input from './components/input';
import TextArea from './components/textarea';
function App() {
  return (
    <>
      <form id='userData' className='formUserData'>
        <h1>Создание анкеты</h1>
        <Input title='Имя' placeholder='Имя' htmlFor='name'></Input>
        <Input
          type='text'
          title='Фамилия'
          placeholder='Фамилия'
          htmlFor='lastName'
        ></Input>
        <Input title='Дата Рождения' htmlFor='name' type='date'></Input>
        <Input
          title='Телефон'
          placeholder='+370'
          htmlFor='phone'
          type='number'
        ></Input>
        <Input
          title='Сайт'
          placeholder='https://'
          htmlFor='site'
        ></Input>
        <TextArea
          rows='7'
          title='О себе'
          placeholder='О себе'
          htmlFor='About'
          maxlength='600'
        ></TextArea>
        <TextArea
          rows='7'
          title='Стек технологий'
          placeholder='Стек технологий'
          htmlFor='stack'
          maxlength='600'
        ></TextArea>
        <TextArea
          rows='7'
          title='Описание последнего проекта'
          placeholder='Описание последнего проекта'
          htmlFor='project'
          maxlength='600'
        ></TextArea>
        <div>
          <Input className='reset' value='Отмена' type='reset'></Input>
          <Input
            className='save'
            value='Сохранить'
            type='submit'
            form_id='userData'
            maxlength='600'
          ></Input>
        </div>
      </form>
    </>
  );
}

export default App;

