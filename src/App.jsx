import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Goal from './Components/Goal'
import HealingSection from './Components/Healing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    <Goal/>
    <HealingSection/>
    </>
  )
}

export default App
