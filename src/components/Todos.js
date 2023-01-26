import React, { useState } from 'react'

const Todos = () => {
    const [todo, setTodo] = useState("");

    const handleChage = (e) =>{
         setTodo(e.target.value);
    };
console.log("todo text", todo);
  return (
    <div className='addTodos'>
        <input
          type="text"
          onClick={(e)=> handleChage(e)}
          className='todo-input'
          />
          
        <button className="add-btn">
            Add 
        </button>
    </div>
  )
}

export default Todos