import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
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
