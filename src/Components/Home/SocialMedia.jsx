import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {SiSlack} from 'react-icons/si'

const socialMedia = () => {
  return (
    <div className='SocialMedia'>
      <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com' target='_blank'><BsGithub /></a>
      <a href='https://twitter.com' target='_blank'><FaTwitterSquare /></a>
      <a href='https://slack.com' target='_blank'><SiSlack/></a>
    </div>
  )
}

export default socialMedia