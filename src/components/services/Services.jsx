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
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const toggleShowMore = () => {
    if (showMore) {
      setShowMore(false);
      // collapse hone ke thoda baad scroll kare
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 600);
    } else {
      setShowMore(true);
    }
  };

  const services = [
    {
      id: 1,
      title: "General Diagnostic Testing",
      desc: "We are a leading diagnostic service provider.",
      more: "Detailed insights about General Diagnostic Testing and its benefits for patients.",
      icon: "🧪",
    },
    {
      id: 2,
      title: "Allergy & Sensitivity Testing",
      desc: "Providing hassle-free allergy testing services.",
      more: "Learn more about allergy triggers and personalized solutions.",
      icon: "🌿",
    },
    {
      id: 3,
      title: "Clinical Histopathology Tests",
      desc: "Equipped with world-class machinery.",
      more: "Advanced histopathology tests to detect diseases at cellular level.",
      icon: "🔬",
    },
    {
      id: 4,
      title: "Hormone Insights Testing",
      desc: "Comprehensive hormone diagnostics.",
      more: "Get deeper analysis into hormonal health with advanced tools.",
      icon: "💊",
    },
    {
      id: 5,
      title: "Clinical Microbiology Tests",
      desc: "Full-service Clinical Lab.",
      more: "Identify bacteria, fungi, and viruses with accurate reports.",
      icon: "🦠",
    },
    {
      id: 6,
      title: "Specialized Genetic Testing",
      desc: "Expert genetic screening.",
      more: "Personalized genetic testing for inherited conditions.",
      icon: "🧬",
    },
    {
      id: 7,
      title: "Cardiac Health Screening",
      desc: "Heart-focused early detection.",
      more: "Detect heart disease risks with advanced screenings.",
      icon: "❤️",
    },
    {
      id: 8,
      title: "Cancer Marker Testing",
      desc: "Advanced tumor and cancer tests.",
      more: "Accurate tumor marker detection for early diagnosis.",
      icon: "🎯",
    },
    {
      id: 9,
      title: "Prenatal & Fertility Tests",
      desc: "Supporting families with fertility insights.",
      more: "Comprehensive prenatal care with advanced diagnostics.",
      icon: "👶",
    },
    {
      id: 10,
      title: "Immunology & Infection Tests",
      desc: "Strong immunity & infection diagnostics.",
      more: "Full range of immunology tests for infection detection.",
      icon: "🛡️",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light" ref={containerRef}>
      <div className="container text-center">
        {/* Heading */}
        <p className="text-primary fw-bold">Promising Best Quality Services</p>
        <h2 className="fw-bold mb-4">Our Amazing Services</h2>

        {/* Service Cards with smooth container */}
        <div className={`services-grid row g-4 ${showMore ? "expanded" : ""}`}>
          {services
            .slice(0, showMore ? services.length : 6)
            .map((service, index) => (
              <div
                key={service.id}
                className="col-md-6 col-lg-4 service-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card shadow-sm h-100 border-0 rounded-4 service-card">
                  <div className="card-body text-center">
                    {/* Icon */}
                    <div
                      className="mb-3 fs-1"
                      style={{
                        background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted small">{service.desc}</p>

                    {/* Learn More Button */}
                    <button
                      className="btn btn-sm mt-2 px-3"
                      style={{
                        background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                        color: "#fff",
                        borderRadius: "20px",
                      }}
                      onClick={() => toggleExpand(service.id)}
                    >
                      {expanded === service.id ? "Hide Info ▲" : "Learn More ▼"}
                    </button>

                    {/* Extra Info */}
                    <div
                      className={`extra-info mt-3 text-muted small ${
                        expanded === service.id ? "open" : ""
                      }`}
                    >
                      {service.more}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show More / Less Button */}
        <button
          onClick={toggleShowMore}
          className="btn btn-lg mt-5 px-4"
          style={{
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "30px",
          }}
        >
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* Hover & Smooth CSS */}
      <style>
        {`
          .service-card {
            transition: all 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
          }

          /* Smooth expand for extra info */
          .extra-info {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.5s ease, opacity 0.5s ease;
          }
          .extra-info.open {
            max-height: 200px;
            opacity: 1;
          }

          /* Smooth expand for services grid */
          .services-grid {
            max-height: 1500px;
            overflow: hidden;
            transition: max-height 0.8s ease;
          }
          .services-grid.expanded {
            max-height: 4000px;
          }
        `}
      </style>
    </section>
  );
}

export default Services;
