
import React from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = React.useState(15)
  function addCounter(){
    setCounter(prevcounter=>prevcounter+1)
  }
  function removeCounter(){
    setCounter(prevcounter=>prevcounter-1)
  }
  return (
    <>
     <h1>React Course</h1>
     <h1>{counter}</h1>
     <button onClick={addCounter}>add</button>{"   "}
     <button onClick={removeCounter}>minus</button>
     <footer>{counter}</footer>
    </>
  )
}

export default App
