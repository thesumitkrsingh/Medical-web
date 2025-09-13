import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Location() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // ✅ Get Directions button → Google Maps direct link
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Hoshiarpur,+Punjab",
      "_blank"
    );
  };

  return (
    <section
      id="location"
      className="py-5"
      style={{ backgroundColor: "#f2f4f8" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Details */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold mb-3" style={{ color: "#2AD2C1" }}>
              Our Offices
            </h2>
            <p className="lead text-muted mb-4">
              At <strong>SpectraCore Analytics</strong>, We deliver integrated R&D solutions—from analytical testing and computational chemistry to process scale-up and data intelligence—turning scientific innovation into commercial reality.
              <br />
              <br />
              📍 <strong>Office Address:</strong> N/A
              <br />
              📧 <strong>Email:</strong> Info@spectracoreAnalytics.com
              <br />
              ☎️ <strong>Phone:</strong> +91 ***** ****
            </p>

            {/* ✅ Button (Teal → Green Gradient) */}
            <button
              onClick={handleGetDirections}
              className="btn px-4 py-2"
              style={{
                background: "linear-gradient(90deg, #24B7D3, #30EFAD)",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(36,183,211,0.3)",
              }}
            >
              Get Directions
            </button>
          </div>

          {/* Right Side - Map */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                title="SpectraCore Analytics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.192233365219!2d75.9050!3d31.5372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af64b6a3a21b9%3A0x3d3c8b0f8c5af4cf!2sHoshiarpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1694000000000"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
