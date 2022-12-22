import './textarea.css';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.htmlFor}>{props.title} </label>
      <textarea
        id={props.htmlFor}
        placeholder={props.placeholder}
        className={props.className}
        rows={props.rows}
        maxLength={props.maxLength}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

export default TextArea;
