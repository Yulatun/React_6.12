import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogin } from '../../redux/selectors';
import { useState } from 'react';
import Heading from '../../components/heading/heading';
import TodoList from '../../components/todoList/todoList';
import Button from '../../components/button/button';
import './taskPage.css';

const TasksPage = ({ userName }) => {
  const [useSubmit, setSubmit] = useState(false);
  const toLoginPage = () => {
    setSubmit(true);
  };

  return (
    <div className='main-task-page'>
      <Heading
        text={`добро пожаловать ${userName}`}
        className='main-head'
      ></Heading>
      <TodoList></TodoList>
      {useSubmit && <Navigate to='/'></Navigate>}
      <Button
        type='submit'
        onClick={toLoginPage}
        text='вернутся на Login Page'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const userName = getLogin(state);
  return { userName };
};

export default connect(mapStateToProps)(TasksPage);
