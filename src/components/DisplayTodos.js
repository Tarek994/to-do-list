import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";


const DisplayTodos = () => {
  return (
    <div>DisplayTodos</div>
  )
}

export default DisplayTodos