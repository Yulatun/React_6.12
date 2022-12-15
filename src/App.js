import Form from './components/form/form';
import Heading from './components/heading/heading';
import './App.css';

function App() {
  return (
    <div className='main-field'>
      <Heading text='Создание анкеты' className='main-head'></Heading>
      <Form />
    </div>
  );
}

export default App;
