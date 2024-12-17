import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/prisans', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/prisans', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/prisans', label: 'Twitter' }
  ]

  return (
    <footer className={`footer ${isHomePage ? 'home-footer' : ''}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Prisans
            </Link>
            <p>Building digital experiences that make a difference</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-social">
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
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prisans. All rights reserved.</p>
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 