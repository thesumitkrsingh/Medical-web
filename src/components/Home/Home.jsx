import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const time = e.target.time.value;
    const service = e.target.service.value;
    const messageText = e.target.message.value;

    const message = `Hello, I want to book an appointment.%0A
    Name: ${name}%0A
    Email: ${email}%0A
    Phone: ${phone}%0A
    Date: ${date}%0A
    Time: ${time}%0A
    Service: ${service}%0A
    Message: ${messageText}`;

    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container-fluid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          className="row w-100 flex-column flex-lg-row"
          style={{ minHeight: "85vh" }}
        >
          {/* Left Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start pt-5 ps-lg-5">
            <p
              className="text-info fw-bold mb-3"
              style={{ letterSpacing: "2px", fontSize: "0.9rem" }}
            >
              [ INNOVATIVE SCIENCE ]
            </p>
            <h1 className="hero-heading mb-0">Don’t Be</h1>
            <h1 className="hero-heading">Next Target</h1>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
              <a
                href="#services"
                className="btn btn-primary me-sm-3 mb-2 mb-sm-0 custom-btn"
              >
                Get Started
              </a>
              <a href="#services" className="btn btn-outline-light custom-btn">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-end pb-5 pe-lg-5 mt-4 mt-lg-0">
            <div>
              <h1 className="hero-heading mb-0">Stay</h1>
              <h1 className="hero-heading">
                Protected<span className="text-info">.</span>
              </h1>
              <p
                className="mt-3 mx-auto mx-lg-0"
                style={{
                  fontSize: "1rem",
                  maxWidth: "340px",
                }}
              >
                Leading science that shapes patient futures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Make Appointment Button */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "30px",
          zIndex: 3,
        }}
        className="d-none d-md-block"
      >
        <button
          className="btn btn-primary fw-bold custom-btn"
          onClick={() => setShowForm(true)}
        >
          Make Appointment
        </button>
      </div>

      {/* Mobile Floating Button */}
      <div
        className="d-block d-md-none"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1001,
        }}
      >
        <button
          className="btn btn-primary fw-bold custom-btn"
          onClick={() => setShowForm(true)}
        >
          Make Appointment
        </button>
      </div>

      {/* Appointment Form Modal */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              padding: "25px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "400px",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h4 className="mb-3 text-center">Book Appointment</h4>
            <form onSubmit={handleWhatsAppSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Service Type</label>
                <select className="form-select" name="service" required>
                  <option value="">-- Select Service --</option>
                  <option value="General Consultation">
                    General Consultation
                  </option>
                  <option value="Lab Test">Lab Test</option>
                  <option value="Health Checkup">Health Checkup</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  placeholder="Additional details..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100 mb-2">
                Send via WhatsApp
              </button>
              <button
                type="button"
                className="btn btn-danger w-100"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CSS */}
      <style>
        {`
          .hero-heading {
            font-weight: 700;
            font-size: 2rem;
            line-height: 1.2;
          }

          .custom-btn {
            padding: 10px 22px;
            border-radius: 30px;
            transition: all 0.3s ease;
          }
          .custom-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }

          @media (min-width: 768px) {
            .hero-heading {
              font-size: 3rem;
            }
          }

          @media (min-width: 1200px) {
            .hero-heading {
              font-size: 4rem;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Home;
