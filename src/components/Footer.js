import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
   
        <Col md="5" className="footer-copywright">
          <h3>Copyright © {year} AB</h3>
        </Col>
        <Col md="6" className="footer-body">
        <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Advita-bahl"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  // className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/advita-bahl-977876233/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  // className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:advitabahl@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  // className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
