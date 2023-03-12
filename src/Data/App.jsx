import React from 'react'
import Nav from '../Components/Navbar/navbar'
import Hero from '../Components/Home/home'
import About from '../Components/About/About'
import Portofolio from '../Components/Portfolio/portofolio'
import Contact from '../Components/Contact/Contact'

export const App = () => {
  return (
    <>
    
      <Nav/>
      <Hero/>
      <About/>
      <Portofolio/>
      <Contact/>
      
    </>
  )
}

export default App
