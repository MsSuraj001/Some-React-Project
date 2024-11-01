import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './component'

function App() {
  // const [count, setCount] = useState(0)
//   let Obj = {
//     name : "Card",
//     btnName : "click",
//     userAge : 34,
//     userNeme : "Ms Suraj"
// }

// let myArr =[1,2,3,5]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is the tailwind css</h1>
     <Card1 CardName= "P Card" buName= "Buy Me"></Card1>
     <Card1 CardName= "H Card" buName= "Viset Me"></Card1>
    </>
  )
}

export default App
