import React from 'react'
import './portfolio.css'
import project1 from '../../Assets/Weather dashboard.png'
import project2 from '../../Assets/Work day planner.png'
import project3 from '../../Assets/password generator.jpg'
import project4 from '../../Assets/Readme generator.png'
import project5 from '../../Assets/Group profile generator.png'

const data=[
  {
    id: 1,
    image: project1,
    tittle: 'Weather dashboard',
    github: 'https://github.com/WendyVsQz/Weather-dashboard'
  },
  {
    id: 2,
    image: project2,
    tittle: 'Work day planner',
    github: 'https://github.com/WendyVsQz/Work-day-planner'
  },
  {
    id: 3,
    image: project3,
    tittle: 'password generator',
    github: 'https://github.com/WendyVsQz/Password-generator'
  },
  {
    id: 4,
    image: project4,
    tittle: 'Readme generator',
    github: 'https://github.com/WendyVsQz/Readme-generator'
  },
  {
    id: 5,
    image: project5,
    tittle: 'Group profile generator',
    github: 'https://github.com/WendyVsQz/Team-profile-generator'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My recent work </h5>
    <h2> Portfolio </h2>

  <div className='container portfolio_container'>
    {
      data.map(({id, image, title, github}) => {
        return(
  <article key={id} className='portfolio_item'> 
  <div className='portfolio_item-image'>
      <img src={image} alt={title}/>
  </div>
    <h3> {title}</h3>
    <div className='portfolio_item-cta'>
      <a href={github}className='btn btn-primary' target='_blank'>Github</a>
    </div>
  </article>
          
        )
      })
    }
  </div>
</section>
)
}


export default Portfolio