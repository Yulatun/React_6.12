import { ADD_TODO, DELETE_TODO, EDIT_TODO, AddTodoAction, DeleteTodoAction, EditTodoAction } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {
    id: {
      content: ''
    },
  }
};
export interface StateTodos {
  allIds: Array<string>,
  byIds: {
    [id: string]: {
      content: string
    }
  }
}
export interface Todo {
  id: string;
  content: string;
}

export default function todoReducer(state: StateTodos = initialState, action: AddTodoAction | DeleteTodoAction | EditTodoAction) {
  switch (action.type) {
    case ADD_TODO: {
      const id = new Date().valueOf().toString();
      const { content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content
          },
        },
      };
    }
    case DELETE_TODO: {
      const id: string = action.payload.id;
      const allIdsAfterDeleteId = state.allIds.filter(
        (todosId) => todosId !== id
      );
      delete state.byIds[id];
      return {
        ...state,
        allIds: allIdsAfterDeleteId,
        byIds: { ...state.byIds },
      };
    }
    case EDIT_TODO: {
      const { id, editContent } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content: editContent,
          },
        },
      };
    }
    default:
      return state;
  }
}
