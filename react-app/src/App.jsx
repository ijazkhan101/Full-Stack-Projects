import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>react js learning  2024</h1>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card/>

    
    </>
  )
}

export default App
