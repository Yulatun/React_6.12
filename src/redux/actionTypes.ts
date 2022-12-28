import { Action } from 'redux'

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const PROVIDE_LOGIN = 'PROVIDE_LOGIN';

export interface ProvideLoginActionPayload {
  name: string;
}
export interface ProvideLoginAction extends Action<'PROVIDE_LOGIN'> {
  payload: ProvideLoginActionPayload;
}
export interface AddTodoActionPayload {
  id: string;
  content: string
}
export interface AddTodoAction extends Action<'ADD_TODO'> {
  payload: AddTodoActionPayload;
}

export interface DeleteTodoActionPayload {
  id: string;
}
export interface DeleteTodoAction extends Action<'DELETE_TODO'> {
  payload: DeleteTodoActionPayload;
}

export interface EditTodoActionPayload {
  id: string;
  editContent: string
}

export interface EditTodoAction extends Action<'EDIT_TODO'> {
  payload: EditTodoActionPayload;
}
