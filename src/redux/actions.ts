import { AnyAction } from 'redux'

import { ADD_TODO, DELETE_TODO, EDIT_TODO, ProvideLoginAction, PROVIDE_LOGIN } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (content: string): AnyAction => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id: string, editContent:string) => ({
  type: EDIT_TODO,
  payload: { id, editContent },
});

export const submitLogin = (name: string): ProvideLoginAction => ({
  type: PROVIDE_LOGIN,
  payload: { name },
});