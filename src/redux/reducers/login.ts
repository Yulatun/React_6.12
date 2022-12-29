import { ProvideLoginAction, PROVIDE_LOGIN } from '../actionTypes';

const initialState = {
  login: 'Гость',
};
export interface StateLogin {
  login: string
}

export default function loginReducer(state: StateLogin = initialState, action: ProvideLoginAction) {
  switch (action.type) {
    case PROVIDE_LOGIN: {
      const name: string = action.payload.name;
      return {
        ...state,
        login: name,
      };
    }
    default:
      return state;
  }
}