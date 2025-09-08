// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [query, setQuery] = useState("");

//   // ✅ Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Search form submit
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     const sectionId = query.toLowerCase().replace(/\s+/g, "");
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       alert("⚠️ No matching section found!");
//     }

//     setQuery("");
//   };

//   return (
//     <>
//       <nav
//         className={`navbar navbar-expand-md shadow-lg fixed-top ${
//           scrolled ? "navbar-colored" : "navbar-transparent"
//         }`}
//         style={{ padding: "0 40px" }} // 🔹 left-right 40px spacing
//       >
//         <div className="container-fluid d-flex align-items-center justify-content-between">
//           {/* ✅ Brand (left) */}
//           <a className="navbar-brand fw-bold fs-4" href="#">
//             SpectraCore Analytics
//           </a>

//           {/* ✅ Links (center) */}
//           <div
//             className="collapse navbar-collapse justify-content-center"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav align-items-md-center text-uppercase fw-bold">
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#services">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#about">
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ✅ Search bar (right end) */}
//           <form
//             className="d-flex search-bar"
//             onSubmit={handleSearch}
//             style={{ maxWidth: "340px", width: "100%", marginLeft: "20px" }}
//           >
//             <input
//               type="text"
//               className="form-control search-input"
//               placeholder="Search..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button className="btn search-btn ms-2" type="submit">
//               🔍
//             </button>
//           </form>
//         </div>

//         {/* ✅ Styling */}
//         <style>
//           {`
//             .navbar-transparent {
//               background: rgba(0, 0, 0, 0.2);
//               backdrop-filter: blur(12px);
//               transition: background 0.6s ease, color 0.6s ease;
//             }
//             .navbar-transparent .nav-link,
//             .navbar-transparent .navbar-brand {
//               color: #fff !important;
//             }
//             .navbar-transparent .nav-link:hover {
//               color: #00c6ff !important;
//             }

//             .navbar-colored {
//               background: linear-gradient(45deg, #00c6ff, #0072ff);
//               transition: background 0.6s ease, color 0.6s ease;
//             }
//             .navbar-colored .nav-link,
//             .navbar-colored .navbar-brand {
//               color: #fff !important;
//             }
//             .navbar-colored .nav-link:hover {
//               color: #e0f7ff !important;
//             }

//             .search-bar {
//               max-width: 340px;
//               flex-grow: 1;
//             }
//             .search-input {
//               border-radius: 20px;
//               padding: 8px 14px;
//               border: 2px solid #0072ff;
//               transition: all 0.3s ease;
//               font-size: 0.95rem;
//               flex: 1;
//             }
//             .search-input:focus {
//               outline: none;
//               box-shadow: 0 0 10px rgba(0,114,255,0.3);
//               border-color: #00c6ff;
//             }
//             .search-btn {
//               border-radius: 50%;
//               background: linear-gradient(45deg, #00c6ff, #0072ff);
//               color: #fff;
//               font-weight: bold;
//               transition: all 0.3s ease;
//               padding: 6px 10px;
//               min-width: 38px;
//               min-height: 38px;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//             }
//             .search-btn:hover {
//               background: linear-gradient(45deg, #0072ff, #00c6ff);
//               transform: scale(1.1);
//             }
//           `}
//         </style>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const closeBtn = document.querySelector("#mobileMenu .btn-close");
    if (closeBtn) closeBtn.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappMessage = `📅 New Appointment Request\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📝 Message: ${message}`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    setShowForm(false);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-md shadow-lg fixed-top ${
          scrolled ? "navbar-colored" : "navbar-transparent"
        }`}
        style={{ padding: "0 40px" }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4" href="#">
            SpectraCore Analytice
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop menu */}
          <div
            className="collapse navbar-collapse justify-content-center d-none d-md-flex"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-md-center text-uppercase fw-bold">
              {["home", "services", "about", "contact"].map((id) => (
                <li className="nav-item mx-2" key={id}>
                  <a
                    className="nav-link"
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                  >
                    {id === "about"
                      ? "About Us"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="d-none d-md-flex align-items-center ms-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon mx-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon mx-2"
            >
              <FaPinterestP />
            </a>

            <button
              className="btn appointment-btn ms-3"
              onClick={() => setShowForm(true)}
            >
              📅 Make Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav text-uppercase fw-bold mb-3">
            {["home", "services", "about", "contact"].map((id) => (
              <li className="nav-item" key={id}>
                <a
                  className="nav-link"
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {id === "about"
                    ? "About Us"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              className="nav-icon mx-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="nav-icon mx-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="nav-icon mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              className="nav-icon mx-2"
            >
              <FaPinterestP />
            </a>
          </div>

          <button
            className="btn appointment-btn mt-4 w-100"
            onClick={() => setShowForm(true)}
          >
            📅 Make Appointment
          </button>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .navbar-transparent {
            background: rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(12px);
            transition: background 0.6s ease, color 0.6s ease;
          }
          .navbar-transparent .nav-link,
          .navbar-transparent .navbar-brand,
          .navbar-transparent .nav-icon {
            color: #fff !important;
          }

          .navbar-colored {
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            transition: background 0.6s ease, color 0.6s ease;
          }
          .navbar-colored .nav-link,
          .navbar-colored .navbar-brand,
          .navbar-colored .nav-icon {
            color: #fff !important;
          }

          /* 🔹 Smooth hover effect for links */
          .nav-link {
            position: relative;
            color: inherit !important;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .nav-link:hover {
            color: #00c6ff !important;
            transform: translateY(-2px);
          }

          /* underline animation */
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0%;
            height: 2px;
            background: #00c6ff;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }

          .nav-icon {
            font-size: 1.1rem;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .nav-icon:hover {
            color: #00c6ff !important;
            transform: scale(1.2);
          }

          .appointment-btn {
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: #fff;
            font-weight: bold;
            border-radius: 30px;
            padding: 8px 18px;
            transition: all 0.3s ease;
          }
          .appointment-btn:hover {
            background: linear-gradient(45deg, #0072ff, #00c6ff);
            transform: scale(1.05);
          }

          /* Mobile menu link hover */
          #mobileMenu .nav-link {
            color: #333 !important;
            transition: all 0.3s ease;
          }
          #mobileMenu .nav-link:hover {
            color: #0072ff !important;
            transform: translateX(5px);
          }
        `}
      </style>

      {/* Appointment Form Modal */}
      {showForm && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3 rounded-3 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title">📅 Make Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
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
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn w-100 appointment-btn">
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
