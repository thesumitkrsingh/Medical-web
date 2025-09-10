import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const form = useRef();

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

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left Info */}
          <div className="col-lg-5 mb-4" data-aos="fade-right">
            <h2 className="fw-bold mb-3" style={{ color: "#2AD2C1" }}>
              Get in Touch
            </h2>
            <p className="text-muted mb-4">
              We'd love to hear from you! Reach out with your queries,
              suggestions, or feedback.
            </p>
            <div className="mb-3">
              <h6 className="fw-semibold" style={{ color: "#2AD2C1" }}>
                📍 Address
              </h6>
              <p className="text-muted">123 SpectraCore St, New Delhi, India</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-semibold" style={{ color: "#2AD2C1" }}>
                📧 Email
              </h6>
              <p className="text-muted">neeraj2005jeena@gmail.com</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-semibold" style={{ color: "#2AD2C1" }}>
                📞 Phone
              </h6>
              <p className="text-muted">+91 98765 43210</p>
            </div>
          </div>

          {/* ✅ Right Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div
              className="p-4 bg-white rounded shadow-lg"
              style={{ borderTop: "4px solid #2AD2C1" }}
            >
              <h4 className="fw-bold mb-4" style={{ color: "#2AD2C1" }}>
                Send us a Message
              </h4>
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
                  Send Feedback
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

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_i333sph", // ✅ Your Service ID
//         "template_pb4hbyk", // ✅ Your Template ID
//         form.current,
//         { publicKey: "FXZ9pkNkJxj6TGcv7" } // ✅ Your Public Key
//       )
//       .then(
//         () => {
//           alert("✅ Thank you for your feedback!");
//           form.current.reset();
//         },
//         (error) => {
//           console.error(error);
//           alert("❌ Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="py-5"
//       style={{ backgroundColor: "#eef5ff" }}
//     >
//       <div className="container">
//         {/* Title */}
//         <h2 className="text-center mb-4 fw-bold" style={{ color: "#0072ff" }}>
//           ✉️ Contact Us
//         </h2>
//         <p className="text-center text-muted mb-5">
//           We’d love to hear your feedback. Please fill out the form below.
//         </p>

//         {/* Form */}
//         <div className="row justify-content-center">
//           <div className="col-lg-6 col-md-8">
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="p-4 bg-white rounded-4 shadow-lg border"
//               style={{ borderTop: "6px solid #0072ff" }}
//             >
//               {/* Name */}
//               <div className="mb-3">
//                 <label className="form-label fw-semibold text-primary">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-3"
//                   name="user_name"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-3">
//                 <label className="form-label fw-semibold text-primary">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control rounded-3"
//                   name="user_email"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Feedback */}
//               <div className="mb-3">
//                 <label className="form-label fw-semibold text-primary">
//                   Your Feedback
//                 </label>
//                 <textarea
//                   className="form-control rounded-3"
//                   name="message"
//                   rows="5"
//                   placeholder="Write your feedback here..."
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="btn w-100 py-2 rounded-3 shadow"
//                 style={{
//                   background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                   color: "#fff",
//                   fontWeight: "600",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 🚀 Send Feedback
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
