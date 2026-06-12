import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor, Smartphone, PenTool, Brain, ShoppingCart, Settings, 
  ArrowRight, CheckCircle2, Star, ChevronDown, Activity, 
  Database, Server, Layout, Code2, Globe, Quote, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const testimonialsRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (testimonialsRef.current) {
      const { scrollLeft, clientWidth } = testimonialsRef.current;
      const scrollAmount = direction === 'next' ? clientWidth / 2 : -(clientWidth / 2);
      testimonialsRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

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
              Building Digital Products That Scale Businesses
            </h1>
            <p className="hero-subtitle">
              Transforming ambition into reality. We are a premium technology partner delivering high-performance SaaS, AI, and enterprise solutions.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn-primary">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-graphic"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero-mockup">
              <div className="dashboard-card">
                <div className="mockup-header">
                  <div className="mac-dot"></div>
                  <div className="mac-dot"></div>
                  <div className="mac-dot"></div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ height: '20px', width: '40%', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginBottom: '1rem' }}></div>
                  <div style={{ height: '100px', width: '100%', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px', marginBottom: '1rem' }}></div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}></div>
                    <div style={{ height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}></div>
                  </div>
                </div>
              </div>
              <div className="float-element float-1">
                <Activity className="text-gradient" size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Performance</div>
                  <div style={{ fontWeight: 'bold' }}>99.9%</div>
                </div>
              </div>
              <div className="float-element float-2">
                <Code2 className="text-gradient" size={24} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Clean Code</div>
                  <div style={{ fontWeight: 'bold' }}>Scalable</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="stat-item">
              <div className="stat-value">150+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">99%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES (BENTO GRID) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Expertise</div>
            <h2 className="section-title">Comprehensive Digital Solutions</h2>
            <p className="section-desc">We build everything from modern web applications to advanced AI solutions using the latest tech stack.</p>
          </div>

          <motion.div 
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} className={`glass-card bento-card ${service.spanClass}`} variants={itemVariants}>
                <div className="bento-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Portfolio</div>
            <h2 className="section-title">Premium Portfolio Showcase</h2>
            <p className="section-desc">Explore our recent work where we combined beautiful design with robust engineering.</p>
          </div>

          <div className="projects-grid">
            {portfolioProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                className="project-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h3>
                      <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{project.category}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{project.desc}</p>
                    <p style={{ color: 'var(--primary-accent)', marginBottom: '1rem', fontWeight: '500', fontSize: '0.85rem' }}>{project.tech.join(' • ')}</p>
                    <Link to="/portfolio" className="btn-outline" style={{ padding: '0.5rem 1.5rem' }}>View Case Study</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container comparison-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge">Why Choose Us</div>
            <h2 className="section-title">The VivekTech Advantage</h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>We combine startup agility with enterprise-grade quality. Here is why industry leaders choose to partner with us.</p>
            
            <div className="feature-list">
              {['Fast Delivery', 'Dedicated Team', 'Scalable Solutions', 'Affordable Pricing', 'Latest Technologies', 'Long-Term Support'].map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 className="check-circle" size={20} />
                  {feat}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" style={{ width: '100%', borderRadius: '1rem', marginBottom: '2rem' }} />
               <h3>Built for Scale</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Our architecture ensures your application grows seamlessly with your business.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">How We Work</div>
            <h2 className="section-title">Our Proven Process</h2>
          </div>

          <div className="timeline">
            {[
              { title: 'Discovery', desc: 'Understanding your business goals and requirements.' },
              { title: 'Planning', desc: 'Creating architecture diagrams and project milestones.' },
              { title: 'Design', desc: 'Crafting premium UI/UX designs and interactive prototypes.' },
              { title: 'Development', desc: 'Writing clean, scalable code using modern frameworks.' },
              { title: 'Testing', desc: 'Rigorous QA testing for security and performance.' },
              { title: 'Launch', desc: 'Smooth deployment and post-launch support.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="timeline-number">{idx + 1}</div>
                <div className="timeline-content">
                  <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section-padding" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left' }}>
            <div>
              <div className="badge">Testimonials</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Client Success Stories</h2>
            </div>
            <div className="carousel-controls" style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
              <button className="carousel-btn" onClick={() => scrollTestimonials('prev')} aria-label="Previous Testimonial">
                <ChevronLeft size={24} />
              </button>
              <button className="carousel-btn" onClick={() => scrollTestimonials('next')} aria-label="Next Testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="testimonials-container" ref={testimonialsRef}>
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                className="glass-card testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="quote-icon-bg">
                  <Quote size={120} strokeWidth={0.5} />
                </div>
                
                <div className="testimonial-content-wrapper">
                  <div className="stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="testimonial-quote">"{test.quote}"</p>
                  
                  <div className="client-info">
                    <img src={test.image} alt={test.name} className="client-img" />
                    <div className="client-details">
                      <h4 className="client-name">{test.name}</h4>
                      <p className="client-company">{test.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY STACK */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">Tech Stack</div>
            <h2 className="section-title">Powered By Modern Tech</h2>
            <p className="section-desc">We use enterprise-grade frameworks to ensure your product is fast, secure, and scalable.</p>
          </div>

          <div className="tech-grid">
            {[
              { name: 'React', icon: Layout },
              { name: 'Next.js', icon: Globe },
              { name: 'Node.js', icon: Server },
              { name: 'Laravel', icon: Code2 },
              { name: 'Flutter', icon: Smartphone },
              { name: 'AWS', icon: Database },
              { name: 'Docker', icon: Settings },
              { name: 'MySQL', icon: Database },
              { name: 'MongoDB', icon: Database }
            ].map((tech, idx) => (
              <motion.div 
                key={idx} 
                className="tech-item"
                whileHover={{ scale: 1.05 }}
              >
                <tech.icon />
                <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div className="badge">FAQ</div>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="faq-container">
            {[
              { q: "How long does a typical project take?", a: "Depending on the complexity, a standard web application takes 4-8 weeks from discovery to launch." },
              { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your application remains secure and up-to-date." },
              { q: "What is your pricing structure?", a: "We offer both fixed-price project based models and dedicated team hourly models depending on your needs." },
              { q: "Can you redesign an existing website?", a: "Absolutely. We specialize in transforming legacy applications into modern, high-performance digital products." }
            ].map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <ChevronDown 
                    size={20} 
                    style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} 
                  />
                </button>
                {activeFaq === idx && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="faq-answer"
                  >
                    {faq.a}
                  </motion.div>
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
            className="final-cta"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="final-cta-content">
              <h2 className="section-title">Ready To Transform Your Business?</h2>
              <p className="section-desc" style={{ marginBottom: '3rem', color: 'var(--text-primary)' }}>
                Let's discuss how we can help you achieve your goals with our modern web and app solutions.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                Let's Build Something Amazing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

// Data
const services = [
  { icon: Monitor, title: 'Web Development', desc: 'Custom, high-converting websites optimized for speed and SEO.', spanClass: 'bento-span-2' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile apps for iOS and Android.', spanClass: 'bento-span-1' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Premium, intuitive interfaces that engage and convert users.', spanClass: 'bento-span-1' },
  { icon: Brain, title: 'AI Solutions', desc: 'Integrating LLMs and machine learning into your workflows.', spanClass: 'bento-span-1' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Scalable storefronts engineered for high volume sales.', spanClass: 'bento-span-1' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    company: 'Founder',
    quote: 'VivekTech transformed our local shop into a thriving online store. Their team was professional, fast, and delivered exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Priya Patel',
    company: 'Marketing Director',
    quote: 'The website they built for us is incredibly fast and looks stunning. We saw a 40% increase in leads within the first month.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Amit Kumar',
    company: 'CEO',
    quote: 'Exceptional service and support. They don\'t just build software; they build solutions that solve actual business problems.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sarah Jenkins',
    company: 'CTO',
    quote: 'The custom dashboard they built saved our operations team 15 hours a week. The UI is gorgeous and incredibly intuitive.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Vikram Singh',
    company: 'Founder',
    quote: 'From UI design to the final mobile app deployment, VivekTech was incredible. They truly understand what modern startups need.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Neha Gupta',
    company: 'Director',
    quote: 'Our new corporate website is a lead-generation machine. The 3D aesthetics and modern design set us apart from all our competitors.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
];

const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    desc: 'A full-featured online marketplace with multi-vendor support, secure payments, and an intuitive admin panel.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://thediamondport.com/'
  },
  {
    title: 'Healthcare Dashboard',
    category: 'UI/UX & Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    desc: 'A clean, accessible patient management dashboard for a local clinic, improving operational efficiency by 40%.',
    tech: ['Vue.js', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    desc: 'A cross-platform mobile application for a local restaurant chain featuring real-time order tracking.',
    tech: ['React Native', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Corporate Real Estate',
    category: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    desc: 'A premium, high-performance website for a real estate agency with advanced property search filters.',
    tech: ['Next.js', 'Framer Motion', 'Sanity CMS'],
  }
];

export default Home;
