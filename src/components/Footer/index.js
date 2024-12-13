import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-input">
          <img
            src="https://res.cloudinary.com/ramcharan/image/upload/v1733980572/Estavel/navbar/stone-pedia-logo_rosj3s.png"
            alt="Company Logo"
            className="footer-logo"
          />
          <input
            type="email"
            placeholder="Enter Email here..."
            className="footer-email-input"
          />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h2 className="footer-title">Product</h2>
            <ul>
              <li>StonePedia Exclusive</li>
              <li>Best Seller</li>
              <li>Premium Stones</li>
              <li>Shop By Color</li>
              <li>Shop By Category</li>
              <li>Applications</li>
              <li>Customer Reviews</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Support</h2>
            <ul>
              <li>Request For Quotation</li>
              <li>FAQs</li>
              <li>Blogs</li>
              <li>Help Center</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Report Complaint</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Cancellation Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Reach Us</h2>
            <ul>
              <li>In The Press</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Feedback</li>
              <li>Partner With Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &#169; 2024 StonePedia Private Limited. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;