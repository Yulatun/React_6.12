import { addTodo, deleteTodo, editTodo } from "../actions";
import todoReducer from './todos'

const StateForTest1 = {
  allIds: ['1', '2'],
  byIds: {
    '1': {
      content: 'don`t worry'
    },
    '2': {
      content: 'be happy'
    }
  }
};

const StateForTest2 = {
  allIds: ['1', '2', '1672325372683'],
  byIds: {
    '1': {
      content: 'don`t worry'
    },
    '2': {
      content: 'be happy'
    },
    '1672325372683': {
      content: 'learn JS'
    }
  }
};

const StateForTest3 = {
  allIds: ['1', '2', '1672325372683'],
  byIds: {
    '1': {
      content: 'don`t worry'
    },
    '2': {
      content: 'be happy'
    },
    '1672325372683': {
      content: 'learn React'
    }
  }
};
const newTodoItem = 'learn JS'
const mockActionAddTodo = addTodo(newTodoItem)

describe('todoReducer', () => {
  test('addTodo should add to state new Todo', () => {
    const mockDate = new Date(1672325372683);
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate);
    const result = todoReducer(StateForTest1, mockActionAddTodo);
    expect(result).toEqual(StateForTest2);
    spy.mockRestore();
  });

  test('deleteTodo should removed from state chosen Todo', () => {
    const mockActionDeleteTodo = deleteTodo('1672325372683')
    const result = todoReducer(StateForTest2, mockActionDeleteTodo);
    expect(result).toEqual(StateForTest1);
  });

  test('editTodo should edit in state chosen Todo', () => {
    const mockActionEditTodo = editTodo('1672325372683', 'learn React')
    const result = todoReducer(StateForTest2, mockActionEditTodo);
    expect(result).toEqual(StateForTest3);
  });
});