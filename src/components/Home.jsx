import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import '../styles/Home.css'

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/prisans', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/prisans', label: 'LinkedIn' }
  ]

  return (
    <div className="home">
      <div className="home-content">
        <motion.div 
          className="home-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there, I'm
          </motion.span>

          <motion.h1 
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Prisans</span>
            <span className="title">Full Stack Developer</span>
          </motion.h1>

          <motion.p 
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I create exceptional digital experiences that make a difference. 
            Specializing in building modern, responsive websites and applications 
            that deliver real value.
          </motion.p>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/projects" className="primary-btn">
              View My Work
              <FaArrowRight />
              <span className="btn-gradient"></span>
            </Link>
            <Link to="/contact" className="secondary-btn">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="image-wrapper glass">
            <img src="/path-to-your-image.jpg" alt="Developer" />
            <div className="image-overlay"></div>
          </div>
          <div className="pattern-grid"></div>
        </motion.div>
      </div>

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  )
}

export default Home 