import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/TODO/todo-action";
import { updateTodo } from "../redux/TODO/todo-action";
function TodoItem({ item }) {
  const [state, setState] = useState(false);
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const editItemToState = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: item.id }));
    setState(false);
    textRef.current = null;
  };
  const renderEdit = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type="text" defaultValue={item.message} />
        <button type="submit">Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <div>
        {item.message}
        <button type="submit" onClick={() => dispatch(deleteTodo(item.id))}>
          Delete
        </button>
        <button
          type="submit"
          onClick={() => {
            setState(true);
          }}
        >
          Edit
        </button>
      </div>
    );
  };
  return state ? renderEdit() : renderItem();
}

export default TodoItem;
