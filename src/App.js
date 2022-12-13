import './App.css';

import Form from './components/form/form';
import Heading from './components/heading/heading';

function App() {
  return (
    <div className='main-field'>
      <Heading text='Создание анкеты' className='main-head'></Heading>
      <Form></Form>
    </div>
  );
}

export default App;
