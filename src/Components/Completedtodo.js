import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Completedtodo(props) {
    return (
        <div>
            <p >{props.text}
         
         <span onClick={(props.completed)}><AiOutlineCloseCircle /></span>
         
        </p>
        </div>
    )
}

export default Completedtodo
