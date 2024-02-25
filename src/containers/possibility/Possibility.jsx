import "./possibility.css";
import possibilityImage from "../../assets/assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          recusandae iure quasi, labore quibusdam delectus error illum ea
          explicabo culpa!
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
