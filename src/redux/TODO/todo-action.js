//import * as actionTypes from "./todo-types";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./todo-types";

export const addTodo = (messageObj) => ({
  type: ADD_TODO,
  payload: messageObj,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = ({ message, id }) => ({
  type: UPDATE_TODO,
  payload: {
    message,
    id,
  },
});
