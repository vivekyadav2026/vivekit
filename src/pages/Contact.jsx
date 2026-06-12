import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { saveEnquiry } from '../services/enquiryService';
import PageBanner from '../components/PageBanner';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to local storage
    saveEnquiry(formData);

    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main className="contact-page">
      <PageBanner 
        title="Get In Touch With Our Tech Experts" 
        subtitle="Ready to scale your business? Contact VivekTech today. We provide free consultations for web development, software automation, and digital marketing."
        icon={MessageCircle}
      />
      <div className="container" style={{ paddingBottom: '4rem' }}>

        <div className="contact-grid">
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="info-desc">Whether you need a complete digital transformation or a minor website overhaul, our team is ready to listen. Drop us a message, and a senior technical strategist will get back to you within 24 hours.</p>

              <div className="info-items">
                <div className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 95343 54791</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>contact@VivekTech.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>Vishwas Park, Uttam Nagar, New Delhi, Delhi - 110059</p>
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 95343 54791" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
