import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Example(){
    const [count, setCount]=useState(0) // 数组解构
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    }) // 异步的
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
 
export default Example;