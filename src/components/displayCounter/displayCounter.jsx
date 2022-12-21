import './displayCounter.css';
const DisplayCounter = (props) => {
  return (
    <div className={props.className}>
      {props.text}
      {props.restNumber}/{props.allNumber}
    </div>
  );
};
export default DisplayCounter;
