import React, { useRef, useEffect, useState } from "react";
import "../App.css"; // Ensure your CSS includes animation styles

const AnimatedSection = ({ children, animationClass, className }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "hidden-section"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
