import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import '../styles/Projects.css'
import home from '../assets/estate.png'
import halo from '../assets/halo.png'
import panda from '../assets/panda.png'
import photoOne from '../assets/photo-one.png'
import photo from '../assets/photo.png'
import tomato from '../assets/tomato.png'

const Projects = () => {
  const projects = [
    {
      title: "Home Finder",
      description: "A real estate website with advanced search features, property listings, and user authentication. Built with React, Node.js, and MongoDB.",
      image: home,
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        live: "https://real-estate-sooty-eta.vercel.app/",
      }
    },
    {
      title: "Dental Website",
      description: "A dental care website with appointment scheduling, patient management, and online payment integration.",
      image: halo,
      tags: ["React", "Firebase"],
      links: {
        live: "https://halo-dental.vercel.app/",
      }
    },
    {
      title: "Lens Life",
      description: "A portfolio website for photographers with image galleries, client testimonials, and contact information.",
      image: photo,
      tags: ["React", "Framer Motion"],
      links: {
        live: "https://demo-photo.vercel.app/",
      }
    },
    {
      title: "PandaPay",
      description: "A secure online payment platform with transaction tracking and user authentication.",
      image: panda,
      tags: ["React", "GSAP"],
      links: {
        live: "https://pandapay-eight.vercel.app/",
      }
    },
    {
      title: "LuxeFrame",
      description: "A portfolio website for photographers with image galleries, client testimonials, and contact information.",
      image: photoOne,
      tags: ["React", "Framer Motion" , "GSAP"],
      links: {
        live: "https://demo-photo-two.vercel.app/",
      }
    },
    {
      title: "Tomato Restaurant",
      description: "A restaurant website with online ordering, menu management, and customer reviews.",
      image: tomato,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        live: "https://tomato-omega.vercel.app/",
      }
    }
  ]

  return (
    <div className="projects">
      <div className="projects-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h1>
        <motion.div 
          className="header-line"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <p>Some of my recent work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article 
            key={index}
            className="project-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.links.design && (
                  <a href={project.links.design} target="_blank" rel="noopener noreferrer" aria-label="Design Files">
                    <FaFigma />
                  </a>
                )}
              </div>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  )
}

export default Projects 