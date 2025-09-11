import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer/Footer";

function TestResults() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar forceHomeNavigation={true} />

      <section className="testresults-section py-5">
        <div className="container">
          {/* ✅ Page Heading */}
          <h2
            className="text-center fw-bold mb-3"
            data-aos="fade-up"
            style={{ color: "#2AD2C1" }}
          >
            Our Services
          </h2>
          <p className="text-center mb-5" data-aos="fade-up">
            From research consulting to process scale-up, SpectraCore Analytics
            delivers end-to-end support for academia and industry.
          </p>

          {/* ✅ Service List */}
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">1. Research & Consulting</h5>
                <p>
                  Customized solutions for academic research and industrial R&D,
                  including experimental design, methodology optimization, and
                  execution.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">
                  2. Analytical Testing & Method Development
                </h5>
                <p>
                  Spectroscopy, chromatography, structural, and thermal studies
                  with publication-ready reports validated through accredited
                  partner labs.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">
                  3. Computational Chemistry & Modeling
                </h5>
                <p>
                  Molecular simulations, quantum calculations, and predictive
                  modeling for materials and processes.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">4. Process & Scale-Up Solutions</h5>
                <p>
                  Lab-to-plant process optimization, reactor design, safety
                  studies, and pilot-scale validation.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-right">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">5. Data Analysis & Visualization</h5>
                <p>
                  Processing and interpretation of complex datasets with
                  dashboards, graphs, and statistical insights.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">6. Publication & Reporting Support</h5>
                <p>
                  Manuscripts, patents, grant proposals, and conference
                  materials with clear, accurate scientific writing.
                </p>
              </div>
            </div>

            <div className="col-md-12" data-aos="fade-up">
              <div className="service-box h-100 p-4 shadow-sm rounded">
                <h5 className="fw-bold">7. Process & Scale-Up Solutions</h5>
                <p>
                  End-to-end support for reactor design, scale-up, and process
                  optimization with safe, efficient, and transfer-ready
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Styles */}
        <style>
          {`
          .service-box {
            background: #fff;
            border: 1px solid #eee;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .service-box:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .testresults-section {
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

export default TestResults;
