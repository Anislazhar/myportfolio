import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Anis Lazhar </span>i am of{" "}
            <span className="purple"> Tunisian 🇹🇳</span> origin,
            <br />
            was born and grew up in
            <span className="purple"> Lyon, France 🇫🇷,</span>
            <br />
            traveled to
            <span className="purple"> Germany 🇩🇪 </span>in 2006,
            <br />
            and discovered my passion for creating responsive websites 👨‍💻 in
            2017.
            <br />
            As a creative mind 🤯, I love to bring my ideas to life, solve
            problems, and let my obsession with detail run free 🚀
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music production
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to create impactful and meaningful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Anis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
