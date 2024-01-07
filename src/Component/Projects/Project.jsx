import React from 'react'
import '../Projects/Project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import imdbImg from '../Assets/imdb.png'
import travelImg from '../Assets/travel.png'
import ticImg from '../Assets/tic.png'
import investlImg from '../Assets/invest.png'
import stoneImg from '../Assets/stone.png'

const Project = () => {
  return (
    <div className="project-container">
        <div className="project-box">
        <div className="project-heading">
            <h2>My <span> Projects</span></h2>
            <p>Some of my <span>work</span></p>
        </div>
        <div className="project-content">
            <ProjectCard  projectImg={imdbImg} projectDescription='This IMDB movie app is made with React.js , which has some common features like top movies , upcoming movies and top rated movie. It fetches data from API and shown in the web app.' projectLink='https://movie-website-prisans.vercel.app/' />

            <ProjectCard projectImg={travelImg} projectDescription='It has a travel guider app prototype , which has amazing layout . This app is made with vanilla javascript and HTML CSS. It has some common places listed to travel with beautiful hover effect' projectLink='https://travel-app-prisans.vercel.app/'/>

            <ProjectCard projectImg={ticImg} projectDescription='Tic Tac Toe app is made with React.js , It supports feature of playing with two player and each player can edit their name easily. After the game is over, the result will get displayed with respective to winner name' projectLink='https://tic-tac-toe-ecru-theta.vercel.app/'/>

            <ProjectCard projectImg={investlImg} projectDescription='Investment calculator app is made with React.js , it calculates the result according to given input value of amount , then it will give accurate result after proper calculation' projectLink='https://investment-calculator-one.vercel.app/'/>

            <ProjectCard projectImg={stoneImg} projectDescription='Stone paper scissor is very popular game during our childhood , so I made this game bu using pure vanilla javascript, where user play with the computer and computer will play by choosing random numbers.' projectLink='https://prisans.github.io/stonepaper.github.io/'/>

            
        </div>
        </div>
    </div>
  )
}

export default Project