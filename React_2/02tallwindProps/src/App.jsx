import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let addValue = () => {
    // setCount(count + 1)
    // setCount(prevcount => prevcount + 1)
    // setCount(prevcount => prevcount + 1) //this line will be the use of increse 4 then 4
    // setCount(prevcount => prevcount + 1)
    // setCount(prevcount => prevcount + 1)
    if(count >= 20){
      count;
    }
    else{
      setCount(count + 1)
    }
  }

let removevalue = () => {
  // setCount(count - 1)
  if(count <= 0){
    count;
  }
  else{
    setCount(count - 1)
  }
}  

  return (
    <>
     <h1 className='bg-green-200'>Counter App</h1>
     <button onClick={addValue}>Add value {count}</button>
     <button onClick={removevalue}>Remove vlaue {count}</button>
    </>
  )
}

export default App
