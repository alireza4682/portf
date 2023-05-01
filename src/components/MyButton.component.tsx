import "./MyButton.style.scss";
import { ReactSVG } from "react-svg";

const starcomp = (num: number) => {
  return (
    <div className={`star-${num}`}>
      <ReactSVG src="./star.svg" />
    </div>
  );
};

const Button = () => {
  return (
    <button className="mybutton">
      Button
      {starcomp(1)}
      {starcomp(2)}
      {starcomp(3)}
      {starcomp(4)}
      {starcomp(5)}
    </button>
  );
};

export default Button;
