import React, { useRef, useEffect, useState } from "react";
import visionImage from "../assets/vision.jpg";

const StatsVision = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔢 counters
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  /* =========================
     COUNT UP ANIMATION
  ========================= */
  useEffect(() => {
    if (!isVisible) return;

    let clientStart = 0;
    let projectStart = 0;

    const clientEnd = 5;
    const projectEnd = 10;

    const duration = 1300; // ms
    const interval = 30;

    const clientStep = clientEnd / (duration / interval);
    const projectStep = projectEnd / (duration / interval);

    const counter = setInterval(() => {
      clientStart += clientStep;
      projectStart += projectStep;

      if (clientStart >= clientEnd) {
        setClients(clientEnd);
      } else {
        setClients(Math.ceil(clientStart));
      }

      if (projectStart >= projectEnd) {
        setProjects(projectEnd);
      } else {
        setProjects(Math.ceil(projectStart));
      }

      if (clientStart >= clientEnd && projectStart >= projectEnd) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <section className="stats-vision-section">
      <div
        ref={containerRef}
        className={`stats-vision-container ${
          isVisible ? "animate-stats-vision" : ""
        }`}
      >
        <div className="vision-left">
          <h2>
            Our <span>Vision</span>
          </h2>

          <p>
            At <strong>TwinTech</strong>, we aim to deliver innovative technology
            solutions that empower businesses globally. We create scalable and
            efficient digital products that drive growth and add value.
          </p>

          <div className="stats-text">
            <span>{clients}+ Clients</span>
            <span>{projects}+ Projects</span>
          </div>
        </div>

        <div className="vision-right">
          <div className="image-container">
            <img src={visionImage} alt="Our Vision" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsVision;
