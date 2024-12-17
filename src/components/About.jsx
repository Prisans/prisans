import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa'
import '../styles/About.css'

const About = () => {
  const skills = [
    {
      icon: FaCode,
      name: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: FaServer,
      name: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs']
    },
    {
      icon: FaDatabase,
      name: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      icon: FaTools,
      name: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'CI/CD']
    }
  ]

  return (
    <div className="about">
      <div className="about-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="header-line"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-content">
            <h2>
              Crafting Digital Solutions with 
              <span className="gradient-text"> Passion</span>
            </h2>
            <p>
              I'm a full-stack developer with a passion for creating innovative digital solutions. 
              With expertise in both frontend and backend technologies, I specialize in building 
              scalable, user-friendly applications that solve real-world problems.
            </p>
            <p>
              My approach combines clean code practices with modern design principles to deliver 
              exceptional results. I'm constantly learning and adapting to new technologies to 
              ensure I can provide the best solutions for every project.
            </p>
          </div>

          <div className="experience-stats">
            <div className="stat">
              <span className="gradient-text stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="gradient-text stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="gradient-text stat-number">20+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="skills-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">
                  <category.icon />
                </div>
                <h3>{category.name}</h3>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + itemIndex * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  )
}

export default About 