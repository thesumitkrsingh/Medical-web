import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const form = useRef();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i333sph", "template_pb4hbyk", form.current, {
        publicKey: "FXZ9pkNkJxj6TGcv7",
      })
      .then(
        () => {
          alert("✅ Thank you for your feedback!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  const faqs = [
    {
      q: "What services does SpectraCore Analytics provide?",
      a: "We provide advanced data analytics, AI-driven solutions, and custom business insights.",
    },
    {
      q: "Who can benefit from your services?",
      a: "Healthcare, finance, retail, startups, and enterprises across industries.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we work with global clients and offer tailored solutions.",
    },
    {
      q: "How do you ensure data security and confidentiality?",
      a: "We follow strict data protection policies and use advanced encryption.",
    },
    {
      q: "Can I request customized solutions?",
      a: "Yes, we design solutions tailored to your specific needs.",
    },
    {
      q: "What is your typical project workflow?",
      a: "Our workflow includes consultation, strategy, implementation, and ongoing support.",
    },
  ];

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-start">
          {/* ✅ Left Side FAQ */}
          <div className="col-lg-5 mb-4" data-aos="fade-right">
            <h5 className="fw-bold mb-2" style={{ color: "#2AD2C1" }}>
              FAQ'S
            </h5>
            <h2 className="fw-bold mb-4" style={{ color: "#2AD2C1" }}>
              Frequently Asked Questions
            </h2>

            <div className="accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-2 p-3 rounded shadow-sm"
                  style={{
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    border: "1px solid #e0e0e0",
                  }}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">{faq.q}</span>
                    <span style={{ color: "#2AD2C1", fontWeight: "bold" }}>
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-2 text-muted">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Right Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div
              className="p-4 bg-white rounded shadow-lg"
              style={{ borderTop: "4px solid #2AD2C1" }}
            >
              <h4 className="fw-bold mb-4" style={{ color: "#2AD2C1" }}>
                Contact Us
              </h4>
              <p className="fw-bold mb-4" style={{ color: "black" }}>
                If You Don't Find Any Relevent Question/Answer Fill Free To Contact Us
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label
                    className="form-label fw-semibold"
                    style={{ color: "#2AD2C1" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label fw-semibold"
                    style={{ color: "#2AD2C1" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label fw-semibold"
                    style={{ color: "#2AD2C1" }}
                  >
                    Your Feedback
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Write your feedback here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: "linear-gradient(45deg, #24B7D3, #30EFAD)",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "10px",
                    padding: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Extra CSS for responsiveness */}
      <style>{`
        #contact h2 {
          font-size: clamp(24px, 3vw, 32px);
        }
        #contact p {
          font-size: clamp(14px, 2vw, 16px);
        }
        #contact .form-control {
          font-size: 14px;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #2AD2C1;
        }
        #contact button:hover {
          transform: scale(1.03);
          background: linear-gradient(45deg, #30EFAD, #24B7D3);
        }
        #contact .form-label:after {
          content: "*";
          color: #00FB8A; /* Accent bright green */
          margin-left: 4px;
        }
      `}</style>
    </section>
  );
}

export default Contact;
