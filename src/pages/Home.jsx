import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Monitor, Smartphone, ShoppingCart, Code2, 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Activity, BarChart, Server, Check, Quote, Globe, Settings, Database, Layers
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="home">
      
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">VivekTech Agency</div>
            <h1 className="hero-title">
              Websites, Apps & Software Built To Grow Your Business
            </h1>
            <p className="hero-subtitle">
              We help Indian businesses launch high-performance websites, mobile apps, and custom software that generate leads, automate operations, and increase revenue.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-mockup-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="isometric-stack">
              <div className="iso-layer iso-layer-1"></div>
              <div className="iso-layer iso-layer-2"></div>
              <div className="iso-layer iso-layer-3">
                <div className="iso-header">
                  <div className="iso-dot"></div>
                  <div className="iso-dot"></div>
                  <div className="iso-dot"></div>
                </div>
                <div className="iso-bar long"></div>
                <div className="iso-bar short"></div>
                <div className="iso-content-row" style={{ marginTop: '1.5rem' }}>
                  <div className="iso-card"></div>
                  <div className="iso-card"></div>
                </div>
                <div className="iso-content-row">
                  <div className="iso-card"></div>
                  <div className="iso-card"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-stat">
              <h3>150+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="trust-stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="trust-stat">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="trust-stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Expertise</div>
            <h2 className="section-title">Comprehensive IT Services</h2>
            <p className="section-desc">End-to-end digital solutions designed to automate processes and accelerate your business growth.</p>
          </div>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="premium-service-card" variants={itemVariants}>
                <div className="service-icon-wrap">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{service.desc}</p>
                <ul className="service-feature-list">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx}><Check className="check-icon" size={16} /> {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TECH STACK SECTION */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Powered By Modern Tech</h2>
          </div>
          <div className="tech-flex">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-badge">
                <tech.icon size={18} className="text-gradient" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Portfolio</div>
            <h2 className="section-title">Premium Portfolio Showcase</h2>
            <p className="section-desc">Explore our recent custom software and application builds.</p>
          </div>

          <div className="portfolio-premium-grid">
            {portfolioProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                className="portfolio-abstract-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="port-industry">{project.industry}</span>
                <h3>{project.title}</h3>
                <div className="port-tech">
                  {project.tech.map((t, tidx) => (
                    <span key={tidx}>{t}</span>
                  ))}
                </div>
                <div className="port-result">
                  <p><CheckCircle2 size={18} color="#10b981" /> {project.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container why-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge">Why Choose Us</div>
            <h2 className="section-title">The VivekTech Advantage</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>We combine startup agility with enterprise-grade quality. Partner with a team that focuses on your ROI.</p>
            
            <div className="why-features">
              {[
                'Enterprise-grade Development', 
                'SEO-Optimized Websites', 
                'Transparent Communication', 
                'Scalable Architecture', 
                'Affordable Pricing', 
                'Long-Term Support'
              ].map((feat, idx) => (
                <div key={idx} className="why-feature">
                  <CheckCircle2 size={24} />
                  {feat}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="stats-card-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="premium-stat-card">
              <h3>500+</h3>
              <p>Tasks Completed</p>
            </div>
            <div className="premium-stat-card">
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
            <div className="premium-stat-card">
              <h3>24/7</h3>
              <p>Support Ready</p>
            </div>
            <div className="premium-stat-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">How We Work</div>
            <h2 className="section-title">Our Development Process</h2>
          </div>

          <div className="process-container">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{idx + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Testimonials</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="testimonial-premium-grid">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                className="testimonial-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Quote size={40} className="quote-icon" />
                <p>"{test.quote}"</p>
                <div className="test-author">
                  <div className="author-avatar-placeholder">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.q}
                  {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="section-padding" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <motion.div 
            style={{ background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))', padding: '4rem 2rem', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(99, 102, 241, 0.3)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready To Scale Your Business Online?</h2>
            <p className="section-desc" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's build a website, app, or software solution that helps your business grow faster.
            </p>
            <Link to="/contact" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

/* =========================================================
   DATA ARRAYS
   ========================================================= */

const services = [
  { 
    icon: Monitor, 
    title: 'Web Development', 
    desc: 'High-converting business websites engineered for speed.',
    features: ['Business Websites', 'Custom Portals', 'SEO Friendly', 'Fast Loading']
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    desc: 'Engaging native and cross-platform mobile experiences.',
    features: ['Android Apps', 'iOS Apps', 'Flutter Apps', 'API Integration']
  },
  { 
    icon: ShoppingCart, 
    title: 'E-Commerce Development', 
    desc: 'Robust online stores built to maximize your sales volume.',
    features: ['Shopify', 'WooCommerce', 'Payment Gateway', 'Inventory System']
  },
  { 
    icon: Code2, 
    title: 'Custom Software', 
    desc: 'Tailor-made automation tools to streamline your operations.',
    features: ['CRM Development', 'ERP Solutions', 'Automation', 'Custom Dashboards']
  }
];

const techStack = [
  { name: 'Laravel', icon: Code2 },
  { name: 'PHP', icon: Code2 },
  { name: 'MySQL', icon: Database },
  { name: 'React', icon: Globe },
  { name: 'Next.js', icon: Layers },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Node.js', icon: Server },
  { name: 'AWS', icon: Database },
  { name: 'Docker', icon: Settings }
];

const portfolioProjects = [
  {
    title: 'School ERP System',
    industry: 'Education',
    tech: ['Laravel', 'MySQL', 'React'],
    result: 'Reduced administrative work by 60%.'
  },
  {
    title: 'E-Commerce Website',
    industry: 'Retail',
    tech: ['Next.js', 'Node.js', 'Stripe'],
    result: 'Increased online sales by 150% in 3 months.'
  },
  {
    title: 'Hospital Management System',
    industry: 'Healthcare',
    tech: ['PHP', 'MySQL', 'React'],
    result: 'Streamlined patient onboarding by 45%.'
  },
  {
    title: 'Hotel Booking Platform',
    industry: 'Hospitality',
    tech: ['Laravel', 'Vue.js', 'AWS'],
    result: 'Zero-commission direct bookings increased by 80%.'
  },
  {
    title: 'Taxi Booking App',
    industry: 'Transportation',
    tech: ['Flutter', 'Node.js', 'Google Maps API'],
    result: 'Achieved 10,000+ active monthly riders.'
  },
  {
    title: 'Real Estate Website',
    industry: 'Real Estate',
    tech: ['React', 'Firebase', 'SEO'],
    result: 'Generated 300+ organic leads per month.'
  },
  {
    title: 'CRM Dashboard',
    industry: 'Corporate B2B',
    tech: ['React', 'Node.js', 'Docker'],
    result: 'Improved sales team efficiency by 40%.'
  }
];

const processSteps = [
  { title: 'Discovery', desc: 'We analyze your business goals, target audience, and project requirements.' },
  { title: 'Planning', desc: 'We define the technical architecture, timeline, and feature roadmap.' },
  { title: 'UI/UX Design', desc: 'We create premium, user-centric wireframes and high-fidelity mockups.' },
  { title: 'Development', desc: 'We engineer the solution using secure, scalable, and modern tech stacks.' },
  { title: 'Testing', desc: 'Rigorous QA testing to ensure zero bugs and flawless performance.' },
  { title: 'Launch', desc: 'Smooth deployment to production environments and app stores.' },
  { title: 'Support', desc: 'Ongoing maintenance, updates, and dedicated technical support.' }
];

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'Founder, RetailHub India',
    quote: 'VivekTech completely overhauled our online presence. Our new custom e-commerce platform is blazing fast, and our online revenue has doubled since launch. Their development speed is incredible.'
  },
  {
    name: 'Dr. Anjali Desai',
    role: 'Director, CityCare Hospital',
    quote: 'The hospital management system they built for us reduced our paper trails entirely. Patient onboarding is now digital, secure, and incredibly efficient. A highly professional team.'
  },
  {
    name: 'Rahul Sharma',
    role: 'CEO, Horizon Real Estate',
    quote: 'We wanted a premium website that reflected our luxury brand. VivekTech delivered beyond our expectations. The SEO optimization also resulted in a massive spike in organic inquiries.'
  }
];

const faqs = [
  {
    q: 'How much does website development cost?',
    a: 'Costs vary based on complexity, features, and the technology stack required. A basic corporate site is very affordable, while custom SaaS platforms or e-commerce stores require a larger investment. Contact us for a precise, transparent quote.'
  },
  {
    q: 'How long does a website take?',
    a: 'A standard business website typically takes 2 to 4 weeks. Complex web applications, mobile apps, or custom ERP/CRM software can take 8 to 12 weeks depending on the required functionalities.'
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC). This includes regular security patches, server monitoring, bug fixes, and feature updates to ensure your platform runs flawlessly 24/7.'
  },
  {
    q: 'Can you redesign existing websites?',
    a: 'Absolutely. We specialize in digital modernization. We can take your outdated website and completely redesign the UI/UX, migrate it to a modern tech stack (like React or Next.js), and optimize it for SEO.'
  },
  {
    q: 'Do you develop mobile apps?',
    a: 'Yes, we develop high-performance mobile applications for both iOS and Android. We utilize native technologies as well as modern cross-platform frameworks like Flutter to build cost-effective, premium apps.'
  }
];

export default Home;
