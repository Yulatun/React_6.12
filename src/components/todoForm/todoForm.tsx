import { useState } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

type TodoFormProps = {
  addTodo: Function,
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [newTaskName, setNewTaskName] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
     />
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
