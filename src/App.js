import React from 'react'
import './App.css'
import {Route,Routes , BrowserRouter,Link} from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Project from './Component/Projects/Project'
import Contact from './Component/Contact/Contact'


const App = () => {


  return (
    <div className='app-container'>
      <BrowserRouter>
     <div className="upperNav">
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/project' >Project</Link></li>
        <li><Link to='/contact ' >Contact</Link></li>
        
      </ul>
     </div>
     
     
     <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<About/>} path='/about' />
      <Route element={<Project/>} path='/project' />
      <Route element={<Contact/>} path='/contact' />
     </Routes>

     {/* <div className="app-footer">
      <p>© Prisans Singh</p>
     </div> */}
     
     </BrowserRouter>
    
    </div>
  )
}

export default App