import React from 'react'
import { FaInstagram } from "react-icons/fa";

import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">

        <div className="nav-icons">
          <a href="https://instagram.com/prisans._?igshid=ZDc4ODBmNjlmNQ=="><button className='nav-btn insta' ><FaInstagram className='n-icons' /></button></a>
          
          <a href="https://www.linkedin.com/in/prisans-singh/?profileId=ACoAAD6cpW4Bn13OyVkepj0NPkZYrdXtBphwrGo"><button className='nav-btn linkedin' ><IoLogoLinkedin className='n-icons' /></button></a>
          <a href="https://twitter.com/PrisansSingh"><button className='nav-btn twitter' ><FaTwitter className='n-icons' /></button></a>
        </div>

    </div>
  )
}

export default Navbar