// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Services() {
//   const [showMore, setShowMore] = useState(false);
//   const [expanded, setExpanded] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const toggleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   const services = [
//     {
//       id: 1,
//       title: "General Diagnostic Testing",
//       desc: "We are a leading diagnostic service provider.",
//       more: "Detailed insights about General Diagnostic Testing and its benefits for patients.",
//       icon: "🧪",
//     },
//     {
//       id: 2,
//       title: "Allergy & Sensitivity Testing",
//       desc: "Providing hassle-free allergy testing services.",
//       more: "Learn more about allergy triggers and personalized solutions.",
//       icon: "🌿",
//     },
//     {
//       id: 3,
//       title: "Clinical Histopathology Tests",
//       desc: "Equipped with world-class machinery.",
//       more: "Advanced histopathology tests to detect diseases at cellular level.",
//       icon: "🔬",
//     },
//     {
//       id: 4,
//       title: "Hormone Insights Testing",
//       desc: "Comprehensive hormone diagnostics.",
//       more: "Get deeper analysis into hormonal health with advanced tools.",
//       icon: "💊",
//     },
//     {
//       id: 5,
//       title: "Clinical Microbiology Tests",
//       desc: "Full-service Clinical Lab.",
//       more: "Identify bacteria, fungi, and viruses with accurate reports.",
//       icon: "🦠",
//     },
//     {
//       id: 6,
//       title: "Specialized Genetic Testing",
//       desc: "Expert genetic screening.",
//       more: "Personalized genetic testing for inherited conditions.",
//       icon: "🧬",
//     },
//     {
//       id: 7,
//       title: "Cardiac Health Screening",
//       desc: "Heart-focused early detection.",
//       more: "Detect heart disease risks with advanced screenings.",
//       icon: "❤️",
//     },
//     {
//       id: 8,
//       title: "Cancer Marker Testing",
//       desc: "Advanced tumor and cancer tests.",
//       more: "Accurate tumor marker detection for early diagnosis.",
//       icon: "🎯",
//     },
//     {
//       id: 9,
//       title: "Prenatal & Fertility Tests",
//       desc: "Supporting families with fertility insights.",
//       more: "Comprehensive prenatal care with advanced diagnostics.",
//       icon: "👶",
//     },
//     {
//       id: 10,
//       title: "Immunology & Infection Tests",
//       desc: "Strong immunity & infection diagnostics.",
//       more: "Full range of immunology tests for infection detection.",
//       icon: "🛡️",
//     },
//   ];

//   const visibleServices = showMore ? services : services.slice(0, 6);

//   return (
//     <section id="services" className="py-5 bg-light">
//       <div className="container text-center">
//         {/* Heading */}
//         <p className="text-primary fw-bold">Promising Best Quality Services</p>
//         <h2 className="fw-bold mb-4">Our Amazing Services</h2>

//         {/* Service Cards */}
//         <div className="row g-4">
//           {visibleServices.map((service, index) => (
//             <div
//               key={service.id}
//               className="col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="card shadow-sm h-100 border-0 rounded-4 service-card">
//                 <div className="card-body text-center">
//                   {/* Icon */}
//                   <div
//                     className="mb-3 fs-1"
//                     style={{
//                       background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {service.icon}
//                   </div>

//                   {/* Title */}
//                   <h5 className="fw-bold">{service.title}</h5>
//                   <p className="text-muted small">{service.desc}</p>

//                   {/* Learn More Button */}
//                   <button
//                     className="btn btn-sm mt-2 px-3"
//                     style={{
//                       background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                       color: "#fff",
//                       borderRadius: "20px",
//                     }}
//                     onClick={() => toggleExpand(service.id)}
//                   >
//                     {expanded === service.id ? "Hide Info ▲" : "Learn More ▼"}
//                   </button>

//                   {/* Extra Info */}
//                   <div
//                     className={`extra-info mt-3 text-muted small animate__animated ${
//                       expanded === service.id ? "animate__fadeInDown" : "d-none"
//                     }`}
//                   >
//                     {service.more}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More / Less Button */}
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="btn btn-lg mt-5 px-4"
//           style={{
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             color: "#fff",
//             fontWeight: "bold",
//             borderRadius: "30px",
//           }}
//         >
//           {showMore ? "Show Less ▲" : "Show More ▼"}
//         </button>
//       </div>

