import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "/path-to-ecommerce-image.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project-demo.com",
        design: "https://figma.com/file/..."
      }
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features and progress tracking. Includes drag-and-drop functionality.",
      image: "/path-to-task-app-image.jpg",
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project-demo.com"
      }
    },
    {
      title: "AI Chat Application",
      description: "Modern chat application powered by artificial intelligence for smart conversations. Features real-time messaging and voice inputs.",
      image: "/path-to-chat-app-image.jpg",
      tags: ["Next.js", "OpenAI API", "Socket.io", "TypeScript"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project-demo.com",
        design: "https://figma.com/file/..."
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