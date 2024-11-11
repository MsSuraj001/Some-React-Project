import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import footer from './Component'
import './App.css'
import Card from './Component'

function App() {
  // const [count, setCount] = useState(0)
  let HrDetails ={
    Name: "Ms Suraj",
    Post: "Hr",
    Age: 22,
    Selary: " ",
  }

  return (
    <>
     <h1 className='bg-green-500'>I am a student. My biheviar is No filing No love</h1>
     <Card Post= "Meet Your Hr." Name="Ms Suraj" HrObj={HrDetails}></Card>
     <Card Post= "Meet Your Co." Name ="Milu"></Card>
    </>
  )
}

export default App
