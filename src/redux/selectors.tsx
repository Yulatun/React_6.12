export const getTodosState = (store: Object) => store.todos;

export const getTodoList = (store: Object) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = ( store :Object, id : string) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = (store: Object) => {
  return getTodoList(store).map((id: string) => getTodoById(store, id));
};

export const getLogin = (store: Object) => store.login.login;
