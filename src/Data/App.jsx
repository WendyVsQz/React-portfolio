import React from 'react'
import Nav from '../Components/Navbar/navbar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Portofolio from '../Components/Portfolio/portofolio'
import Contact from '../Components/Contact/Contact'

export const App = () => {
  return (
    <>
    
      <Nav/>
      <Home/>
      <About/>
      <Portofolio/>
      <Contact/>
      
    </>
  )
}

export default App
