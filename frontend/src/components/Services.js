import React, { useEffect, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
  FaLaptopCode,
} from "react-icons/fa";

const Services = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current; // ✅ FIX

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="services-section" id="services">
      <div
        ref={containerRef}
        className={`services-container ${visible ? "animate-services" : ""}`}
      >
        <h1>
          Our <span className="highlight">Services</span>
        </h1>

        <p className="services-subtitle">
          We deliver high-quality digital solutions tailored to modern business
          needs, ensuring innovation, performance, and growth.
        </p>

        <div className="services-wrapper">
          <div className="service-card">
            <div className="service-icon"><FaShoppingCart /></div>
            <h2>E-Commerce Development</h2>
            <p>
              Powerful and scalable online stores with secure payment
              integration and seamless user experience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h2>Mobile App Design</h2>
            <p>
              Clean and intuitive mobile app designs focused on usability,
              performance, and engagement.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaPalette /></div>
            <h2>Logo Designing</h2>
            <p>
              Creative and professional brand identities that leave a lasting
              impression.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaBullhorn /></div>
            <h2>Digital Marketing</h2>
            <p>
              Data-driven strategies to increase brand visibility, reach, and
              customer engagement.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaLaptopCode /></div>
            <h2>Web Design</h2>
            <p>
              Modern, responsive, and visually appealing websites that reflect
              your brand perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
