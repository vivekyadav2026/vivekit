import React, { useState, useEffect } from 'react';
import './Banner.css';
import { Sparkles, X } from 'lucide-react';

const Banner = () => {
  // Persist closed state in sessionStorage so banner shows on fresh visits
  // but hides if user explicitly closes it during the same session
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem('bannerClosed') !== 'true';
  });

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('bannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="banner-perspective-wrapper">
      <div className="top-banner 3d-banner" role="alert">
        {/* 3D Sides for extrusion effect */}
        <div className="banner-face banner-front">
          <div className="banner-content">
            <Sparkles className="banner-icon" size={16} />
            <span className="banner-text">
              <strong>Special Offer!</strong> Get 20% off on all our premium 3D services this month. Contact us to learn more!
            </span>
          </div>
          <button
            className="banner-close"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <X size={14} />
          </button>
        </div>
        <div className="banner-face banner-bottom"></div>
      </div>
    </div>
  );
};

export default Banner;
