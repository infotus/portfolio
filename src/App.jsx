import React from 'react'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <>
    <Sidenav/>
    <Home/>
    <About />
    <Projects/>
    <Contact/>

  </>
  )
}

export default App