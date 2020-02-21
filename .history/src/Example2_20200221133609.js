import React, { useState } from 'react';
let showSex=true

function Example2(){
    const [age, setAge]=useState(18) // 数组解构
    if(showSex){
        const [sex, setSex]=useState('女')
        showSex=false
    }
    
    const [work, setWork]=useState('前端程序员')
    return (
        <div>
            <p>Artemis今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
}
 
export default Example2;