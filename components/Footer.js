//footer.ja
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Ensure this import

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/privacy_policy">Privacy Policy</Link>
                <Link to="/Refund_Policy">Refund_Policy</Link>
                <Link to="/Website_Policy">Website_Policy</Link>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Career</a>
                <Link to="/career">Career</Link>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>

            </div>
        </footer>
    );
};

export default Footer;
