import { connect } from 'react-redux';
import { StateTodos, Todo } from '../../redux/reducers/todos';
import { getTodos, Store } from '../../redux/selectors';
import TodoForm from '../todoForm/todoForm';
import TodoItem from '../todoItem/todoItem';
import './todoList.css';

interface TodoListProps {
  allTodos: Array<Todo>;
}

const TodoList = ({ allTodos }: TodoListProps) => {
  const numberAllTodos = allTodos.length;
  return (
    <>
      <div> у вас {numberAllTodos} задач</div>
      <div className='main-todoList'>
        <ul className='list'>
          {allTodos.map((t) => {
            return <TodoItem key={t.id} value={t.content} id={t.id}/>;
          })}
        </ul>
        <div className='form-new-task'>
          <TodoForm/>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: Store) => {
  const allTodos: Array<Todo> = getTodos(state);
  return { allTodos };
};

export default connect(mapStateToProps)(TodoList);