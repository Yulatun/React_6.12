import { submitLogin } from "../actions";
import loginReducer from './login'

const StateForTest = {
  login: 'Julia',
};
const name = "Julia"
const submitLoginAction = submitLogin(name)

test('test loginReducer', () => {
  const result = loginReducer(StateForTest, submitLoginAction);
  expect(result).toEqual({ login: 'Julia' });
});
