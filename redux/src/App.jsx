import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Adduser from './Components/Adduser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Adduser />
    </>
  )
}

export default App
