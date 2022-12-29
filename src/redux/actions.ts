import { AddTodoAction, ADD_TODO, DeleteTodoAction, DELETE_TODO, EDIT_TODO, EditTodoAction, ProvideLoginAction, PROVIDE_LOGIN } from './actionTypes';

export const addTodo = (content: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id: string, editContent: string): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, editContent },
});

export const submitLogin = (name: string): ProvideLoginAction => ({
  type: PROVIDE_LOGIN,
  payload: { name },
});