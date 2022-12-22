import './textField.css';

const TextField = (props) => {
  return (
    <div className='text-field-cv'>
      <div>{props.text}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default TextField;
