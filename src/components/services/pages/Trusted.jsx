// src/components/pages/Trusted.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer/Footer";

function Trusted() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar forceHomeNavigation={true} />

      <section className="trusted-section py-5">
        <div className="container">
          {/* ✅ Page Heading */}
          <h2
            className="text-center fw-bold mb-3"
            data-aos="fade-up"
            style={{ color: "#2AD2C1" }}
          >
            Trusted by Healthcare Experts
          </h2>
          <p className="text-center mb-5" data-aos="fade-up">
            SpectraCore Analytics is trusted by doctors, hospitals, and patients
            for delivering accurate, reliable, and timely solutions in medical
            analytics.
          </p>

          {/* ✅ Intro */}
          <div className="mb-5 text-center" data-aos="fade-up">
            <h4 className="fw-bold">Why Trust Us?</h4>
            <p>
              We maintain the highest standards of accuracy, security, and
              transparency in our medical data analysis and reporting. Our
              mission is to build confidence in every result we deliver.
            </p>
          </div>

          {/* ✅ Trusted Features List */}
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="trusted-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">1. Recognized Quality Standards</h5>
                <p>
                  Certified by top healthcare authorities and aligned with
                  international diagnostic benchmarks.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="trusted-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">2. Data Security First</h5>
                <p>
                  Advanced encryption and strict confidentiality protocols keep
                  your medical data fully protected.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <div className="trusted-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">3. Trusted Partnerships</h5>
                <p>
                  Collaborating with reputed hospitals, clinics, and research
                  centers worldwide.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="trusted-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">4. Consistent Results</h5>
                <p>
                  Accuracy and reliability ensured across every report, every
                  time—no compromises.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Styles */}
        <style>
          {`
          .trusted-box {
            background: #fff;
            border: 1px solid #eee;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .trusted-box:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .trusted-section {
            background: #f9fdfd;
            padding-top: 100px; /* ✅ Navbar ke liye gap */
          }
          h5 {
            color: #2AD2C1;
          }
        `}
        </style>
      </section>

      <Footer />
    </>
  );
}

export default Trusted;
