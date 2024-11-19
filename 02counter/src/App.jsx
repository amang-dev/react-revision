import { useState } from 'react';
import './App.css'

function App() {

let [counter, setCounter] = useState(5)

const addValue =  () =>{
  if(counter === 20){
    return;
  }else{
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
   
  }
}

const removeValue = () =>{
  if(counter === 0){
    return
  } else{
    setCounter(counter - 1 )
  }
 
}

  return (
    <>
      <h1>Counter App {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
     
    </>
  )
}

export default App
