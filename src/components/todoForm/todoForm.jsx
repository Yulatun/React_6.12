import { useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

const TodoForm = ({ addTodo }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };
  const onSubmitTask = () => {
    addTodo(newTaskName);
    setNewTaskName('');
  };

  return (
    <>
      <Input
        onChange={handleChange}
        value={newTaskName}
        placeholder='новая задача..'
        className='input-form'
      ></Input>
      <Button
        type='submit'
        onClick={onSubmitTask}
        text='Сохранить'
        className='submit-login'
      />
    </>
  );
};

export default connect(null, { addTodo })(TodoForm);
