import { useState } from 'react'
import './App.scss'
import TopBar from './components/TopBar/TopBar'
import Intro from './components/Intro/Intro'
import Porfolio from './components/Porfolio/Porfolio'
import Works from './components/Works/Works'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

function App() {

  const [ menuOpen, setMenuOpen ] = useState(false)


  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Porfolio/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default App
