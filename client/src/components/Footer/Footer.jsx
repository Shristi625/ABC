import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container footer__inner">
      <p className="footer__tagline">
        Travel Diaries Nepal — Preserve Your Journey Memories
      </p>
      <div className="footer__links">
        <a href="#privacy" className="footer__link">Privacy Policy</a>
        <a href="#terms" className="footer__link">Terms of Service</a>
        <a href="#support" className="footer__link">Support</a>
        <Link to="/plan" className="footer__link">Plan a Trip</Link>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Travel Diaries Nepal. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
