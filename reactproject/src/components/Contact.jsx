import React from 'react';
import '../styles/style.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="contact-form">
      <header className="header">
        <h1>Workkik</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Mens</a>
          <a href="/">Boys</a>
          <a href="/">girls</a>
          <button className="login-button">Log in</button>
          <button className="signup-button">Sign up</button>
        </nav>
      </header>
      
      <section className="form-section">
        <h2>Contact Us</h2>
        <p>Fill out the form and our team will reach out to you within 1-2 business days.</p>
        <p>Click the button below to schedule a meeting with us.</p>
        <button className="talk-button">Talk with us</button>
        
        <form className="contact-form-fields">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Subject (optional)" />
          <textarea placeholder="Enter Your Message ..." required></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
        
        <div className="contact-info">
          <p>Email: support@workkik.com</p>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://linkedin.com">Linkedin</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
