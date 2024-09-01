import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import girlWork from "../Images/girlWork.png";
import Button from "react-bootstrap/Button";
import { AiFillMail } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Advita Bahl</strong>
              </h1>

              <div style={{ padding: "20px 0 20px 40px", textAlign: "left" }}>
                <Type />
              </div>

              <div className="intro-section" style={{ marginTop: "10px" }}>
                <p
                  className="intro-text"
                  style={{ fontSize: "18px", color: "#333" }}
                >
                  Welcome to my personal space! I’m excited to share my journey
                  with you. Feel free to explore and get in touch if you’d like
                  to collaborate.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={girlWork}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Button
        variant="primary"
        href="mailto:advitabahl@gmail.com"
        target="_blank"
        style={{ maxWidth: "250px", marginTop: "-190px" }}
      >
        <AiFillMail />
        &nbsp;Contact Me
      </Button>

      <Home2 />
    </section>
  );
}

export default Home;
