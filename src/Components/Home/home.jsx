import React from 'react'
import './home.css'
import CTA from './CTA'

const home = () => {
  return (
    <home>
      <div className="container header_container">
        <h5> Hello, I'm</h5>
        <h1>Wendy Vasquez</h1>
        <h5 className="text-light">Front End developer</h5>
      <CTA />

      <div className='me'></div>
      </div>
    </home>
  )
}

export default home