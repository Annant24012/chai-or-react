import { useState } from 'react'

import './App.css'

function App() {
  const [color,setcolor]=useState("pink");
  let mybody = document.getElementById('mybody')

  mybody.style.backgroundColor=color;
  function  colorChanger(event){
    let c = event.target.value ;
    setcolor(c);
  }
  return (
    <div  className="container">
     <h1>BACKGROUND CHANGER</h1>
     <h4>CLICK TO CHANGE</h4>
     <button onClick={()=>{setcolor("red")}} class="btn" style={{backgroundColor:"red"}}>RED</button>
     <button onClick={()=>{setcolor("blue")}} class="btn" style={{backgroundColor:"blue"}}>BLUE</button>
     <button onClick={()=>{setcolor("pink")}}  class="btn" style={{backgroundColor:"pink"}}>PINK</button>
     <button onClick={()=>{setcolor("green")}} class="btn" style={{backgroundColor:"green"}}>GREEN</button>
     <button onClick={()=>{setcolor("yellow")}} class="btn" style={{backgroundColor: "yellow"}}>YELLOW</button>
     <input type="color" id="pickcolor"  onChange={colorChanger} class="btn" className='p-5 shadow-xl rounded-2xl'/>

     <div className='text-red-800 bg-amber-300 size-9 mx-11' >hello</div>
    </div>
  )
}

export default App
