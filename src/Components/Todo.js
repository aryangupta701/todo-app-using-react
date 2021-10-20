import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {MdOutlineDoneOutline} from 'react-icons/md'
// import {FiEdit} from 'react-icons/fi'

function Todo(props) {
    return (
        <div  className="single-todo">
        <p >{props.text}</p>
        <div className="icon" >
        <span  onClick={props.completed}><MdOutlineDoneOutline/></span>
         <span onClick={(props.click)}><AiOutlineCloseCircle /></span>

        </div>
        
        </div>
    )
}

export default Todo
