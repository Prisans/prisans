import React from 'react'
import '../ProjectCard/ProjectCard.css'
import '../ProjectCard/ProjectCard.css'

const ProjectCard = ({projectImg,projectDescription,projectLink}) => {
  return (
    <div className="projectCard-container">
        <div className="project-image">
            <img src={projectImg} alt="imdb" />
        </div>

        <div className="project-description">
            <h2><span>App Idea</span></h2>
            <p>{projectDescription}</p>
            <button><span><a href={projectLink}>View Project</a></span></button>
        </div>
    </div>
  )
}

export default ProjectCard