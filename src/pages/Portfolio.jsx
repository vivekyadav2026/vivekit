import { motion } from 'framer-motion';
import { ExternalLink, Code, MapPin, Star } from 'lucide-react';

// Inline SVG for icons not in this lucide version
const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import PageBanner from '../components/PageBanner';
import { Layers } from 'lucide-react'; // we can just reuse a relevant icon
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
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

  const skills = ['React', 'Next.js', 'Node.js', 'PHP / Laravel', 'React Native', 'MySQL', 'MongoDB', 'UI/UX Design'];

  return (
    <main className="portfolio-page">
      <PageBanner 
        title="Portfolio Showcase" 
        subtitle="Explore our recent work where we combined beautiful design with robust engineering."
        icon={Star}
      />

      {/* === Developer Profile Hero === */}
      <section className="dev-profile-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <motion.div
            className="dev-profile-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Glow blobs */}
            <div className="profile-blob blob-1" />
            <div className="profile-blob blob-2" />

            <div className="dev-profile-inner">
              {/* Photo */}
              <motion.div
                className="dev-avatar-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="dev-avatar-ring">
                  <img src="/vivek.jpg" alt="Vivek Yadav" className="dev-avatar" />
                </div>
                <div className="dev-status-badge">
                  <span className="status-dot" /> Available for work
                </div>
              </motion.div>

              {/* Info */}
              <div className="dev-info">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <span className="dev-role-tag">Full-Stack Developer & Founder</span>
                  <h1 className="dev-name">Vivek Yadav</h1>
                  <p className="dev-bio">
                    Passionate developer building high-performance digital experiences for businesses across India.
                    Specializing in modern web & mobile solutions that drive real growth.
                  </p>
                  <div className="dev-location">
                    <MapPin size={14} />
                    <span>Vishwas Park, Uttam Nagar, New Delhi</span>
                  </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                  className="dev-skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {skills.map((skill, i) => (
                    <span key={i} className="dev-skill-tag">{skill}</span>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="dev-socials"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="https://github.com/vivekyadav2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github-btn"
                  >
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.instagram.com/vivektech.online?igsh=cG5pc2t2NjJqY2pq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn instagram-btn"
                  >
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                  <a href="/contact" className="social-btn contact-cta-btn">
                    <Star size={18} />
                    <span>Hire Me</span>
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="dev-stats"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="stat-item">
                    <span className="stat-num">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-item">
                    <span className="stat-num">5+</span>
                    <span className="stat-label">Years Exp.</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-item">
                    <span className="stat-num">30+</span>
                    <span className="stat-label">Clients</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Projects Grid === */}
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A showcase of my recent work. Turning complex problems into elegant solutions.
          </motion.p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} className="dummy-portfolio-img" />
                <div className="portfolio-overlay">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="icon-btn" title="View Live Site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-btn" title="View Source Code">
                      <Code size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="portfolio-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
