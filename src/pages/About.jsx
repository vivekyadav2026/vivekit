import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Info } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <PageBanner 
        title="About VivekTech" 
        subtitle="Bridging the digital gap for local businesses and startups."
        icon={Info}
      />
      
      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Content Grid */}
        <section className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              VivekTech was born out of a simple observation: local Indian businesses and ambitious startups were being left behind in the digital race due to subpar technology solutions.
            </p>
            <p>
              We established VivekTech to bring Silicon Valley-level engineering and premium design aesthetics to businesses across Delhi NCR and India.
            </p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="about-image-placeholder">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="VivekTech expert developers and designers in Delhi NCR office" className="dummy-img" />
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="values-section section-padding">
          <h2 className="text-center section-title mb-4">Mission, Vision & Trust</h2>
          <div className="values-grid">
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Target /></div>
              <h3>Our Mission</h3>
              <p>To bridge the digital gap by engineering highly scalable, revenue-generating digital products for businesses of all sizes.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Lightbulb /></div>
              <h3>Our Vision</h3>
              <p>To be the most trusted and innovative technology partner for brands navigating the digital economy.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Users /></div>
              <h3>Why Trust Us</h3>
              <p>We are radically transparent. We don't speak in confusing technical jargon; we speak in business outcomes. We are trusted by clinics, educational institutions, real estate firms, and retail startups.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
