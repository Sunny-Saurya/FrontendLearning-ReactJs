import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import Question6 from './components/Question6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Question1/> */}
    {/* <Question2/> */}
    {/* <Question3/> */}
    {/* <Question4/> */}
    {/* <Question5/> */}
    <Question6/>
    </>
  )
}

export default App
