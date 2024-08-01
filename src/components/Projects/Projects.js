import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              title="Car Showcase App. React.js, Bootstrap, JavaScript, Django REST Framework, Cloudinary & Heroku "
              ghLink="https://github.com/Anislazhar/my-cars"
              demoLink="https://my-car-a464784ae806.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/atable/blob/main/docs/website/homepage-snippet.JPG?raw=true"
              }
              title="A Table Restaurant App. React, Python, Bootstrap, Django, Cloudinary & Heroku "
              ghLink="https://github.com/Anislazhar/atable"
              demoLink="https://atable-614d6c154c15.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/pp3_password_c/blob/main/assets/readme-images/pwd-generator-app.png?raw=true"
              }
              title="Passwords Generator & Manager. Python"
              ghLink="https://github.com/Anislazhar/pp3_password_c"
              demoLink="https://pp3-pass-gen-1d2fcbc8ecb2.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/NetflixReact.png?raw=truep"
              }
              title="Netflix Clone App. React, Material-UI & Firebase"
              ghLink="https://github.com/Anislazhar/netflixx-"
              demoLink="https://netflixanis-299b0.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/Amazonnnne.png?raw=true"
              }
              title="Amazon Clone App. React Context Api, Firebase & Material-UI"
              ghLink="https://github.com/Anislazhar/Amazon-Clone"
              demoLink="https://clone-a36c0.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/Bildschirmfoto%202020-11-30%20um%2020.20.58.png?raw=true"
              }
              title="Covid-19 Tracker App. React, Material-UI & Firebase"
              ghLink="https://github.com/Anislazhar/covid19_tracker"
              demoLink="https://covidtracker-ae9b7.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/Bildschirmfoto%202020-11-30%20um%2019.43.51.png?raw=true"
              }
              title="Github profile searcher App. React / Material-UI"
              ghLink="https://github.com/Anislazhar/GitHub_Profile_Search/"
              demoLink="https://github-profile-search-d7fa6.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/ECommerce-React-App.png?raw=true"
              }
              title="E-Commerce App. React Hooks / Redux [Thunk / Saga] / Firebase"
              ghLink="https://github.com/Anislazhar/e-commerce"
              demoLink="https://ecommerce-website-5f55b.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/Bildschirmfoto%202020-11-30%20um%2022.39.02.png?raw=true"
              }
              title="BVG Ticket Tourist Guide App. React & Material-UI "
              ghLink="https://github.com/Anislazhar/BVG-App"
              demoLink="https://anislazhar.github.io/BVG-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/TinderApp.png?raw=true"
              }
              title="Tinder clone. React, Material-UI & Firebase"
              ghLink="https://github.com/Anislazhar/Tinder-Clone"
              demoLink="https://tinder-clone-c4691.web.app/chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://github.com/Anislazhar/AnisLazhar/blob/main/img/5.jpg?raw=true"
              }
              title="Budget Calculator App. HTML, CSS & JavaScript"
              ghLink="https://github.com/Anislazhar/budjetApp"
              demoLink="https://anislazhar.github.io/budjetApp/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
