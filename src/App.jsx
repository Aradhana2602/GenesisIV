import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Sponsors from './pages/sponsors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Home/>
      <Sponsors/>
    </>
  )
}

export default App
