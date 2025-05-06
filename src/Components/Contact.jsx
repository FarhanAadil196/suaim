// src/pages/Contact.jsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="container">
        <h1 className="heading">Contact Us</h1>
        <p className="subheading">We’d love to hear from you! Send us a message.</p>

        <div className="content">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19527.727674032424!2d78.6038167!3d12.6873975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad44991d189c31%3A0x3e7285cb9c9976f9!2sAmbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .heading {
    text-align: center;
    font-size: 2.5rem;
    color: #111;
    margin-bottom: 0.5rem;
  }

  .subheading {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form input,
  .form textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }

  .form button {
    background-color: #111;
    color: #fff;
    padding: 0.9rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .form button:hover {
    background-color: #333;
  }

  .map iframe {
    width: 100%;
    height: 100%;
    min-height: 400px;
    border: none;
    border-radius: 1rem;
  }
`;
