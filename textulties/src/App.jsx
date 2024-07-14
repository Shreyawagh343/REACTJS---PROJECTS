import './App.css'
import { useContext } from 'react';
import Navbar from './components/Navbar'
import { useState } from 'react'
import { ThemeContext } from './contexts/theme';
import ToggleBtn from './components/ToggleBtn/toggleBtn';

function App() {
  const [text, settext] = useState("enter your text")
  const [{ themeName }] = useContext(ThemeContext);

  let changetoupper = ()=>{
    let finaldata = text.toUpperCase();
    settext(finaldata)
  }
  let changetolower = ()=>{
    let finaldata = text.toLowerCase();
    settext(finaldata)
  }

   
  return (
    <>
      <Navbar/>
      <div className="main">
        <textarea id='text' name='text' onChange={(e)=>settext(e.target.value)} value={text}></textarea>
      </div>
      <div className="btn">
        <button className='btn1' onClick={changetoupper}>Uppercase</button>
        <button className='btn2' onClick={changetolower} >Lowercase</button>
      </div>
      <div className="preview">
        <h1>Your Preview</h1>
        <p>Words use are : {text.split(" ").length}</p>
        <p>Characters  are : {text.length}</p>
      </div>
      <div className={`${themeName} app`}>
      <div className="card">
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <ToggleBtn />
        </div>
        <h1>Toggle Theme App</h1>
        <h4>Dark Mode is {themeName === 'dark' ? 'On' : 'Off'}</h4>
      </div>
    </div>
    </>
  )
}

export default App
