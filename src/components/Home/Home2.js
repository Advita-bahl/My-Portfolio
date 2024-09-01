import React from "react";
import education from "../Home/education.png"
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ismlogo from "../Home/ismlogo.png"
import me from "../Home/me.png"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <h1 style={{ fontSize: "2.6em" }}>
              Education <span className="purple"> </span>
            </h1>
        {/* <Row>
          <Col md={8} className="home-about-description">
            
            <img src={ismlogo} width={100} alt="img" /> */}

            {/* <h1 className="mt-5 font-palanquin text-xl md:text-3xl leading-normal font-bold text-red-500">
              Indian Institute Of Technology
            </h1>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal">
              <span className=" font-semibold">
                Course Name: Bachelor Of Technology{" "}
              </span>
            </p>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal">
              2021-2025
            </p> */}
             {/* <p className="mt-3 break-words font-montserrat text-sm md:text-lg leading-normal text-slate-gray text-justify">  */}
{/* 
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>  */}
        
           {/* </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="meimg">
              <img src={education} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row> */}

<Row className="education-section">
        {/* Left Column with Image */}
        <Col md={6} className="education-image-column">
          <img src={education} className="img-fluid" alt="education" />
        </Col>

        {/* Right Column with Text */}
        <Col md={6} className="education-text-column">
          {/* College Information */}
          <div className="college-info">
            <img src={ismlogo} alt="College Logo" className="college-logo" />
            <h2 className="college-name">Indian Institute Of Technology [ISM] Dhanbad</h2>
          </div>
          <p className="course-name">Bachelor Of Technology, Department-Mechanical Engineering</p>
          <p className="branch-name">Branch-Mining Machinery Engineering</p>
          <p className="course-duration">2021-2025</p>

          {/* Schooling Information */}
          <h3 className="school-heading">Central Academy, Ajmer (Senior Secondary)          </h3>
          <p className="school-duration">Scored:94.2%, 2020-2021</p>

          <h3 className="school-heading">Sophia Senior Secondary School, Ajmer (Secondary)</h3>
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
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
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
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container> 

/* <div className="education-container">
<div className="left-column">
  <img src={education} alt="Education" className="education-image" />
</div>
<div className="right-column">
  <h2 className="education-heading">Education</h2>
  <div className="education-details">
    <div className="education-item">
      <div className="college-info">
        <img src={ismlogo} alt="College Logo" className="college-logo" />
        <h3>College Name</h3>
      </div>
      <p>Degree Program</p>
      <p>Department</p>
    </div>
    <div className="education-item">
      <h3>12th Schooling</h3>
      <p>School Name</p>
    </div>
    <div className="education-item">
      <h3>10th Schooling</h3>
      <p>School Name</p>
    </div>
  </div>
</div>
</div> */
  );
}
export default Home2;
