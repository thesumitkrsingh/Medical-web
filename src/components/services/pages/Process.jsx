import React from "react";
import processImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function Process() {
  return (
    <div className="process-page">
      {/* ✅ Banner Section */}
      <div className="process-banner">
        <img src={processImg} alt="Process Banner" />
        <div className="overlay">
          <h1>Process Optimization</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>D. Process Optimization</h2>
          <p>
            From yield and selectivity improvements to energy efficiency and
            waste minimization, we fine-tune processes to achieve sustainable
            outcomes. Our team balances economic, environmental, and safety
            considerations for long-term viability.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our process development and scale-up services are trusted by
            Chemicals, Specialty Materials, Pharmaceuticals, Biotech,
            Agrochemicals, Energy, and Environmental sectors, supporting
            efficient and safe technology commercialization.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .process-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .process-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(70%);
        }
        .process-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 3rem;
          background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          text-align: center;
        }
        .process-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .process-page section {
          margin-bottom: 2rem;
        }
        .process-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .process-page p {
          line-height: 1.7;
          font-size: 1rem;
          color: #444;
        }
        .industries {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
        }

        /* ✅ Responsive */
        @media (max-width: 992px) {
          .process-banner {
            height: 50vh;
          }
          .process-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .process-banner {
            height: 40vh;
          }
          .process-banner h1 {
            font-size: 1.8rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Process;
