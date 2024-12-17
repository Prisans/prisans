import React from 'react'
import { motion } from 'framer-motion'
import { FaGlobe, FaUser, FaMobile, FaCode, FaPalette, FaRocket } from 'react-icons/fa'
import '../styles/Services.css'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: "Business Websites",
      description: "Custom-built business websites that drive growth and engagement. Optimized for conversions and user experience.",
      icon: FaGlobe,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management System",
        "Analytics Integration"
      ]
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work with stunning portfolio websites. Perfect for creatives, professionals, and freelancers.",
      icon: FaUser,
      features: [
        "Project Showcases",
        "Interactive Galleries",
        "Personal Branding",
        "Contact Forms"
      ]
    },
    {
      title: "App Development",
      description: "Full-stack application development for web and mobile platforms. Building scalable solutions for your business.",
      icon: FaMobile,
      features: [
        "Cross-platform Development",
        "User Authentication",
        "Real-time Updates",
        "Cloud Integration"
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Well-structured, maintainable code following best practices"
    },
    {
      icon: FaPalette,
      title: "Modern Design",
      description: "Contemporary aesthetics with intuitive user interfaces"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimized for speed and efficient resource usage"
    }
  ]

  const handleGetStarted = () => {
    navigate('/contact')
  }

  return (
    <div className="services">
      <div className="services-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h1>
        <motion.div 
          className="header-line"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <p>Crafting digital solutions for your success</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="service-icon">
              <service.icon />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className="feature-list">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + featureIndex * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="additional-features">
        <h2>Every Project Includes</h2>
        <div className="features-grid">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss your requirements and create something amazing together.</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
        >
          Get Started
          <span className="btn-gradient"></span>
        </motion.button>
      </div>

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  )
}

export default Services 