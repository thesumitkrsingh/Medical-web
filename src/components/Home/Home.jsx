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
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

function Home() {
  // ✅ Small heading (one time)
  const smallHeading = "Patholab Laboratory Is A Full-Service Clinical Lab";
  const [smallText, setSmallText] = useState("");
  const [smallIndex, setSmallIndex] = useState(0);
  const [smallDone, setSmallDone] = useState(false);

  // ✅ Big heading
  const bigHeading = "Laboratory Service Trusted by Leading Doctors & Patients";
  const [bigText, setBigText] = useState("");
  const [bigIndex, setBigIndex] = useState(0);

  // 🔹 Small heading typewriter
  useEffect(() => {
    if (smallIndex < smallHeading.length) {
      const timeout = setTimeout(() => {
        setSmallText(smallHeading.substring(0, smallIndex + 1));
        setSmallIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setSmallDone(true); // ✅ Once finished, trigger big heading
    }
  }, [smallIndex, smallHeading]);

  // 🔹 Big heading typewriter (starts only after small done)
  useEffect(() => {
    if (!smallDone) return;
    if (bigIndex < bigHeading.length) {
      const timeout = setTimeout(() => {
        setBigText(bigHeading.substring(0, bigIndex + 1));
        setBigIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [bigIndex, smallDone]);

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "calc(100vh - 70px)",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
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
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-lg-6 text-start text-center text-lg-start">
            {/* Small Heading */}
            <h5 className="text-info fw-bold mb-3 small-heading">
              {smallText}
              <span className="cursor">|</span>
            </h5>

            {/* Big Heading */}
            <h1 className="fw-bold mb-4 big-heading">
              {bigText}
              {smallDone && <span className="cursor">|</span>}
            </h1>

            <p className="mb-4 lead">
              We have world class pathologists & lab assistants. We are equipped
              with the best laboratory machinery & reagents. We ensure best
              quality findings.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
              <a
                href="#services"
                className="btn btn-animated px-4 py-2 rounded-pill fw-bold"
              >
                <span>Get Patholab Services</span>
              </a>

              <a
                href="https://wa.me/9815723616?text=Hello!%20I%20want%20to%20book%20a%20Home%20Collection."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-animated-dark px-4 py-2 rounded-pill fw-bold"
              >
                <span>Book A Home Collection</span>
              </a>
            </div>
          </div>

          {/* Right Image (hidden on small screens) */}
          <div className="col-lg-6 d-none d-lg-block text-center">
            <img
              src={bgImage}
              alt="Doctor"
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "500px",
                border: "8px solid rgba(255,255,255,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          .cursor {
            display: inline-block;
            margin-left: 3px;
            width: 2px;
            background: #00c6ff;
            animation: blink 0.8s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Headings Responsive */
          .small-heading {
            font-size: 1rem;
          }
          .big-heading {
            font-size: 2rem;
          }

          @media (min-width: 768px) {
            .small-heading {
              font-size: 1.2rem;
            }
            .big-heading {
              font-size: 2.5rem;
            }
          }

          @media (min-width: 1200px) {
            .small-heading {
              font-size: 1.4rem;
            }
            .big-heading {
              font-size: 3rem;
            }
          }

          /* Button Hover Animation */
          .btn-animated {
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: #fff;
            border: none;
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          .btn-animated span {
            position: relative;
            z-index: 2;
            display: inline-block;
            transition: transform 0.4s ease;
          }
          .btn-animated::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #0072ff, #00c6ff);
            transition: all 0.4s ease;
            z-index: 1;
          }
          .btn-animated:hover::before {
            left: 0;
          }
          .btn-animated:hover span {
            transform: translateX(6px);
          }

          .btn-animated-dark {
            background: #111;
            color: #fff;
            border: none;
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          .btn-animated-dark span {
            position: relative;
            z-index: 2;
            display: inline-block;
            transition: transform 0.4s ease;
          }
          .btn-animated-dark::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #333, #555);
            transition: all 0.4s ease;
            z-index: 1;
          }
          .btn-animated-dark:hover::before {
            left: 0;
          }
          .btn-animated-dark:hover span {
            transform: translateX(6px);
          }
        `}
      </style>
    </section>
  );
}

export default Home;
