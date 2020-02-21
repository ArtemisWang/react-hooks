import React, { useState } from 'react';

function Example2(){
    const [age, setAge]=useState(18) // 数组解构
    const [sex, setSex]=useState('女')
    const [work, setWork]=useState('前端程序员')
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
 
export default Example2;