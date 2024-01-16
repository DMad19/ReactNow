import React from 'react';
import './App.css'

function App() {
  const [length,setLength] = React.useState(8);
  const [numbersAllowed,setNumbersAllowed] = React.useState(false)
  const [charsAllowed,setCharsAllowed] = React.useState(false)
  const [password,setpassword] = React.useState('')
  const generatePassword = React.useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbersAllowed) str+='123456789'
    if(charsAllowed) str+= '!"#$%&()*+,-./:;<=>?@ []^_` {|}~'
    for(let i=0;i<length;i++){
      const index = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(index)
      console.log(pass)
    }
    setpassword(pass)
  },[length,numbersAllowed,charsAllowed])

  React.useEffect(()=>{
    generatePassword()
  },[length, numbersAllowed, charsAllowed])

  const copyToClipBoard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  const passwordRef = React.useRef(null)
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        placeholder='Password'
        value={password} 
        className='outline-none w-full py-1 px-3'
        readOnly
        ref = {passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyToClipBoard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numbersAllowed}
          onChange={()=>{setNumbersAllowed(prev=>!prev)}}
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charsAllowed}
          onChange={()=>{setCharsAllowed(prev=>!prev)}}
          />
          <label htmlFor="Characters">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
