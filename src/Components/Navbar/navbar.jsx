import React from 'react'
import './navbar.css'
import {HiHomeModern} from 'react-icons/hi2'
import {FaUserCircle} from 'react-icons/fa'
import{IoCodeWorkingSharp} from 'react-icons/io5'
import {AiFillMessage} from 'react-icons/ai'

export const navbar = () => {
  return (
    <nav>
      <a href='#' className='active'><HiHomeModern/></a> 
      <a href='#about'><FaUserCircle/></a> 
      <a href='#portfolio'><IoCodeWorkingSharp/></a> 
      <a href='#contact'><AiFillMessage/></a> 
    </nav>
  )
}

export default navbar