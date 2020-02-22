import React, {useRef, useState,useEffect} from 'react';

function Example8(){
    const inputEl=useRef(null)
    const onButtonClick=()=>{
        inputEl.current.value="Artemis"
        console.log(inputEl)
    }

    const [text, setText]=useState('Art')
    const textRef=useRef(null)
    useEffect(()=>{
        textRef=text
        console.log('textRef.current:',textRef.current)
    })

    return (
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
    )
}
 
export default Example8