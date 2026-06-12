import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '919534354791';
  const message = 'Hello VivekTech, I would like to discuss a project.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="pulse-ring"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
