import { connect } from 'react-redux';
import { getTodos } from '../../redux/selectors';
import TodoForm from '../todoForm/todoForm';
import TodoItem from '../todoItem/todoItem';
import './todoList.css';

type TodoListProps = {
  allTodos: Array<Todo>,
}
type Todo = {
  id: string,
  content: string
}

type mapStateToPropsProps = {
  state: Object,
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

const mapStateToProps = (state: mapStateToPropsProps) => {
  const allTodos = getTodos(state);
  return { allTodos };
};

export default connect(mapStateToProps)(TodoList);