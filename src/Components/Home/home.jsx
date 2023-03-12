import React from 'react'
import './home.css'
import CTA from './CTA'
import ME from '../../Assets/Picsart_23-03-12_16-51-49-451.png'
import SocialMedia from './SocialMedia'

const home = () => {
  return (
    <home>
      <div className="container home_container">
        <h5> Hello, I'm</h5>
        <h1>Winter Veiro</h1>
        <h5 className="text-light">Front End developer</h5>
      <CTA />
      <SocialMedia />
      
      <div className='me'>
        <img src={ME} alt="me"/>
      </div>
      <a href="#contact" className='scrollDown'> scroll down </a>
      </div>
    </home>
  )
}

export default home