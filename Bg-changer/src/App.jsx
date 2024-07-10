import { useState } from 'react'
import './App.css'

function App() {
 const [color, setcolor] = useState("black")

 let changecolor =()=>{
  let randomcolor = Math.floor(Math.random()*3333)
  setcolor(`#${randomcolor}`)
 }


  return (
    <>
      <div className="class" style={{backgroundColor:color}}>
      <button onClick={changecolor}  >change color</button>
      </div>
    </>
  )
}

export default App
