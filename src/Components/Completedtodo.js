import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Completedtodo(props) {
    return (
        <div className="completed-todo">
            <p >{props.text}</p>
         
        <div className="icon">
        <span onClick={(props.completed)}><AiOutlineCloseCircle /></span>
        </div>
         
        
        </div>
    )
}

export default Completedtodo
