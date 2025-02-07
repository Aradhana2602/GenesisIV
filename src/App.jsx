import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Sponsors from './pages/sponsors'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Home/>
      <About />
      <Sponsors/>
      
    </>
  )
}

export default App
