import React, { useState } from 'react'
import { connect } from 'react-redux';

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChage = (e) =>{
         setTodo(e.target.value);
    };
 console.log("props from store", props);


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

export default connect(null,null)(Todos);