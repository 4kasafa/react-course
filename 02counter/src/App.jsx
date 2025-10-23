import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(12);
  //let counter = 12;

  const addValue = () => {
    setCount(count + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  const addMultiple = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  const removeMultiple = () => {
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <h1>React counter app</h1>
      <h2>Counter value : {count}</h2>
      <div>
        <button onClick={addValue} >+ 1</button>
        <button onClick={removeValue} >- 1</button>
      </div>
      <div>
        <button onClick={addMultiple} >+ 5</button>
        <button onClick={removeMultiple} >- 5</button>
      </div>
      <p>Udemy exercize by kasafa </p>
    </>
  )
}

export default App
