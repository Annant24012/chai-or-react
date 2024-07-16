import { useState } from 'react'

import './App.css'

function App() {
  let [count,setcount]=useState(0);

  let addvalue=()=>{
    if(count>=20)
      setcount(count);
    else
    setcount(count+1);
  }
  let subvalue=()=>{
    if(count<=0)
      setcount(0);
    else
    setcount(count-1);
  }
  function resValue() {
    setcount(0);
  }

  return (
    <div className="container">
      <div>
        <h1>Count Value {count}</h1>
        <div className='btn-1'>

        <button className='btn' onClick={addvalue}>add value</button>
        <button className='btn' onClick={subvalue}>subtract value</button>
        <button className='btn' onClick={resValue}>Reset value</button>
        </div>
      </div>
    </div>
  )
}

export default App
