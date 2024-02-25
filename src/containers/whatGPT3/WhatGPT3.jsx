import { Feature } from "../../components";
import "./whatGPT3.css";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis aspernatur possimus blanditiis perferendis dolor ad exercitationem non accusantium repellendus porro The possibilities are beyond your imagination The possibilities are beyond your imagination."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="The possibilities are beyond your imagination The possibilities "
        />
        <Feature
          title="Knowledgebase"
          text="The possibilities are beyond your imagination The possibilities "
        />
        <Feature
          title="Education"
          text="The possibilities are beyond your imagination The possibilities "
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
