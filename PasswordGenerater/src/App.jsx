import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);        // this line will be the use and diffine useState hook
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook 
  const passwordRef = useRef(null)

  // Password Generater callback function use this line 
  const passwordGenerater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    

    if(numberAllowed) str += "01234566789"      // this line will be not use to the code
    if(charAllowed) str += "@!#$%&*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [numberAllowed,length,charAllowed,setPassword])

  //Password Copy use the callback function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();              // this line will be the use data selected to copy box to clicpboard
    passwordRef.current?.setSelectionRange(0, 99)     // this line will be the rnage diffine the value selected  51 17
    window.navigator.clipboard.writeText(password)
  },
  [password])

  // this line will be the use useEffect can use then
  useEffect(() => {                       // this line can be the use of rendring prosess ||  Password ko Dubara se Generate karna 
    passwordGenerater()
  }, [length,numberAllowed,charAllowed,passwordGenerater])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h2 className='text-white text-center py-4 text-xl'>Password Generater</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-5'>

    {/* this line will be the  use of passwordRef  */}
        <input type="text"
        value={password}
        className='outline-none w-full py-3 px-8 bg-white'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />

        {/* this line will be the use to password to copy the ClipBoard */}
        <button onClick={copyPasswordToClipboard} className='bg-blue-700 text-white px-3 py-3 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          {/* this input will be the use diffine the range of Password */}
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />

          <label>Length: {length}</label>

        </div>

          {/* this div will be the use of Number Allowed function  */}
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked= {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}/>
              <label htmlFor="numberInput">Number</label>
          </div>

              {/* this div will be the use of Character Allowed function */}
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked= {charAllowed}
              id='characterInput'
              onChange={() => {             //this is the callback function use 
                setCharAllowed((prev) => !prev);        //if true the false ||  false the true  this line be the exicute
              }}/>
              <label htmlFor="numberInput">Characters</label>
          </div>

      </div>
    </div>
     {/* <h1 className='text-4xl text-center text-white '>Password Generater</h1> */}
    </>
  )
}

export default App
