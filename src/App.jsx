import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
