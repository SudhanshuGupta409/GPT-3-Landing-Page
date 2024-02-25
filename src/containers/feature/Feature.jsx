import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi deserunt corrupti repellat inventore maiores impedit.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi deserunt corrupti repellat inventore maiores impedit.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi deserunt corrupti repellat inventore maiores impedit.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi deserunt corrupti repellat inventore maiores impedit.",
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => (
          <Feature
            title={feature.title}
            text={feature.text}
            key={feature.title + feature.index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
