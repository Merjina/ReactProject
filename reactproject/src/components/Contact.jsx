import React, { useState } from 'react';
import '../styles/style.css';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/contactusBackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div className="container py-5">
        <h1 className="text-center mb-5 text-dark" style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Contact Us
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <ScheduleMeeting />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <CustomerCare />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleMeeting() {
  return (
    <div className="schedule-meeting p-4 rounded shadow" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
      <h2 className="text-dark mb-3" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Schedule a Meeting</h2>
      <p style={{ fontSize: "1rem", color: "#555" }}>
        Need a one-on-one consultation? Schedule a meeting with us.
      </p>
      <button
        className="btn w-100"
        style={{
          background: "linear-gradient(45deg, #4caf50, #81c784)",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontWeight: "bold",
        }}
      >
        Schedule Now
      </button>
    </div>
  );
}

function ContactForm() {
  const [countryCode, setCountryCode] = useState('+91');

  const countryList = [
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+39', country: 'Italy' },
  ];

  return (
    <div className="contact-form p-4 rounded shadow" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
      <h2 className="text-dark mb-3" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>We're Here to Help</h2>
      <p style={{ fontSize: "1rem", color: "#555" }}>
        Got a question or need support? Reach out to us, and we’ll get back to you within 1-2 business days.
      </p>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="form-control mb-3"
          style={{ borderRadius: "30px" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="form-control mb-3"
          style={{ borderRadius: "30px" }}
        />
        <div className="input-group mb-3">
          <select
            className="form-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            style={{ borderRadius: "30px" }}
          >
            {countryList.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} - {country.country}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Your Phone Number"
            required
            className="form-control"
            pattern="\d*"
            minLength="10"
            maxLength="15"
            style={{ borderRadius: "30px" }}
          />
        </div>
        <textarea
          placeholder="Your Message..."
          required
          className="form-control mb-3"
          rows="4"
          style={{ borderRadius: "15px" }}
        ></textarea>
        <button
          type="submit"
          className="btn w-100"
          style={{
            background: "linear-gradient(45deg, #007bff, #6c63ff)",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "30px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function CustomerCare() {
  return (
    <div className="customer-care p-4 rounded shadow" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
      <h2 className="text-dark mb-3" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Connect to Customer Care</h2>
      <p style={{ fontSize: "1rem", color: "#555" }}>
        For further assistance, please reach out to our support team directly.
      </p>
      <p>
        <FaEnvelope size={20} className="me-2 text-primary" />
        <a href="mailto:support@workkik.com" className="text-decoration-none text-dark">
          support@workkik.com
        </a>
      </p>
      <p>
        <FaPhone size={20} className="me-2 text-primary" />
        <a href="tel:+1234567890" className="text-decoration-none text-dark">
          +1 234 567 890
        </a>
      </p>
      <div className="social-icons mt-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary me-2"
          style={{ borderRadius: "50%" }}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger me-2"
          style={{ borderRadius: "50%" }}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-info"
          style={{ borderRadius: "50%" }}
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
