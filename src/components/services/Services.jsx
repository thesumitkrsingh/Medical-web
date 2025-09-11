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
import { Link } from "react-router-dom";

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
        {/* ✅ Heading */}
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

        {/* ✅ Main Card */}
        <div
          className="services-card position-relative d-flex align-items-center justify-content-between px-5 py-4"
          data-aos="zoom-in"
        >
          {/* Left services */}
          <div className="service-list left-services">
            <Link to="/services/test-results" className="service-link">
              <div
                className="service-item d-flex align-items-center mb-4"
                data-aos="fade-right"
              >
                <div className="icon-box me-3">
                  <FaMicroscope />
                </div>
                <div>
                  <h5 className="fw-bold service-header">
                    Accurate Test Results
                  </h5>
                  <p>
                    Delivering precise, reliable results for{" "}
                    <p>confident decision-making.</p>
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/services/lab-experts" className="service-link">
              <div
                className="service-item d-flex align-items-center mb-4"
                data-aos="fade-right"
              >
                <div className="icon-box me-3">
                  <FaUserMd />
                </div>
                <div>
                  <h5 className="fw-bold service-header">
                    Certified Lab Experts
                  </h5>
                  <p>Trusted specialists with proven expertise.</p>
                </div>
              </div>
            </Link>

            <Link to="/services/technology" className="service-link">
              <div
                className="service-item d-flex align-items-center"
                data-aos="fade-right"
              >
                <div className="icon-box me-3">
                  <FaCogs />
                </div>
                <div>
                  <h5 className="fw-bold service-header">
                    Advanced Technology
                  </h5>
                  <p>Cutting-edge equipment for accuracy and speed.</p>
                </div>
              </div>
            </Link>
          </div>

          {/* ✅ Doctor Image in Center */}
          <div
            className="doctor-wrapper position-absolute top-50 start-50 translate-middle"
            data-aos="zoom-in-up"
          >
            <img src={doctorImg} alt="Doctor" className="doctor-img" />
          </div>

          {/* Right services */}
          <div className="service-list text-end right-services">
            <Link to="/services/turnaround" className="service-link">
              <div
                className="service-item d-flex align-items-center mb-4 justify-content-end"
                data-aos="fade-left"
              >
                <div>
                  <h5 className="fw-bold service-header">
                    Fast Turnaround Time
                  </h5>
                  <p>Quick and reliable processing every time.</p>
                </div>
                <div className="icon-box ms-3">
                  <FaStopwatch />
                </div>
              </div>
            </Link>

            <Link to="/services/analysis" className="service-link">
              <div
                className="service-item d-flex align-items-center mb-4 justify-content-end"
                data-aos="fade-left"
              >
                <div>
                  <h5 className="fw-bold service-header">
                    Reliable Data Analysis
                  </h5>
                  <p>Accurate insights for better decisions.</p>
                </div>
                <div className="icon-box ms-3">
                  <FaChartLine />
                </div>
              </div>
            </Link>

            <Link to="/services/trusted" className="service-link">
              <div
                className="service-item d-flex align-items-center justify-content-end"
                data-aos="fade-left"
              >
                <div>
                  <h5 className="fw-bold service-header">
                    Trusted By Professionals
                  </h5>
                  <p>Preferred by top healthcare providers.</p>
                </div>
                <div className="icon-box ms-3">
                  <FaCheckCircle />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Styles */}
      <style>
        {`
          .services-card {
            background: linear-gradient(to right, #fff 50%, #24B7D3 50%, #30EFAD 100%);
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            overflow: hidden;
            padding: 75px 50px 45px 50px; /* 🔥 bottom kam kiya */
          }
          .left-services h5, .left-services p { color: #000; }
          .right-services h5, .right-services p { color: #fff; }

          .service-link {
            text-decoration: none;
            color: inherit;
            display: block;
          }

          .service-item {
            position: relative;
            z-index: 20;
            cursor: pointer;
            border-radius: 10px;
            padding: 8px;
            transition: background 0.3s ease;
          }
          .service-item:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .icon-box {
            width: 55px;
            height: 55px;
            border-radius: 12px;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          .right-services .icon-box {
            background: rgba(255,255,255,0.15);
            color: #fff;
            border: 2px solid #00FB8A;
          }
          .left-services .icon-box {
            background: rgba(0,0,0,0.08);
            color: #2AD2C1;
          }
          .icon-box:hover { transform: scale(1.1); }

          .doctor-wrapper { 
            z-index: 1;
            transform: translate(-50%, -50%) !important;
          }  
          .doctor-img { 
            max-height: 480px;   /* 🔥 slightly bigger */
            object-fit: contain;
            margin-bottom: 0;    /* 🔥 cut hone se bacha liya */
          }

          /* ✅ Header link styling */
          .service-header {
            transition: color 0.3s ease;
          }
          .service-header:hover {
            color: #00FB8A;
          }

          @media (max-width: 991px) and (min-width: 768px) {
            .services-card {
              flex-direction: column !important;
              padding: 50px 30px;
              background: linear-gradient(135deg, #24B7D3, #30EFAD); 
            }
            .doctor-wrapper {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              transform: none !important;
              margin: 30px auto 0 auto;
              text-align: center;
            }
            .doctor-img { max-height: 320px; width: auto; }
            .service-list { text-align: center !important; margin-bottom: 25px; }
            .service-item { justify-content: center !important; }
            .left-services h5, .left-services p,
            .right-services h5, .right-services p { color: #fff !important; }
          }

          @media (max-width: 768px) {
            .doctor-wrapper { display: none !important; }
            .service-item {
              flex-direction: column !important;
              justify-content: center !important;
              align-items: center !important;
              text-align: center !important;
              margin-bottom: 25px;
            }
            .service-item .icon-box { margin-bottom: 12px; }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
