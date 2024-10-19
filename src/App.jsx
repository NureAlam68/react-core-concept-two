import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick() {
    alert('button click')
  }

  const handleClick2=() => {
    alert('button 2 click')
  }

  const addFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React core concepts-2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* onClick */}
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click me-2</button>
    <button onClick={()=>{alert('Third button click')}}>Third</button>
    <button onClick={()=> {addFive(5)}}>Four</button>
    </>
  )
}

export default App
