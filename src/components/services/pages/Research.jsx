import React from "react";
import researchImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function Research() {
  return (
    <div className="research-page">
      {/* ✅ Banner Section */}
      <div className="research-banner">
        <img src={researchImg} alt="Research Banner" />
        <div className="overlay">
          <h1>Research & Consulting</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>A. Research & Consulting</h2>
          <p>
            We specialize in innovative materials development including
            nanomaterials, polymers, surface coatings, and composites tailored
            to meet client needs. Our industrial and applied chemistry expertise
            helps troubleshoot processes, identify root causes of failures, and
            improve products for enhanced performance and durability. We provide
            comprehensive literature landscaping, technology scouting, and
            patent analysis including freedom-to-operate (FTO) summaries to keep
            clients ahead of the competition. Experimental design (DoE) and
            validation studies ensure rigorous methodology and reliable results
            supporting research and commercial objectives.
          </p>
        </section>

        <section>
          <h2>B. Analytical Testing & Method Development</h2>
          <p>
            Our analytical testing capabilities include a broad range of
            spectroscopic, chromatographic, elemental, diffraction, and thermal
            techniques performed in-house and via NABL-accredited partner
            laboratories. We develop and validate methods following ICH and ISO
            guidelines, ensuring accuracy, reproducibility, and compliance. Our
            services span UV-Vis, FT-IR, Raman, NMR, GC, HPLC, LC-MS/MS, XRF,
            ICP, XRD, SEM, TEM, TGA, DSC, rheology, and physical property
            testing such as pH and conductivity, supporting diverse industry
            applications.
          </p>
        </section>

        <section>
          <h2>C. Computational Chemistry & Modeling</h2>
          <p>
            Using advanced molecular modeling methods including quantum
            mechanics (QM), density functional theory (DFT), and molecular
            dynamics (MD), we simulate materials and small molecules to predict
            properties and optimize performance. We employ QSAR/QSPR,
            cheminformatics, and docking approaches for relevant biological or
            materials interactions. Process modeling covers kinetics, mass and
            heat transfer, and reaction engineering, supported by numerical
            analysis tools like Python, MATLAB, and COMSOL for comprehensive
            chemical process insights.
          </p>
        </section>

        <section>
          <h2>D. Process & Scale-Up Solutions</h2>
          <p>
            Our expertise covers kinetics analysis, reactor selection, scale-up
            calculations, and hazard & operability studies to translate
            lab-scale processes to commercial scale efficiently and safely. We
            optimize yield, selectivity, energy use, and environmental health
            and safety (EHS) factors. Tech-transfer packages include detailed
            SOPs, batch records, and control parameters to facilitate smooth
            technology transition from R&D to manufacturing.
          </p>
        </section>

        <section>
          <h2>E. Data Analysis & Visualization</h2>
          <p>
            We provide statistical analysis services including design of
            experiments (DoE), regression modeling, multivariate analysis
            (PCA/PLS), and forecasting to extract meaningful insights from
            complex chemical data. Custom dashboards and reproducible reports
            via Python notebooks enable interactive data exploration. We enforce
            rigorous data cleaning, integrity checks, and maintain
            version-controlled repositories to uphold data quality and
            traceability.
          </p>
        </section>

        <section>
          <h2>F. Scientific Writing & Publication Support</h2>
          <p>
            Our writing team supports manuscript preparation, thesis drafting,
            grant applications, and patent documents (non-legal) with expertise
            in scientific expression. Services extend to journal selection,
            formatting, producing publication-ready graphics and figures, and
            crafting impactful technical presentations and training materials to
            enhance scientific communication.
          </p>
        </section>

        <section>
          <h2>G. Training & Capability Building</h2>
          <p>
            We offer tailored short courses and workshops on analytical
            techniques, materials characterization, statistics/DoE, Python for
            chemists, and scientific writing. These programs meet the needs of
            both academic institutions and industry, with flexible onsite or
            virtual delivery to build technical skills and research capability
            in chemistry professionals.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our services cater to Chemicals & Specialty Chemicals, Polymers,
            Paints & Coatings, Pharmaceuticals & Biotech, Energy & Environment
            sectors including battery materials and water treatment, Food &
            Agriculture, and Academic & Government research labs requiring
            project support, advanced analysis, and publication assistance.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .research-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .research-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(70%);
        }
        .research-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 3rem;
          background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          text-align: center;
        }
        .research-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .research-page section {
          margin-bottom: 2rem;
        }
        .research-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .research-page p {
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
          .research-banner {
            height: 50vh;
          }
          .research-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .research-banner {
            height: 40vh;
          }
          .research-banner h1 {
            font-size: 1.8rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Research;
