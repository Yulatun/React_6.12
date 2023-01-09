import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogin, Store } from '../../redux/selectors';
import { useState } from 'react';
import Heading from '../../components/heading/heading';
import TodoList from '../../components/todoList/todoList';
import Button from '../../components/button/button';
import './taskPage.css';

interface TasksPageProps {
  userName: string
}

const TasksPage = ({ userName }: TasksPageProps) => {
  const [useSubmit, setSubmit] = useState(false);
  const toLoginPage = () => {
    setSubmit(true);
  };

  return (
    <div className='main-task-page'>
      <Heading text={`Добро пожаловать ${userName}`} className='main-head' />
      <TodoList />
      {useSubmit && <Navigate to='/' />}
      <Button
        type='submit'
        onClick={toLoginPage}
        text='вернуться на Login Page'
      />
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  const userName: string = getLogin(state);
  return { userName };
};

export default connect(mapStateToProps)(TasksPage);