// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";
// import ContactMe from "../ContactMe";
// import girlWork from "../Home/girlWork.png"

// function Home() {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name">  Advita Bahl</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//               <div className="intro-section" style={{ marginTop: "5px" }}>
//             <p className="intro-text" style={{ fontSize: "18px", color: "#333" }}>
//               Welcome to my personal space! I’m excited to share my journey with you. 
//               Feel free to explore and get in touch if you’d like to collaborate.
//             </p>
//             <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
//             {/* style={{ 
//                 // marginTop: "15px", 
//                 padding: "10px 20px", 
//                 fontSize: "16px", 
//                 backgroundColor: "#f09e83", 
//                 color: "#fff", 
//                 border: "none", 
//                 borderRadius: "5px", 
//                 cursor: "pointer", 
//                 padding: "10px 20px", 
                  
//               }} */}
//                <button
//             data-aos="fade-up"
//             data-aos-duration="1000"
//             onClick={openForm}
//             className="bg-coral-red p-4 text-white text-lg rounded-full w-60 shadow-lg hover:shadow-red-900"
//           >
//             Contact Me
//           </button>

//           {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />}
//             {/* <button 
//               className="intro-button" 
//               >
//               Get in Touch
//             </button> */}
//           </div>
//           </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={girlWork}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;


// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";
// import ContactMe from "../ContactMe";
// import girlWork from "../Home/girlWork.png"

// function Home() {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 10 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name">  Advita Bahl</strong>
//               </h1>

//               {/* Adjusted padding here to reduce space */}
//               <div style={{ padding: "20px 0 20px 40px", textAlign: "left" }}>
//                 <Type />
//               </div>

//               {/* Adjusted margin-top here to reduce space */}
//               <div className="intro-section" style={{ marginTop: "10px" }}>
//                 <p className="intro-text" style={{ fontSize: "18px", color: "#333" }}>
//                   Welcome to my personal space! I’m excited to share my journey with you. 
//                   Feel free to explore and get in touch if you’d like to collaborate.
//                 </p>
//                 <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
//                   <button
//                     data-aos="fade-up"
//                     data-aos-duration="1000"
//                     onClick={openForm}
//                     className="bg-coral-red p-4 text-white text-lg rounded-full w-60 shadow-lg hover:shadow-red-900"
//                   >
//                     Contact Me
//                   </button>

//                   {isFormOpen && <ContactMe onClose={closeForm} onBack={closeForm} />}
//                 </div>
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={girlWork}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";
// import ContactMe from "../ContactMe";
// import girlWork from "../Home/girlWork.png";

// function Home() {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const openForm = () => {
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 10 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Advita Bahl</strong>
//               </h1>

//               <div style={{ padding: "20px 0 20px 40px", textAlign: "left" }}>
//                 <Type />
//               </div>

//               <div className="intro-section" style={{ marginTop: "10px" }}>
//                 <p className="intro-text" style={{ fontSize: "18px", color: "#333" }}>
//                   Welcome to my personal space! I’m excited to share my journey with you. 
//                   Feel free to explore and get in touch if you’d like to collaborate.
//                 </p>
//                 <div className="flex justify-center mt-4">
                  


//                 </div>
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={girlWork}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;


import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactMe from "../ContactMe";
import girlWork from "../Home/girlWork.png";
import me from "../Home/me.png";
import Tilt from "react-parallax-tilt";

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

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
                <p className="intro-text" style={{ fontSize: "18px", color: "#333" }}>
                  Welcome to my personal space! I’m excited to share my journey with you. 
                  Feel free to explore and get in touch if you’d like to collaborate.
                </p>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                  <button className="contact-button" onClick={openForm}>
                    Contact Me
                  </button>
                  {isFormOpen && <ContactMe onClose={closeForm} />}
                </div>
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
      <Home2 />
    </section>
  );
}

export default Home;
