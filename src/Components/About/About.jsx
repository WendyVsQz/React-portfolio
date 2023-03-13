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
        <img src={ME} alt="About image"/>
      </div>
</div>
<div className='about_text'>
<p>
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium,totam rem aperiam, eaque ipsa
quae ab illo inventore veritatis et quasi architecto beatae vitae
dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
sed quia non numquam eius modi tempora incidunt ut labore et dolore
magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
qui in ea voluptate velit esse quam nihil molestiae consequatur, vel 
illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>
</div>
    </section>
  )
}

export default About