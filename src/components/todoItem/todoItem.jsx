import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/actions';
import Input from '../input/input';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineDoneOutline } from 'react-icons/md';
import './todoItem.css';

const TodoItem = ({ value, deleteTodo, id, editTodo }) => {
  const [editTaskName, setEditTaskName] = useState(value);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (e) => {
    setEditTaskName(e.target.value);
  };
  const editTodoItem = () => {
    setIsEdit(true);
  };
  const finishEditTodoItem = () => {
    editTodo(id, editTaskName);
    setIsEdit(false);
  };
  const styleForIcons = { fontSize: '1.5em', cursor: 'pointer' };

  return isEdit ? (
    <>
      <Input
        onChange={handleChange}
        value={editTaskName}
        className='input-edit-todo'
      />
      <MdOutlineDoneOutline
        style={styleForIcons}
        onClick={() => finishEditTodoItem()}
      />
    </>
  ) : (
    <>
      <li>
        {value}
        <div className='icons-box'>
          <RiDeleteBinLine
            style={styleForIcons}
            onClick={() => deleteTodo(id)}
          />
          <FiEdit style={styleForIcons} onClick={() => editTodoItem()} />
        </div>
      </li>
    </>
  );
};

export default connect(null, { deleteTodo, editTodo })(TodoItem);
