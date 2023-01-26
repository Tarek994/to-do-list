import React, { useState } from 'react'
import { addTodos } from "../redux/reducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};


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
          
        <button className="add-btn"
        onClick={()=> props.addTodo({
          id: Math.floor(Math.random()*1000),
          item: todo,
          completed:false,
        })}
        >
            Add 
        </button>
        <br/>

        <ul>
          {
            props.todos.map((item) => {
              return <li key={item.id}>{item.item}</li>;
            })
          }
        </ul>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);