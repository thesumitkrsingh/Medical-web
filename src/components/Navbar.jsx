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

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    // ✅ Offcanvas close after click
    const closeBtn = document.querySelector("#mobileMenu .btn-close");
    if (closeBtn) closeBtn.click();
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          scrolled ? "navbar-colored shadow-sm" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between px-3 px-md-4">
          {/* ✅ Brand Name */}
          <a className="navbar-brand fw-bold brand-text" href="#">
            Spectracore <span>Analytics</span>
          </a>

          {/* ✅ Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Desktop menu */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold ms-auto">
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

          {/* ✅ Right side button (Desktop only) */}
          <div className="d-none d-md-flex ms-3">
            <button
              className="btn contact-btn"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-info">Spectracore Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav fw-bold mb-3">
            {["home", "services", "about", "contact"].map((id) => (
              <li className="nav-item mb-2" key={id}>
                <a
                  className="nav-link text-white"
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
          {/* ✅ Button inside mobile menu */}
          <button
            className="btn contact-btn w-100"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* ✅ Styles */}
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
          }

          .navbar-transparent {
            background: transparent;
            transition: background 0.6s ease, color 0.6s ease;
          }

          .navbar-colored {
            background: #0b1b36;
            transition: background 0.6s ease, color 0.6s ease;
          }

          /* 🔹 Navbar padding */
          .navbar {
            padding-top: 12px;
            padding-bottom: 14px;
          }

          /* 🔹 Brand text */
          .brand-text {
            font-size: 20px;
            font-weight: 700;
            color: #fff !important;
            letter-spacing: 1px;
          }
          .brand-text span {
            color: #00c6ff;
          }

          /* 🔹 Nav links */
          .nav-link {
            font-size: 15px;
            font-weight: 500;
            color: #fff !important;
            padding: 8px 12px;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #00c6ff !important;
          }

          /* 🔹 Contact button */
          .contact-btn {
            background: #007bff;
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            border-radius: 30px;
            padding: 10px 22px;
            transition: all 0.3s ease;
            border: none;
            white-space: nowrap;
          }
          .contact-btn:hover {
            background: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          /* ✅ Offcanvas nav links */
          #mobileMenu .nav-link {
            font-size: 16px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
          }
          #mobileMenu .nav-link:hover {
            color: #00c6ff !important;
            padding-left: 6px;
          }

          /* ✅ Responsive adjustments */
          @media (max-width: 768px) {
            .brand-text {
              font-size: 18px;
            }
            .nav-link {
              font-size: 14px;
              padding: 6px 10px;
            }
            .contact-btn {
              font-size: 13px;
              padding: 8px 18px;
              border-radius: 25px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
