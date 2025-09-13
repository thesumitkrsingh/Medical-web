import React from "react";
import extendedProcessImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function ExtendedProcess() {
  return (
    <div className="extendedprocess-page">
      {/* ✅ Banner Section */}
      <div className="extendedprocess-banner">
        <img src={extendedProcessImg} alt="Extended Process Banner" />
        <div className="overlay">
          <h1>G. Tech Transfer & Commercialization</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>G. Tech Transfer & Commercialization</h2>
          <p>
            We deliver complete technology transfer packages including detailed
            engineering documentation, quality protocols, and operator training
            modules to ensure smooth transition from R&D to commercial
            production.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our extended process development services cater to Chemicals,
            Petrochemicals, Polymers, Pharmaceuticals, Agrochemicals, Energy,
            and Environmental industries, ensuring safe, sustainable, and
            cost-effective commercialization.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .extendedprocess-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .extendedprocess-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(70%);
        }
        .extendedprocess-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 3rem;
          background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          text-align: center;
        }
        .extendedprocess-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .extendedprocess-page section {
          margin-bottom: 2rem;
        }
        .extendedprocess-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .extendedprocess-page p {
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
          .extendedprocess-banner {
            height: 50vh;
          }
          .extendedprocess-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .extendedprocess-banner {
            height: 40vh;
          }
          .extendedprocess-banner h1 {
            font-size: 1.8rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ExtendedProcess;
