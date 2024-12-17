import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/prisans', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/prisans', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/prisans', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:contact@prisans.dev', label: 'Email' }
  ]

  return (
    <div className="contact">
      <div className="contact-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.div 
          className="header-line"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Let's Build Something <span className="gradient-text">Amazing</span> Together</h2>
          <p>
            I'm currently available for freelance work and exciting opportunities. 
            Whether you have a project in mind or just want to chat, feel free to reach out!
          </p>
          
          <div className="contact-social">
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
        </motion.div>

        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${status}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' : 
             'Send Message'}
            <span className="btn-gradient"></span>
          </button>
        </motion.form>
      </div>

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  )
}

export default Contact 