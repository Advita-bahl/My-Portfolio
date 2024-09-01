import React from "react";
import education from "../Images/education.png";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ismlogo from "../Images/ismlogo.png";
import me from "../Images/me.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1 style={{ fontSize: "2.6em" }}>
          Education <span className="purple"> </span>
        </h1>

        <Row className="education-section">
          <Col md={6} className="education-image-column">
            <img src={education} className="img-fluid" alt="education" />
          </Col>

          <Col md={6} className="education-text-column">
            {/* College Information */}
            <div className="college-info">
              <img src={ismlogo} alt="College Logo" className="college-logo" />
              <h2 className="college-name">
                Indian Institute Of Technology [ISM] Dhanbad
              </h2>
            </div>
            <p className="course-name">
              Bachelor Of Technology, Department-Mechanical Engineering
            </p>
            <p className="branch-name">Branch-Mining Machinery Engineering</p>
            <p className="course-duration">2021-2025</p>

            {/* Schooling Information */}
            <h3 className="school-heading">
              Central Academy, Ajmer (Senior Secondary){" "}
            </h3>
            <p className="school-duration">Scored:94.2%, 2020-2021</p>

            <h3 className="school-heading">
              Sophia Senior Secondary School, Ajmer (Secondary)
            </h3>
            <p className="school-duration">Scored:92.8%,2018-2019</p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Advita-bahl"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/advita-bahl-977876233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:advitabahl@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
