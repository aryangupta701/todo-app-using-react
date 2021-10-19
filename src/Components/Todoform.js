import React,{useState} from 'react'

function Todoform(props) {
    const[input,setinput]=useState('');
    
    const gettodo=(event)=>{
    event.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });
    setinput('')
    }

    const ChangeText=(event)=>{
    setinput(event.target.value)
    }
    return (
        <form className="todo-form" onSubmit={gettodo}>
            <input className="todo-input"
            value={input}
            placeholder='Add a todo'
            onChange={ChangeText}
            />
            <button className="todo-button">Add Todo</button>
        </form>
    );
}

export default Todoform
