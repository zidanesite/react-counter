import React,{useState} from 'react'

function FunctionCounter() {
    const[number,setNumber]=useState(0);
    const High=()=>{
        setNumber(number + 1);
    }
    const Low=()=>{
        setNumber(number - 1);
    }
  return (
    <div className='FuncCount'>
        <h1>FuncCounter {number}</h1>
        <button onClick={High}>High</button>
        <button onClick={Low}>Low</button>

    </div>
  )
}

export default FunctionCounter