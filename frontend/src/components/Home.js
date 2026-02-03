import React from "react";
import bgImage from "../assets/home-bg.jpeg";

const Home = () => {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="home-content">
        <h1 className="fade-in">
          Welcome to <span style={{ color: "#b388ff" }}>TwinTech</span>
        </h1>

        <p className="slide-up">
          We build innovative solutions for your business growth.
        </p>

        <p
          className="slide-up"
          style={{
            marginTop: "14px",
            fontSize: "18px",
            opacity: 0.95
          }}
        >
          TwinTech is your trusted technology partner delivering scalable
          digital solutions for modern businesses.
        </p>

        <button className="hero-btn">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Home;
