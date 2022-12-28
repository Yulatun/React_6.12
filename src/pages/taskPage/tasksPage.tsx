import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogin } from '../../redux/selectors';
import { useState } from 'react';
import Heading from '../../components/heading/heading';
import TodoList from '../../components/todoList/todoList';
import Button from '../../components/button/button';
import './taskPage.css';

type TasksPageProps = {
  userName: string
}
type mapStateToPropsProps = {
  state: object
}

const TasksPage = ({ userName }: TasksPageProps) => {
  const [useSubmit, setSubmit] = useState(false);
  const toLoginPage = () => {
    setSubmit(true);
  };

  return (
    <div className='main-task-page'>
      <Heading
        text={`добро пожаловать ${userName}`}
        className='main-head'
      />
      <TodoList />
      {useSubmit && <Navigate to='/'></Navigate>}
      <Button
        type='submit'
        onClick={toLoginPage}
        text='вернутся на Login Page'
      />
    </div>
  );
};

const mapStateToProps = (state: mapStateToPropsProps) => {
  const userName = getLogin(state);
  return { userName };
};

export default connect(mapStateToProps)(TasksPage);