import React from "react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {

  // SAME SCROLL LOGIC AS NAVBAR
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <h3 className="footer-logo">
            Twin<span>Tech</span>
          </h3>
          <p className="footer-desc">
            TwinTech delivers innovative digital solutions helping businesses
            scale and succeed in the modern digital era.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Web Design</li>
            <li>Digital Marketing</li>
            <li>Logo Designing</li>
            <li>Mobile App Design</li>
            <li>E-Commerce Development</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
              Home
            </li>
            <li onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
              About Us
            </li>
            <li onClick={() => scrollToSection("services")} style={{ cursor: "pointer" }}>
              Services
            </li>
            <li onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p>
            <FaMapMarkerAlt />  
            Thoothukudi <br />
            3rd Street, Indira Nagar, <br />
            Thoothukudi, Tamil Nadu 628103
          </p>

          <p>
            <FaEnvelope />  
            twintechnologies25@gmail.com
          </p>

          <p>
            <FaPhoneAlt />  
            +91 82209 43500
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/twin_techn?igsh=MXV6cmRkaHpwcHVidQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585883104682"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 TwinTech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
