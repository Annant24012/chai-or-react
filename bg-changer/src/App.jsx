import { useState } from 'react'

import './App.css'

function App() {
  const [color,setcolor]=useState("Red");
  let mybody = document.getElementById('mybody')

  mybody.style.backgroundColor=color;
  return (
    <div  className="container">
     <h1>BACKGROUND CHANGER</h1>
     <h4>CLICK TO CHANGE</h4>
     <button onClick={()=>{setcolor("red")}} class="btn" style={{backgroundColor:"red"}}>RED</button>
     <button onClick={()=>{setcolor("blue")}} class="btn" style={{backgroundColor:"blue"}}>BLUE</button>
     <button onClick={()=>{setcolor("pink")}}  class="btn" style={{backgroundColor:"pink"}}>PINK</button>
     <button onClick={()=>{setcolor("green")}} class="btn" style={{backgroundColor:"green"}}>GREEN</button>
     <button onClick={()=>{setcolor("yellow")}} class="btn" style={{backgroundColor: "yellow"}}>YELLOW</button>
    </div>
  )
}

export default App
