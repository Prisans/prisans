import React from 'react'
import '../Skills/Skills.css'

const Skills = ({title,percent}) => {
  return (
    <div className="skill-container">
        <p className="skill-title">{title}</p>
        <div className="skill-loader">
            <div className={`loader-${percent}`}>{percent}%</div>
        </div>
    </div>
  )
}

export default Skills