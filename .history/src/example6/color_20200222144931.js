import React, {createContext} from 'react';

export const ColorContext=createContext({})

export const UPDATE_COLOR="UPDATE_COLOR"
const reducer=(state, action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color=props=>{
    return (
        <ColorContext.Provider value={{color:'green'}}>
            {props.children}
        </ColorContext.Provider>
    )
}