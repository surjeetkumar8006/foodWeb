import React from "react";
import "../index.css"; // CSS File को Import करें

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Food Section */}
        <div className="footer-section">
          <h2>Food</h2>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Food One</li>
            <li>Food Instant</li>
            <li>Food Genie</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* We Deliver Section */}
        <div className="footer-section">
          <h3>We deliver to:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
