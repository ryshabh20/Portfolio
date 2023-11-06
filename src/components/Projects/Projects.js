import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ritours from "../../Assets/Projects/ritours.png";
import jobster from "../../Assets/Projects/jobster.png";
import comfysloth from "../../Assets/Projects/comfysloth.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comfysloth}
              isBlog={false}
              title="Comfysloth"
              description="Comfy Sloth is your one-stop destination for stylish furniture shopping. Powered by React, and seamlessly integrated with Auth0 for hassle-free sign-ins, our platform offers a stunning user interface that elevates your online furniture browsing experience. Discover comfort and style like never before with Comfy Sloth."
              ghLink="https://github.com/ryshabh20/comfysloth"
              demoLink="https://temp-comfy-sloth.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobster}
              isBlog={false}
              title="Jobster"
              description="Jobster is a sleek job application tracker, meticulously developed using Redux Toolkit. It simplifies the job hunt by organizing and monitoring applications with ease. Stay on top of your career journey effortlessly with Jobster."
              ghLink="https://github.com/ryshabh20/Jobster"
              demoLink="https://rish-jobster.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ritours}
              isBlog={false}
              title="Ritours"
              description="Ritours is your passport to extraordinary adventures. With a bespoke API crafted from scratch, we bring you a tour booking platform like no other. Explore the world, create memories, and embark on unforgettable journeys, all through Ritours. Your adventure starts here."
              ghLink="https://github.com/ryshabh20/Ritours"
              demoLink="https://ritours.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
