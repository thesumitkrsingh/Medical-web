import React, { useEffect, useState } from "react";
import Assistant from './components/Assistant/Assistant';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer/Footer";



import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Assign fade-up to all text elements
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, button, a"
    );
    textElements.forEach((el) => {
      if (!el.hasAttribute("data-aos")) {
        el.setAttribute("data-aos", "fade-up");
      }
    });

    // Show/hide scroll button
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Assistant />
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <SocialSidebar />
      <Footer />

      <div
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
          }
          
          section {
            padding: 5rem 2rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          #home {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          }
          
          #services {
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
          }
          
          #testimonials {
            background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
          }
          
          #about {
            background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
          }
          
          #contact {
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
          }
          
          .scroll-to-top {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: #fff;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            z-index: 1000;
          }
          
          .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
          }
          
          .scroll-to-top:hover {
            transform: scale(1.15);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
        `}
      </style>
    </>
  );
}

export default App;