import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-container">
              <div className="logo-text-wrapper">
                <span className="logo-text-main">
                  <span className="logo-vivek">VIVEK</span>
                  <span className="logo-tech">TECH</span>
                </span>
                <span className="logo-tagline" style={{ textAlign: 'left' }}>BUILDING DIGITAL SOLUTIONS</span>
              </div>
            </Link>
            <p className="footer-desc">
              We Build Websites & Apps That Grow Your Business. Your trusted technology partner for digital transformation.
            </p>
            <div className="social-links">
              <a href="https://github.com/vivekkumar2026" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.instagram.com/vivektech.online?igsh=cG5pc2t2NjJqY2pq" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile App Development</Link></li>
              <li><Link to="/services">E-Commerce Solutions</Link></li>
              <li><Link to="/services">Custom Software</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>District Center Janakpuri, Jaina Tower I & II, Vishwa Sadan, West Delhi, Delhi, India - 110058</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 95343 54791</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>contact@VivekTech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VivekTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
