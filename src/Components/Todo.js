import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Todo(props) {
    return (
        <div  className="single-todo">
        <p onClick={(props.click)}>{props.text} <span><AiOutlineCloseCircle /></span></p>
        
        </div>
    )
}

export default Todo
