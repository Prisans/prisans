import React from 'react'
import './Home.css'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home