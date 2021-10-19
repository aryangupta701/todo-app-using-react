import React,{useState} from 'react'
import Todo from './Todo';
import Todoform from './Todoform'

function Todolist() {
const[todos,settodos]=useState([])
const addTodo=(todo)=>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return ;
    }
let newTodo=[todo,...todos]
settodos(newTodo)
console.log(newTodo)
}

const deleteItem=(keys)=>{
const newtodoo=todos.filter(todo=>{
    if(todo.key!==keys)
    {
        return true;
    }
    return false
})
settodos(newtodoo)
}
     return (

        <div>
            <h1>What is your plan for Today ? </h1>
        <Todoform onSubmit={addTodo}/>
       { 
       todos.map((todo)=>{
            return <Todo text= {todo.text} key={todo.key} click={()=>{deleteItem(todo.key)}}/>
        })
        }
        </div>
    )
}

export default Todolist
