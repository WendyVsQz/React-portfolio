import React from 'react'
import './navbar.css'
import {HiHomeModern} from 'react-icons/hi2'
import {FaUserCircle} from 'react-icons/fa'
import{IoCodeWorkingSharp} from 'react-icons/io5'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const navbar = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav> {/* home section */}
      <a href='#' onClick={()=> setActiveNav('#')} 
      className= {activeNav ==='#' ? 'active' : ''}><HiHomeModern/></a> 
      {/* about section */}
      <a href='#about' onClick={() => setActiveNav('#about')} 
      className= {activeNav ==='#' ? 'active' : ''}><FaUserCircle/></a> 
      {/* portfolio section*/}
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} 
      className={activeNav === '#' ? 'active' : ''}><IoCodeWorkingSharp/></a> 
      {/* contact section */}
      <a href='#contact'onClick={()=> setActiveNav('#contact')} 
      className={activeNav === '#' ? 'active' : ''}><AiFillMessage/></a> 
    </nav>
  )
}

export default navbar