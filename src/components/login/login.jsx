import Input from '../input/input';
import Button from '../button/button';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { submitLogin } from '../../redux/actions';
import { connect } from 'react-redux';
import './login.css';

const Login = ({ submitLogin }) => {
  const [isSubmit, setSubmit] = useState(false);
  const [userName, setUserName] = useState('');

  const onSubmitName = () => {
    submitLogin(userName);
    setSubmit(true);
  };
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      {isSubmit && <Navigate to='/todolist'></Navigate>}
      <div className='login-container'>
        <Input
          title='Введите ваше имя:'
          placeholder='Имя'
          value={userName}
          onChange={handleChange}
          className='input-form'
        ></Input>{' '}
        <Button
          type='submit'
          onClick={onSubmitName}
          text='Сохранить'
          className='save'
        />
      </div>
    </>
  );
};

export default connect(null, { submitLogin })(Login);
