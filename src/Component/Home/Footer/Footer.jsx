import React from 'react'
import '../Footer/Footer.css'
import { SiLinktree } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {


  return (
    <div className="footer-container">


        

        {/* <div className="nav-section">
            <HiOutlineMenuAlt3 className='nav footer-react-icons outline' onClick={onSelect}/>
        </div> */}

        {/* <div className="footer-theme">
        <button onClick={onSelect} className='nav-btn theme' ><MdOutlineLightMode className='n-icons' /></button>
        </div> */}

        <div className="contact-section">
        <a href="https://linktr.ee/prisanssingh18"><button className='nav-btn fb' ><SiLinktree className='contact footer-react-icons telegram' /></button></a>
        <a href="https://github.com/Prisans"><button className='nav-btn fb' ><FaGithub className='n-icons' /></button></a>
        </div>
    </div>
  )
}

export default Footer