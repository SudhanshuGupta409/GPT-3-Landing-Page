import "./header.css";
import people from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
          mollitia, blanditiis nobis distinctio praesentium quis pariatur
          quisquam aperiam veniam, ab illum explicabo. Ipsa, molestias! A?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
