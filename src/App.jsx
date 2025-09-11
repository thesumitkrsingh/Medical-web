// import React, { useEffect, useState } from "react";
// import Assistant from "./components/Assistant/Assistant";
// import Navbar from "./components/Navbar";

// // Sections
// import Home from "./components/Home/Home";
// import Services from "./components/services/Services";
// import About from "./components/About";
// import Location from "./components/Location";
// import Contact from "./components/Contact/Contact";
// // import Faq from "./components/Faq";
// // Sidebar & Footer
// import SocialSidebar from "./components/SocialSidebar";
// import Footer from "./components/Footer/Footer";

// // Animations
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Icons
// import { FaArrowUp } from "react-icons/fa";

// function App() {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // animation duration
//       easing: "ease-in-out",
//       once: false, // 👈 baar-baar trigger hoga jab scroll karoge
//     });

//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       {/* ✅ AI Assistant */}
//       <Assistant />

//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* ✅ Main Sections */}
//       <main>
//         <section id="home" className="full-height" data-aos="fade-up">
//           <Home />
//         </section>
//         <section id="about" className="normal-section" data-aos="fade-right">
//           <About />
//         </section>
//         <section id="services" className="normal-section" data-aos="fade-left">
//           <Services />
//         </section>
//         <section id="contact" className="normal-section" data-aos="fade-right">
//           <Contact />
//         </section>
//         {/* <section id="faq" className="normal-section" data-aos="fade-left">
//           <Faq />
//         </section> */}
//         <section id="location" className="normal-section" data-aos="fade-right">
//           <Location />
//         </section>
//       </main>

//       {/* ✅ Sidebar & Footer */}
//       <SocialSidebar />
//       <Footer />

//       {/* ✅ Scroll-to-Top Button */}
//       {showScroll && (
//         <div className="scroll-to-top" onClick={scrollToTop} data-aos="zoom-in">
//           <FaArrowUp />
//         </div>
//       )}

//       {/* ✅ Custom Styles */}
//       <style>{`
//         .scroll-to-top {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           background: #2AD2C1; /* Primary */
//           color: #fff;
//           border-radius: 50%;
//           padding: 12px;
//           cursor: pointer;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//           transition: transform 0.3s ease, background 0.3s ease;
//           z-index: 999;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .scroll-to-top:hover {
//           background: linear-gradient(135deg, #24B7D3, #30EFAD); /* Gradient */
//           transform: scale(1.1) rotate(5deg);
//         }
//       `}</style>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import Assistant from "./components/Assistant/Assistant";
import Navbar from "./components/Navbar";

// Sections
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact/Contact";
// import Faq from "./components/Faq";
// Sidebar & Footer
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer/Footer";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaArrowUp } from "react-icons/fa";

// ✅ Router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Service detail pages
import TestResults from "./components/services/pages/TestResults";
import LabExperts from "./components/services/pages/LabExperts";
import Technology from "./components/services/pages/Technology";
import Turnaround from "./components/services/pages/Turnaround";
import Analysis from "./components/services/pages/Analysis";
import Trusted from "./components/services/pages/Trusted";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      {/* ✅ AI Assistant */}
      <Assistant />

      {/* ✅ Navbar */}
      <Navbar />

      <Routes>
        {/* ✅ Home page (single page layout) */}
        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home" className="full-height" data-aos="fade-up">
                  <Home />
                </section>
                <section
                  id="about"
                  className="normal-section"
                  data-aos="fade-right"
                >
                  <About />
                </section>
                <section
                  id="services"
                  className="normal-section"
                  data-aos="fade-left"
                >
                  <Services />
                </section>
                <section
                  id="contact"
                  className="normal-section"
                  data-aos="fade-right"
                >
                  <Contact />
                </section>
                {/* <section id="faq" className="normal-section" data-aos="fade-left">
                  <Faq />
                </section> */}
                <section
                  id="location"
                  className="normal-section"
                  data-aos="fade-right"
                >
                  <Location />
                </section>
              </main>

              {/* ✅ Sidebar & Footer */}
              <SocialSidebar />
              <Footer />
            </>
          }
        />

        {/* ✅ Services detail pages with Sidebar & Footer */}
        <Route
          path="/services/test-results"
          element={
            <>
              <TestResults />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/lab-experts"
          element={
            <>
              <LabExperts />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/technology"
          element={
            <>
              <Technology />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/turnaround"
          element={
            <>
              <Turnaround />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/analysis"
          element={
            <>
              <Analysis />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/trusted"
          element={
            <>
              <Trusted />
              <SocialSidebar />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* ✅ Scroll-to-Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop} data-aos="zoom-in">
          <FaArrowUp />
        </div>
      )}

      {/* ✅ Custom Styles */}
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #2AD2C1;
          color: #fff;
          border-radius: 50%;
          padding: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: transform 0.3s ease, background 0.3s ease;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scroll-to-top:hover {
          background: linear-gradient(135deg, #24B7D3, #30EFAD);
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </Router>
  );
}

export default App;
