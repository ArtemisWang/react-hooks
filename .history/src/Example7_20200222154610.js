import React,{useState} from 'react';

function Example7(){
    const [xiaohong, setXiaohong]=useState('小红在待客状态')
    const [zhiling, setZhiling]=useState('志玲在待客状态')

    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setXiaohong(new Date().getTime()+'志玲向我们走来')}}>志玲</button>
        </>
    )
}