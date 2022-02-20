import './UnderlineTitle.css';

function UnderlineTitle(props) {
  return (
    <h2 className="underline-title">
      {props.children}
    </h2>
  );
}

export default UnderlineTitle;
