import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('userEffect=>老弟，你来了！Index页面')
        return ()=>{
            console.log(`老弟你走了! Index页面`)
        }
    })
    return (<h2>Artemis.com</h2>)
}

function List(){
    useEffect(()=>{
        console.log('userEffect=>老弟，你来了！List页面')
    })
    return <h2>List Page</h2>
}

function Example(){
    const [count, setCount]=useState(0) // 数组解构
    // useEffect(()=>{
    //     console.log(`useEffect=>You clicked ${count} times`)
    // }) // 异步的
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
    )
}
 
export default Example;