// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Home() {
//   const text = "Welcome to SpectraCore Analytics 🚀"; // jo text chahiye
//   const [displayedText, setDisplayedText] = useState("");
//   const [subIndex, setSubIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting) {
//           // typing mode
//           setDisplayedText(text.substring(0, subIndex + 1));
//           setSubIndex((prev) => prev + 1);

//           if (subIndex + 1 === text.length) {
//             setTimeout(() => setIsDeleting(true), 1500); // thoda rukne ke baad delete start
//           }
//         } else {
//           // deleting mode
//           setDisplayedText(text.substring(0, subIndex - 1));
//           setSubIndex((prev) => prev - 1);

//           if (subIndex === 0) {
//             setIsDeleting(false);
//           }
//         }
//       },
//       isDeleting ? 80 : 150
//     ); // delete fast, type slow

//     return () => clearTimeout(timeout);
//   }, [subIndex, isDeleting, text]);

//   return (
//     <section
//       id="home"
//       className="d-flex align-items-center justify-content-center text-center text-white"
//       style={{
//         height: "100vh",
//         backgroundImage:
//           "url('https://source.unsplash.com/1600x900/?technology,ai')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "rgba(0,0,0,0.6)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         <h1
//           className="display-5 fw-bold"
//           style={{
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             minHeight: "120px",
//           }}
//         >
//           {displayedText}
//           <span className="cursor">|</span>
//         </h1>

//         {/* WhatsApp Button */}
//         <a
//           href="https://wa.me/9815723616"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-lg mt-4"
//           style={{
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             color: "#fff",
//             fontWeight: "bold",
//             borderRadius: "30px",
//             padding: "12px 25px",
//           }}
//         >
//           📅 Make Appointment
//         </a>
//       </div>

//       {/* Cursor Blinking */}
//       <style>
//         {`
//           .cursor {
//             display: inline-block;
//             margin-left: 5px;
//             width: 2px;
//             background: #02c8faff;
//             animation: blink 0.8s infinite;
//           }
//           @keyframes blink {
//             0% { opacity: 1; }
//             50% { opacity: 0; }
//             100% { opacity: 1; }
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Home;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg"; // local image import

// function Home() {
//   return (
//     <section
//       id="home"
//       className="d-flex align-items-center justify-content-center text-center text-white"
//       style={{
//         height: "calc(100vh - 70px)", // navbar ki height minus
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "rgba(0,0,0,0.3)",
//           zIndex: 1,
//         }}
//       ></div>
//     </section>
//   );
// }

// export default Home;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container-fluid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div className="row w-100" style={{ minHeight: "85vh" }}>
          {/* Left Content - Upar */}
          <div className="col-lg-6 d-flex flex-column justify-content-start text-start pt-5 ps-5">
            <p
              className="text-info fw-bold mb-3"
              style={{ letterSpacing: "2px", fontSize: "0.95rem" }}
            >
              [ INNOVATIVE SCIENCE ]
            </p>
            <h1 className="hero-heading mb-0">Don’t Be</h1>
            <h1 className="hero-heading">Next Target</h1>
          </div>

          {/* Right Content - Niche */}
          <div className="col-lg-6 d-flex flex-column justify-content-end text-lg-end text-start pb-5 pe-5">
            <div>
              <h1 className="hero-heading mb-0">Stay</h1>
              <h1 className="hero-heading">
                Protected<span className="text-info">.</span>
              </h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "1rem",
                  maxWidth: "340px",
                  marginLeft: "auto",
                  marginRight: "0",
                }}
              >
                Leading science that shapes patient futures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Right Side) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "25px",
          textAlign: "right",
          zIndex: 2,
        }}
      >
        <a
          href="#services"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          ↓ Scroll to our site
        </a>
      </div>

      {/* CSS */}
      <style>
        {`
          .hero-heading {
            font-weight: 700;
            font-size: 2.3rem;
            line-height: 1.2;
          }

          @media (min-width: 768px) {
            .hero-heading {
              font-size: 3rem;
            }
          }

          @media (min-width: 1200px) {
            .hero-heading {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Home;
