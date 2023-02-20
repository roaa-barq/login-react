import React, { useContext } from "react";
import "./Home.css";
import { EmailContext } from "./Context";

const Home = () => {
  const [email, setEmail] = useContext(EmailContext);

  console.log("w" + email);
  return (
    <form className="homePage">
      <div className="upper">
        <div className="para">
          <text className="titlePara">Support + FAQs</text>
          <p>
            Find quick answers to your questions and get the most out of Font
            Awesome with our step-by-step docs and troubleshooting tips.
          </p>
        </div>
        <img className="question" src="/question.png"></img>
      </div>
      <div className="middle">
        <div className="para">
          <text className="titlePara">How can we help?</text>
          <p>
            We've gathered some of our most frequently asked questions and links
            to help answer any questions you may have below.
          </p>
        </div>
        <div className="button">
          <text>Visit Docs</text>
          <img src="/book.png" />
        </div>
        <div className="button">
          <text>Pro Support</text>
          <img src="/support.png" />
        </div>
      </div>
      <div className="info">
        <div className="infoColumn">
          <text className="titlePara">My info</text>
          <text className="infoDiv">Email : {email}</text>
        </div>
        <img className="infoImg" src="/info.png" />
      </div>
    </form>
  );
};

export default Home;
