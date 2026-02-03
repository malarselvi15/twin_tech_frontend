import React, { useRef, useEffect, useState } from "react";

const About = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current; // ✅ FIX: store ref value

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);          // trigger animation
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // ✅ safe cleanup
    };
  }, []);

  return (
    <section className="about">
      <div
        ref={containerRef}
        className={`about-container ${isVisible ? "animate-rise" : ""}`}
      >
        <h2 className="about-title">About TwinTech</h2>

        <p className="about-text">
          Founded in 2025, TwinTech is a forward-thinking technology company
          dedicated to building innovative digital solutions that empower
          businesses worldwide.
        </p>

        <p className="about-text">
          We specialize in creating scalable, efficient, and user-centric
          products that help organizations streamline operations, enhance
          customer experiences, and achieve sustainable growth.
        </p>

        <p className="about-text">
          At TwinTech, we combine technology, creativity, and strategy to
          deliver solutions that create long-term value for our clients.
        </p>
      </div>
    </section>
  );
};

export default About;
