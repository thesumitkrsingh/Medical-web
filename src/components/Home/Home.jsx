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
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg"; // local image import

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "calc(100vh - 70px)", // navbar ki height minus
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
}

export default Home;
