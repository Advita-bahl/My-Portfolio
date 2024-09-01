import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memories from "./img/memory.png";
import synergize from "./img/synergize.png";
import tourism from "./img/tourism.png";
import weather from "./img/weather.png"
import os from "./img/os.png";
import jan from "./img/jan.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synergize}
              isBlog={false}
              title="SynergizeMate"
              description="Developed a college-specific platform that enables students to register and connect with ideal project partners for hackathons and based on customized criteria like branch, role, and year."
              ghLink="https://github.com/Advita-bahl/Wil-_team"
              demoLink="https://wil-team-client.onrender.com/"
            />
          </Col>
      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jan}
              isBlog={false}
              title="Jan-Arogya Connect"
              description="Designed and implemented a solution that streamlined OPD queues, bed management, and patient admissions, integrating multiple hospital functions into a single system."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://jan-arogya-connect.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Virtual Memory Management"
              description="This is an operating system project which serves the purpose of visualizing virtual memory paging algorithms including First in First Out, Least Recently Used."
              ghLink="https://github.com/Advita-bahl/Memory-Management"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memory Matching Game"
              description="The memory matching game is a classic and engaging activity that challenges and entertains players of all ages. This captivating game is designed to improve memory skills while providing a fun and interactive experience."
              ghLink="https://github.com/Advita-bahl/Memory-Matching-game"
              demoLink="https://memory-matching-game-eight.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="Tourism Website"
              description="The tourism website is a comprehensive online platform that serves as your ultimate guide to exploring the wonders of your destination."
              ghLink="https://github.com/Advita-bahl/Tourism_Website"
              demoLink=" https://tourism-website-chi.vercel.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A basic weather app which displays the weather of the entered place."
              ghLink="https://github.com/Advita-bahl/Weather-App"
              demoLink="https://weather-app-five-rouge-48.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
