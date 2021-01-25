import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TODO/todo-action";
import cuid from "cuid";

function AddTodo() {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTasks(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ message: tasks, id: cuid() }));
    e.target.userInput.value = "";
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="userInput"
        value={tasks}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
