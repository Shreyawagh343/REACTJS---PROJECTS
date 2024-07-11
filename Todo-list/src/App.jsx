import { useState } from 'react'
import './App.css'

function App() {
  let [todo, settodo] = useState([])

  let list = todo.map((value,index)=>{
    return (
     
      <Todolist value={value} key={index} todo={todo}
      settodolist={settodo}  index={index}/>
    )
  })


  let savetodolist =(event)=>{
    let toname = event.target.toname.value;
    if(!todo.includes(toname)){
      let finaldolist = [...todo ,toname];
      settodo(finaldolist)
    }
    else {
      alert("Todo is Already Exists...")
    }

    event.preventDefault();
  }

  return (
    <>
      <div className="app">
        <h1>Todo List</h1>
        <form action="" onSubmit={savetodolist} >
          <input type="text" name='toname' />
          <button>Submit</button>
        </form>
        <div className="todo">
        <ul>
         {list}
        </ul>
        </div>
      </div>
    </>
  )
}

export default App

function Todolist({value,index,todo,settodolist}){
  let [status , setstatus] = useState(false)

  let deletelist = ()=>{
    let finalsetdata = todo.filter((v,i)=>i!=index);
    settodolist(finalsetdata);
  }


  return ( 
    <>
    <li className={status ? "checked" : ""}  onClick={()=>{setstatus(!status)}}  >{value}<span onClick={deletelist}>&times;</span></li>
    </>
  )
}