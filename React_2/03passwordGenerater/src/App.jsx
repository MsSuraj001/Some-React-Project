import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

// function App() {
//   const [lenght, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   // useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerater = useCallback( () => {
//     let pass = ""
//     let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) str += "01234567890"
//     if(charAllowed) str += "!@#$%^&*()~{}[]|+-"
//     for (let i = 1; i <length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)
//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipbord = useCallback( () => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,99);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerater()
//   }, [length,numberAllowed,charAllowed, passwordGenerater])

//   return (
//     <>
//     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
//       <h1 className='text-white text-center my-3'>Password Generater</h1>
//       <div className='flex shadow rounded-lg overflow-hidden my-4'>
//         <input
//          type="text"
//          value={password}
//          className='outline-none w-full py-1 px-3'
//          placeholder='Password'
//          readOnly
//          ref={passwordRef}
//           />
//           <button
//           onClick={copyPasswordToClipbord}
//           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//           >Copy</button>
//       </div>

//       <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//           <input 
//           type="text" 
//           min = {8}
//           max = {100}
//           value={length}
//           className='cursor-pointer'
//           onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label htmlFor="">lenght{length}</label>
//         </div>
//       </div>

//      <div className='flex items-center gap-x-1'>
//       <input 
//         type = "checkbox"
//         defaultChecked = {numberAllowed}
//         id='numberInput'
//         onChange={() => {
//           setNumberAllowed((prev) => !prev)
//         }}
//       />
//       <label htmlFor="numberInput">Number</label>
//      </div>

//      <div className='flex items-center gap-x-1'>
//       <input 
//         type="checkbox" 
//         defaultChecked = {charAllowed}
//         id = 'characterInput'
//         onChange={() => {
//           setCharAllowed((prev) => !prev)
//         }}
//       />
//       <label htmlFor="characterInput">Characters</label>
//      </div>

//     </div>
//     </>
//   )
// }
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
