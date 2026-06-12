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
      desc: 'Your website is your 24/7 salesperson. We build ultra-modern, high-converting business websites that establish authority and capture leads. Whether you need a corporate site, a portal for your school, or a landing page for your local business, we engineer platforms that perform flawlessly.',
      features: ['3x Faster Page Load Speeds', 'Built-in On-Page SEO Architecture', 'Mobile-First Responsive Design', 'Custom Dashboards'],
      price: '₹5,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Engage your customers right in their pockets. We design and develop scalable, secure, and incredibly intuitive mobile applications. From native Swift/Kotlin apps to dynamic cross-platform Flutter solutions, we turn complex ideas into seamless user experiences.',
      features: ['Higher User Retention & Engagement', 'Native Device Performance', 'Seamless Cross-Platform Capabilities', 'Push Notifications'],
      price: '₹15,000'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      desc: 'Stop losing sales to clunky checkout processes. We build robust online stores engineered for high volume, maximum security, and exceptional user experiences. Whether you are a local boutique transitioning online or a large-scale distributor, our Shopify and custom e-commerce solutions scale with your inventory.',
      features: ['Frictionless Checkout Experience', 'Highly Secure Payment Processing', 'Automated Inventory Synchronization', 'Multi-vendor Support'],
      price: '₹10,000'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      desc: 'Off-the-shelf software rarely fits perfectly. We build bespoke software architectures, including custom ERPs and CRMs, tailored specifically to your operational workflows. Eliminate manual data entry, reduce human error, and automate your business from the ground up.',
      features: ['100% Tailored to Your Workflows', 'Scalable Cloud Architecture', 'Massive Reduction in Operational Overhead', 'Role-Based Access Control'],
      price: '₹25,000'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      desc: 'Great code needs great design. Our UI/UX design philosophy merges aesthetic brilliance with psychological principles of conversion. We design intuitive, frictionless interfaces that delight users and guide them effortlessly toward your business goals.',
      features: ['Decreased Bounce Rates', 'Higher Customer Satisfaction', 'Consistent Premium Brand Identity', 'High-Fidelity Prototyping'],
      price: '₹5,000'
    },
    {
      icon: BarChart,
      title: 'Digital Marketing & SEO',
      desc: 'A beautiful website is useless if nobody can find it. We implement aggressive, data-backed SEO and digital marketing strategies to put your business at the top of Google. We specialize in Local SEO to ensure your clinic, hotel, or local business dominates your geographical market.',
      features: ['Predictable Organic Lead Generation', 'Dominance in Local Search', 'High ROI compared to Paid Ads', 'Technical SEO Audits'],
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
