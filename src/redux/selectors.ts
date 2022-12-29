import { StateLogin } from "./reducers/login";
import { StateTodos, Todo } from "./reducers/todos";

export interface Store {
  todos: StateTodos,
  login: StateLogin
}

export const getTodosState = (store: Store) => store.todos;

export const getTodoList = (store: Store): Array<string> =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: Store, id: string): Todo | undefined =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : undefined;

export const getTodos = (store: Store): Array<Todo> => {
  return getTodoList(store).map((id: string) => getTodoById(store, id)!);
};

export const getLogin = (store: Store) => store.login.login;
