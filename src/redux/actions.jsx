import { ADD_TODO, DELETE_TODO, EDIT_TODO, PROVIDE_LOGIN } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id, editContent) => ({
  type: EDIT_TODO,
  payload: { id, editContent },
});

export const submitLogin = (name) => ({
  type: PROVIDE_LOGIN,
  payload: { name },
});
