import { Route, Routes } from 'react-router-dom';
import LoginPage from '../loginPage/loginPage';
import TasksPage from '../taskPage/tasksPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/todolist' element={<TasksPage />} />
    </Routes>
  );
}

export default App;
