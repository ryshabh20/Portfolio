import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Singh </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I'm your go-to Full Stack Developer, ready to bring your dream product to life in the virtual world. From crafting sleek websites for small and medium-sized businesses to empowering you by building your dream tech product, l've got the skills and expertise to make it happen.
With a mastery of JavaScript, React.js, Node.js, express.js, CSS and Next.js, I can help ensure your online presence stands out from the crowd. I am skilled in creating user-friendly interfaces, building RESTful APIs, and seamlessly integrating external services. Besides, I am a technical lead/project manager, who prefers to meticulously oversee every aspect of a project, from conception to completion, leaving no room for mediocrity.
            <br />
          </p>
    

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rishabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
