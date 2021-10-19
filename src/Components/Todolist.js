import React,{useState} from 'react'
import Completedtodo from './Completedtodo';
import Todo from './Todo';
import Todoform from './Todoform'

function Todolist() {
const[todos,settodos]=useState([])
const[completedtodos,setcompletedtodos]=useState([])
const addTodo=(todo)=>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return ;
    }
let newTodo=[todo,...todos]
settodos(newTodo)
console.log(newTodo)
}

const completed=(keys)=>{
    let t,i
    const newtodoo=todos.filter(todo=>{
        if(todo.id!==keys)
        return true;
        else{
            i=todo.id
            t=todo.text
            return false
        }
    })
    t=`Completed ${t}`
    const tdo={
        id:i,
        text:t
    }
    settodos([...newtodoo])
    setcompletedtodos([tdo,...completedtodos])
    console.log(t)
}

const deletecompleted=(keys)=>{
    const newtodoo = completedtodos.filter(todo=>{
        if(todo.id!==keys)
        {
            return true;
        }
        return false
    })
    setcompletedtodos(newtodoo)
    console.log(newtodoo)
}

const deleteItem=(keys)=>{
const newtodoo=todos.filter(todo=>{
    if(todo.id!==keys)
    {
        return true;
    }
    return false
})
settodos(newtodoo)
console.log(newtodoo)
}
     return (

        <div>
            <h1>What is your plan for Today ? </h1>
        <Todoform onSubmit={addTodo}/>
       { 
       todos.map((todo)=>{
        return <Todo text= {todo.text} key={todo.id} click={()=>{deleteItem(todo.id)}}
        completed={()=>{completed(todo.id)}}/>
       
        })
        }
        {
            completedtodos.map((todo)=>{
               return  <Completedtodo text={todo.text} key={todo.id} 
                completed={()=>deletecompleted(todo.id)}/>
            })
        }
        </div>
    )
}

export default Todolist
