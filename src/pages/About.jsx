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
              VivekTech was founded with a clear mission: to empower small setups, local businesses, and startups to scale via technology. In an increasingly digital world, many businesses struggle to establish a strong online presence. We are here to change that.
            </p>
            <p>
              We believe that a professional, high-performing website or app shouldn't be a luxury reserved for large corporations. It should be accessible, affordable, and tailored to meet the unique needs of your growing business.
            </p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="about-image-placeholder">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="VivekTech Team" className="dummy-img" />
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="values-section section-padding">
          <h2 className="text-center section-title mb-4">Our Core Values</h2>
          <div className="values-grid">
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Target /></div>
              <h3>Result-Oriented</h3>
              <p>We focus on delivering digital solutions that generate leads, increase sales, and drive actual business growth.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Lightbulb /></div>
              <h3>Innovation</h3>
              <p>Using the latest tech stacks and modern design principles to ensure your business stands out from the competition.</p>
            </motion.div>
            <motion.div className="value-card" whileHover={{ y: -10 }}>
              <div className="icon-box"><Users /></div>
              <h3>Client-Centric</h3>
              <p>Your success is our success. We prioritize clear communication, transparency, and ongoing support.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
