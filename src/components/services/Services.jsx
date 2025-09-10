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
            <div
              className="service-item d-flex align-items-center mb-4"
              data-aos="fade-right"
            >
              <div className="icon-box me-3">
                <FaMicroscope />
              </div>
              <div>
                <h5 className="fw-bold">Accurate Test Results</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center mb-4"
              data-aos="fade-right"
            >
              <div className="icon-box me-3">
                <FaUserMd />
              </div>
              <div>
                <h5 className="fw-bold">Certified Lab Experts</h5>
                <p>Trusted specialists with proven expertise.</p>
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center"
              data-aos="fade-right"
            >
              <div className="icon-box me-3">
                <FaCogs />
              </div>
              <div>
                <h5 className="fw-bold">Advanced Technology</h5>
                <p>Cutting-edge equipment for accuracy and speed.</p>
              </div>
            </div>
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
            <div
              className="service-item d-flex align-items-center mb-4 justify-content-end"
              data-aos="fade-left"
            >
              <div>
                <h5 className="fw-bold">Fast Turnaround Time</h5>
                <p>Quick and reliable processing every time.</p>
              </div>
              <div className="icon-box ms-3">
                <FaStopwatch />
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center mb-4 justify-content-end"
              data-aos="fade-left"
            >
              <div>
                <h5 className="fw-bold">Reliable Data Analysis</h5>
                <p>Accurate insights for better decisions.</p>
              </div>
              <div className="icon-box ms-3">
                <FaChartLine />
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center justify-content-end"
              data-aos="fade-left"
            >
              <div>
                <h5 className="fw-bold">Trusted By Professionals</h5>
                <p>Preferred by top healthcare providers.</p>
              </div>
              <div className="icon-box ms-3">
                <FaCheckCircle />
              </div>
            </div>
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
            padding: 75px 50px 45px 50px; 
          }

          /* Left side (white background → black text) */
          .left-services h5, 
          .left-services p {
            color: #000;
          }

          /* Right side (gradient background → white text) */
          .right-services h5, 
          .right-services p {
            color: #fff;
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
            border: 2px solid #00FB8A; /* Accent border */
          }

          .left-services .icon-box {
            background: rgba(0,0,0,0.08);
            color: #2AD2C1; /* Primary teal */
          }

          .icon-box:hover {
            transform: scale(1.1);
          }

          .doctor-wrapper { z-index: 10; }
          .doctor-img { max-height: 450px; object-fit: contain; }

          /* ✅ Mobile/Tablet fix */
          @media (max-width: 991px) {
            .services-card {
              flex-direction: column !important;
              text-align: center;
              padding: 40px 20px;
              background: linear-gradient(135deg, #24B7D3, #30EFAD); /* ✅ Full gradient */
            }

            .left-services h5, 
            .left-services p,
            .right-services h5, 
            .right-services p {
              color: #fff !important; /* ✅ White text */
            }

            .left-services .icon-box,
            .right-services .icon-box {
              background: rgba(255,255,255,0.15);
              color: #fff;
              border: 2px solid #00FB8A;
            }

            .left-services, .right-services {
              width: 100%;
              text-align: center !important;
            }
          }

          @media (max-width: 768px) {
            .doctor-wrapper {
              display: none !important;
            }
            .service-item {
              flex-direction: column !important;
              justify-content: center !important;
              align-items: center !important;
              text-align: center !important;
              margin-bottom: 25px;
            }
            .service-item .icon-box {
              margin-bottom: 12px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
