import React from 'react'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
    <Sidenav/>
    <Home/>
    <Projects/>
    <Contact/>
  </div>
  )
}

export default App