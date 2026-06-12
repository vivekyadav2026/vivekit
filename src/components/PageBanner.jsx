import { motion } from 'framer-motion';
import './PageBanner.css';

const PageBanner = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="page-banner-container">
      <div className="page-banner-3d-wrapper">
        <motion.div 
          className="page-banner-face"
          initial={{ opacity: 0, rotateX: -20, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="page-banner-content">
            {Icon && <div className="page-banner-icon"><Icon size={48} strokeWidth={1} /></div>}
            <h1 className="page-banner-title">{title}</h1>
            <p className="page-banner-subtitle">{subtitle}</p>
          </div>
          
          {/* Decorative 3D elements */}
          <div className="page-banner-glow"></div>
          <div className="page-banner-grid"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;
