import React from 'react'
import ME from '../../Assets/me-about.png'
import './About.css'

export const About = () => {
  return (
    <section id ="about">
<h5>Get to know me</h5>
<h1>About me </h1>

<div className='container about_container'>
<div className='about_me'>
  <div className='about_me-image'>
        <img src={ME} alt="About image"/>
      </div>
</div>
  <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Eos, accusantium quas. Aliquid maiores perspiciatis id doloremque fuga, 
sequi ipsa neque voluptatibus cumque alias consectetur dolore recusandae qui quam molestiae! 
Asperiores?
  </p>
<a href='#contact' className='btn'>get in contact</a>
</div>
</section>
  )
}

export default About