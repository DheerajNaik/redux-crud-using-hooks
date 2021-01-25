import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function TodoList() {
  const taskobj = useSelector((state) => state.todo.data);
  const items = taskobj.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });
  return <div>{items}</div>;
}

export default TodoList;
