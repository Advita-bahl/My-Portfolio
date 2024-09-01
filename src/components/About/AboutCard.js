import React from "react";

function AboutCard() {
  return (
    <section className="timeline-container" id="work">
      <div className="timeline">
        <br />
        <ul>
          <li>
            <span>Jun 2024 - Jul 2024</span>
            <div className="content">
              <a target="_blank" rel="noopener noreferrer">
                <h3>GrapplTech</h3>
              </a>
              <p>
                Developed and maintained web applications using React and
                Node.js, leading to a 30% improvement in user engagement.
              </p>
            </div>
          </li>
          <li>
            <span>Nov 2023 - Dec 2023</span>
            <div className="content">
              <a target="_blank" rel="noopener noreferrer">
                <h3>Suvidha Foundation</h3>
              </a>
              <p>
                Developed a website dedicated to students, aiming to offer
                free-of-cost, high-quality consultancy services for admissions
                to foreign universities. Leveraging the MERN (MongoDB,
                Express.js, React.js, Node.js) stack for efficient and effective
                web development.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutCard;
