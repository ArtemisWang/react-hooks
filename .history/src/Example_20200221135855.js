import React, { useState, useEffect } from 'react';

function Example(){
    const [count, setCount]=useState(0) // 数组解构
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${tis.state.count} times`)
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
 
export default Example;