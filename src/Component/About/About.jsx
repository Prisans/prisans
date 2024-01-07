import React from "react";
import "../About/About.css";
import workingImg from "../Assets/working.jpg";
import Cards from "./Cards/Cards";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";
import Skills from "./Skills/Skills";
import resumePdf from '../Assets/Prisans_Singh.pdf'

const About = () => {
  return (
    <div className="about-container">

      <div className="about-container-inner">

        <div className="about-heading">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Get to know<span> me</span>
          </p>
        </div>

        <div className="about-content">
          <div className="about-content-text">
            <p className="main-text">
              I'm <span>frontend developer</span> 
            </p>
            <p className="common-text">
            Seasoned Frontend Developer skilled in harnessing the power of React.js. I specialize in sculpting efficient, intuitive interfaces that seamlessly transform design visions into operational web applications. My meticulous approach ensures code elegance, fostering the creation of dynamic, user-centric digital experiences. Let's join forces to elevate your online footprint through innovative, high-impact development. 
            </p>

            <a href={resumePdf} download><button className="btn about-btn">Dowload CV</button></a>
          </div>


          <div className="about-content-image">
            <img src={workingImg} alt="" />
          </div>
        </div>


        <div className="my-services">
            <h2>My <span> Services</span></h2>
            <div className="service-cards">
            <Cards cardLogo={<HiOutlineComputerDesktop className='c-logo' />} cardTitle='Web Design' cardDes=' Elevate your online presence with tailored Web Design services! As a seasoned designer, I specialize in crafting visually captivating and user-centric websites. Web design became an important aspect of the business. '/>

            <Cards cardLogo={<FaInstagram className='c-logo'/>} cardTitle='Social Media' cardDes='I am your go-to connection catalyst. As a proactive communicator, I thrive on fostering meaningful interactions and sharing insights in the realms of frontend development, web design, and tech innovation.' />

            <Cards cardLogo={<HiOutlineLightBulb className='c-logo'/>} cardTitle='Community' cardDes=' Embracing the collaborative spirit of the developer community, I actively contribute to open source projects. From bug fixes to feature enhancements, my goal is to make a positive impact on the tech landscape. ' />
            </div>
        </div>

        <div className="my-skills">
            <div className="skill-section">
                <h2>My <span> Skills</span></h2>
                <div className="skills-table">

                <div className="row skills-one">
                    <Skills title='HTML/CSS' percent='97' />
                    <Skills title='Javascript' percent='85' />
                    <Skills title='React Js' percent='95' />
                </div>

                <div className="row skills-two">
                    <Skills title='Jquery' percent='75' />
                    <Skills title='NodeJS' percent='80' />
                    <Skills title='MongoDB' percent='70' />
                </div>

                </div>
            </div>

        </div>




      </div>
    </div>
  );
};

export default About;
