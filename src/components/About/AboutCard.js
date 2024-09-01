import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    // <Card className="quote-card-view">
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p style={{ textAlign: "justify" }}>
    //         Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
    //         from <span className="purple"> Bhubaneswar, India.</span>
    //         <br />
    //         I am currently employed as a software developer at Juspay.
    //         <br />
    //         I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
    //         Mesra.
    //         <br />
    //         <br />
    //         Apart from coding, some other activities that I love to do!
    //       </p>
    //       <ul>
    //         <li className="about-activity">
    //           <ImPointRight /> Playing Games
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Writing Tech Blogs
    //         </li>
    //         <li className="about-activity">
    //           <ImPointRight /> Travelling
    //         </li>
    //       </ul>

    //       <p style={{ color: "rgb(155 126 172)" }}>
    //         "Strive to build things that make a difference!"{" "}
    //       </p>
    //       <footer className="blockquote-footer">Soumyajit</footer>
    //     </blockquote>
    //   </Card.Body>
    // </Card>
    <section className="timeline-container" id="work">
      <div className="timeline">
        <br />
        {/* <h3 style={{ color: 'white', fontWeight: 'bold' }}>
          Work Experience
        </h3> */}
        <ul>
          <li>
            <span>Jun 2024 - Jul 2024</span>
            <div className="content">
              <a  target="_blank" rel="noopener noreferrer">
                <h3>
                  GrapplTech
                </h3>
              </a>
              <p>Developed and maintained web applications using React and Node.js, leading to a 30% improvement in user engagement.</p>
            </div>
          </li>
          <li>
            <span>Nov 2023 - Dec 2023</span>
            <div className="content">
              <a  target="_blank" rel="noopener noreferrer">
                <h3>
                  Suvidha Foundation
                </h3>
              </a>
              <p>Developed a website dedicated to students, aiming to offer free-of-cost, high-quality consultancy services for admissions to foreign universities. 
              Leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack for efficient and effective web development. </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutCard;
