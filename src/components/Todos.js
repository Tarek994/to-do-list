import React, { useRef, useState } from 'react'
import { addTodos, removeTodos } from "../redux/reducer";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodos: (id) => dispatch(removeTodos(id)),

  };
};


const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const inputRef = useRef(true);

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
          
        <button
          className="add-btn"
          onClick={() =>
            props.addTodo({
            id: Math.floor(Math.random() * 1000),
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
              return <li key={item.id}>
                {item.item}
                <textarea ref={inputRef} disabled={inputRef}
                defaultValue={item.item}
                />
                  
                
                <button>Edit</button>
                 <button onClick={() => props.removeTodo(item.id)}>Delete</button>{" "}
                </li>;
            })
          }
        </ul>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);