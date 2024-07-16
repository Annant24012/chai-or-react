
import { useState } from 'react';

function App() {
 let [count,setCount]=useState(18);
 if(count<=0){
  setCount(count=0);
 }
 if(count>=20)
 {
  setCount(20);
 }
 let addvalue=()=>{
  count = count+1;
  setCount(count);
 }
 let subvalue=()=>{

  count = count-1;
  setCount(count);
 }
 function resValue() {
  count = 0;
  setCount(count);
}

  return (
    <div>
      <h1>count Value {count}</h1>
      <button onClick={addvalue}>add value</button>
      <button onClick={subvalue}>subtract value</button>
      <button onClick={resValue}>Reset value</button>
    </div>

  );
}

export default App;
