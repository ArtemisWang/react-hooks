import React, { useState } from 'react';


function Example4(){
    const [count, setCount]=useState(0) // 数组解构
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
 
export default Example4;