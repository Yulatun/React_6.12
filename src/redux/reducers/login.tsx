import { PROVIDE_LOGIN } from '../actionTypes';

const initialState = {
  login: 'Гость',
};



export default function (state = initialState, action) {
  switch (action.type) {
    case PROVIDE_LOGIN: {
      const { name } = action.payload;
      return {
        ...state,
        login: name,
      };
    }
    default:
      return state;
  }
}

