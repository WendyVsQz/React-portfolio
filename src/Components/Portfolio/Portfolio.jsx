import React from 'react'
import './portfolio.css'
import project1 from '../../Assets/Weather dashboard.png'
import project2 from '../../Assets/Work day planner.png'
import project3 from '../../Assets/password generator.jpg'
import project4 from '../../Assets/Readme generator.png'
import project5 from '../../Assets/Group profile generator.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My recent work </h5>
    <h2> Portfolio </h2>

  <div className='container portfolio_container'>
  <article className='portfolio_item'> 
  <div className='portfolio_item-image'>
    <h3> Weather dashboard</h3>
      <a href='https://github.com/WendyVsQz/Weather-dashboard'className='btn'>Github</a>
      <img src={project1} alt='weather dashboard'></img>
  </div>
  </article>

  <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <h3> Work day planner </h3>
      <a href='https://github.com/WendyVsQz/Work-day-planner'className='btn'>Github</a>
      <img src={project2} alt='Work day planner'></img>
  </div>
  </article>

  <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <h3> password generator </h3>
      <a href='https://github.com/WendyVsQz/Password-generator'className='btn'>Github</a>
      <img src={project3} alt='password generator'></img>
  </div>
  </article>

  <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <h3> Readme generator </h3>
      <a href='https://github.com/WendyVsQz/Readme-generator'className='btn'>Github</a>
      <img src={project4} alt='Readme generator'></img>
  </div>
  </article>

  <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <h3> Group profile generator</h3>
      <a href='https://github.com/WendyVsQz/Team-profile-generator'className='btn'>Github</a>
      <img src={project5} alt='Group profile generator'></img>
  </div>
  </article>
</div>

    </section>
)
}


export default Portfolio