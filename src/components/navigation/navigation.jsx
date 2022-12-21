import { useState } from 'react';
import Form from '../form/form';
import Heading from '../heading/heading';
import CV from '../cv/cv';

const Navigation = () => {
  const [page, setPage] = useState('form');
  const [data, setData] = useState({});

  const changePage = (data) => {
    setPage('cv');
    setData(data);
  };

  return (
    <>
      {page === 'form' ? (
        <div className='main-field'>
          <Heading text='Создание анкеты' className='main-head'></Heading>
          <Form onChangePage={changePage} />
        </div>
      ) : (
        <CV data={data} />
      )}
    </>
  );
};

export default Navigation;
