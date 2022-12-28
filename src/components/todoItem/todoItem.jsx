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

  if (isEdit) {
    return (
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
    );
  } else {
    return (
      <div className='todo-list-box'>
        <li>{value}</li>
        <div className='icons-box'>
          <RiDeleteBinLine
            style={styleForIcons}
            onClick={() => deleteTodo(id)}
          ></RiDeleteBinLine>
          <FiEdit style={styleForIcons} onClick={() => editTodoItem()}></FiEdit>
        </div>
      </div>
    );
  }
};

export default connect(null, { deleteTodo, editTodo })(TodoItem);