//       {/* Hover Effects */}
//       <style>
//         {`
//           .service-card {
//             transition: all 0.3s ease;
//           }
//           .service-card:hover {
//             transform: translateY(-10px) scale(1.03);
//             box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Services;
import React, { useEffect } from "react";
import {
  FaMicroscope,
  FaUserMd,
  FaCogs,
  FaStopwatch,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import doctorImg from "../../assets/images/doctor.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
      once: true,
    });
  }, []);

  return (
    <section className="services-section py-5">
      <div className="container">
        {/* ✅ Heading with New Colors */}
        <h6
          className="text-center fw-bold"
          data-aos="fade-up"
          style={{ color: "#2AD2C1" }}
        >
          Promising Best Quality Services
        </h6>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Our Amazing <span style={{ color: "#00FB8A" }}>Services</span>
        </h2>

        {/* Main Wrapper */}
        <div className="services-card" data-aos="zoom-in">
          {/* Left (White side) */}
          <div className="service-list left">
            <div className="service-item" data-aos="fade-right">
              <div className="icon-box teal">
                <FaMicroscope />
              </div>
              <div>
                <h5 className="fw-bold">Accurate Test Results</h5>
                <p>
                  Delivering precise, reliable results for confident decisions.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-right">
              <div className="icon-box teal">
                <FaUserMd />
              </div>
              <div>
                <h5 className="fw-bold">Certified Lab Experts</h5>
                <p>Trusted specialists with proven expertise.</p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-right">
              <div className="icon-box teal">
                <FaCogs />
              </div>
              <div>
                <h5 className="fw-bold">Advanced Technology</h5>
                <p>Cutting-edge equipment for accuracy and speed.</p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="doctor-wrapper" data-aos="zoom-in-up">
            <img src={doctorImg} alt="Doctor" className="doctor-img" />
          </div>

          {/* Right (Gradient side) */}
          <div className="service-list right">
            <div className="service-item" data-aos="fade-left">
              <div>
                <h5 className="fw-bold">Fast Turnaround Time</h5>
                <p>Quick and reliable processing every time.</p>
              </div>
              <div className="icon-box white">
                <FaStopwatch />
              </div>
            </div>

            <div className="service-item" data-aos="fade-left">
              <div>
                <h5 className="fw-bold">Reliable Data Analysis</h5>
                <p>Accurate insights for better decisions.</p>
              </div>
              <div className="icon-box white">
                <FaChartLine />
              </div>
            </div>

            <div className="service-item" data-aos="fade-left">
              <div>
                <h5 className="fw-bold">Trusted By Professionals</h5>
                <p>Preferred by top healthcare providers.</p>
              </div>
              <div className="icon-box white">
                <FaCheckCircle />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .services-card {
          display: flex;
          justify-content: space-between;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          position: relative;
        }

        /* Left side white */
        .service-list.left {
          flex: 1;
          background: #fff;
          padding: 40px;
          color: #333;
        }

        /* Right side gradient */
        .service-list.right {
          flex: 1;
          background: linear-gradient(135deg, #24B7D3, #30EFAD);
          padding: 40px;
          color: #fff;
        }

        .service-item {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          gap: 15px;
        }

        .service-item h5 { margin: 0; }
        .service-item p { margin: 0; font-size: 14px; }

        /* ✅ Icon styles */
        .icon-box {
          width: 55px;
          height: 55px;
          border-radius: 12px;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .icon-box:hover { transform: scale(1.1); }

        /* Left side icons - Teal */
        .icon-box.teal {
          background: #2AD2C1;
          color: #fff;
        }

        /* Right side icons - White with accent border */
        .icon-box.white {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          border: 2px solid #00FB8A;
        }

        .doctor-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .doctor-img {
          max-height: 450px;
          object-fit: contain;
        }

        /* ✅ Responsive */
        @media (max-width: 991px) {
          .services-card {
            flex-direction: column;
          }
          .service-list.left,
          .service-list.right {
            width: 100%;
            text-align: center;
          }
          .service-item {
            justify-content: center;
            flex-direction: column;
          }
          .doctor-wrapper { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Services;
