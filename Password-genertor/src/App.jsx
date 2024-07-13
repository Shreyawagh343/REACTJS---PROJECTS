import { useState } from 'react'
import './App.css'
import { LC, NC, SC, UC } from './data/passworddata'

function App() {
  const [uppercase, setuppercase] = useState(false)
  const [lowercase, setlowercase] = useState(false)
  const [number, setnumber] = useState(false)
  const [symbol, setsymbol] = useState(false)
  const [passwordlength, setpasswordlength] = useState(10)
  const [finalpassword, setfinalpassword] = useState('')

  let createpassword =()=>{
    let charSet = ""
    let finalpassword =""
    if(uppercase || lowercase || number || symbol){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      
      for(let i=0;i<passwordlength;i++){
        finalpassword +=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setfinalpassword(finalpassword)
    }
    else {
      alert("First Select The checkbox")
    }

  }

    let copypassword =()=>{
      navigator.clipboard.writeText(finalpassword)
    }

  return (
    <>
      <div className="container">
        <h1>password generator</h1>
        <div className="box">
          <input type="text"  value={finalpassword}/> <button onClick={copypassword}  >Copy</button>
        </div>
        <div className="length">
          <label htmlFor="">Password Length</label>
          <input type="number" max={20} min={10} value={passwordlength} onChange={(event)=>setpasswordlength(event.target.value)}/>
        </div>

        <div className="checkbox">
          <input type="checkbox" checked={uppercase} 
          onChange={()=>setuppercase(!uppercase)} />
          <label htmlFor="">inculde uppercase Letter</label>
        </div>
        <div className="checkbox">
          <input type="checkbox"  checked={lowercase} 
          onChange={()=>setlowercase(!lowercase)}/>
          <label htmlFor="">inculde lower case Letter</label>
        </div>
        <div className="checkbox">
          <input type="checkbox"  checked={number} 
          onChange={()=>setnumber(!number)}/>
          <label htmlFor="">inculde numbers</label>
        </div>
        <div className="checkbox">
          <input type="checkbox"  checked={symbol} 
          onChange={()=>setsymbol(!symbol)}/>
          <label htmlFor="">inculde symbols</label>
        </div>
        <div className="button">
          <button onClick={createpassword}>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
