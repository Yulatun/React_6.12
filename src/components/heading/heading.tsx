import './heading.css';

interface HeadingProps {
  text: string,
  className: string,
}
const Heading = ({ className, text }: HeadingProps) => <h1 className={className}>{text}</h1>;

export default Heading;
