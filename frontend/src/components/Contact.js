import React, { useRef, useEffect, useState } from "react";
import bgContact from "../assets/contact-bg.jpg";

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef();

  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  // 🔹 Scroll animation
  useEffect(() => {
    const element = contactRef.current;
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
    return () => observer.disconnect();
  }, []);

  // 🔹 Input handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Submit → WhatsApp (SIMPLE & REAL)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const COMPANY_WHATSAPP_NUMBER = "918220943500"; // 🔴 CHANGE THIS

    const whatsappMessage = `
New Website Enquiry

Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // UI feedback only
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 600);
  };

  return (
    <section
      ref={contactRef}
      className={`contact-hero ${visible ? "animate-contact" : ""}`}
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <div className="contact-text">
          <h2>
            Let’s <span>Work Together</span>
          </h2>
          <p>
            Have a project in mind or looking for a reliable technology partner?
            TwinTech is here to turn your ideas into powerful digital solutions.
          </p>

          <p className="contact-highlight">
            ✦ Trusted by growing businesses <br />
            ✦ Scalable & secure solutions <br />
            ✦ Professional support
          </p>
        </div>

        <div className="contact-form-glass">
          <h3>Get in Touch</h3>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Business / Company"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Opening WhatsApp..." : "Send Message"}
            </button>
          </form>

          {success && (
            <p style={{ marginTop: "15px", color: "#a855f7" }}>
              ✅ WhatsApp opened successfully. Please click send.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
