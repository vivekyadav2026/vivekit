import { motion } from 'framer-motion';
import { Monitor, Smartphone, ShoppingCart, Code, PenTool, BarChart, Layers } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const servicesList = [
    {
      icon: Monitor,
      title: 'Web Development',
      desc: 'Custom-built, high-performance websites that look great on all devices. From landing pages to complex corporate sites, we ensure speed, SEO optimization, and an excellent user experience.',
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'Fast Loading Speeds'],
      price: '₹5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Engage your customers on the go with native or cross-platform mobile applications. We build intuitive, secure, and scalable apps for iOS and Android platforms.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Focused', 'API Integration'],
      price: '₹15,000'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      desc: 'Robust online stores designed to convert visitors into buyers. Secure payment gateways, inventory management, and seamless checkout experiences.',
      features: ['Payment Gateways', 'Inventory Management', 'Secure Checkout', 'Custom Carts'],
      price: '₹10,000'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      desc: 'Tailor-made software solutions to automate your business processes and increase efficiency. We build what off-the-shelf software cant provide.',
      features: ['Process Automation', 'Scalable Architecture', 'Secure Data', 'Custom Workflows'],
      price: '₹25,000'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      desc: 'Beautiful, user-centric interfaces that make your digital products a joy to use. We prioritize user research, wireframing, and interactive prototyping.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      price: '₹5,000'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing & SEO',
      desc: 'Boost your online visibility and drive targeted traffic to your business through data-driven SEO, content strategies, and performance marketing.',
      features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Analytics Tracking'],
      price: '₹5,000/mo'
    }
  ];

  return (
    <main className="services-page">
      <PageBanner 
        title="Our Services" 
        subtitle="Comprehensive digital solutions designed to help your business thrive in the modern era."
        icon={Layers}
      />
      <div className="container" style={{ paddingBottom: '4rem' }}>

        <motion.div
          className="services-detailed-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesList.map((service, index) => (
            <motion.div key={index} className="service-detail-card" variants={itemVariants}>
              <div className="card-header">
                <div className="icon-wrapper">
                  <service.icon size={32} />
                </div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.desc}</p>

              <div className="service-features">
                <h4>Key Features:</h4>
                <ul>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="price-tag">
                <span>Starting From: {service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
