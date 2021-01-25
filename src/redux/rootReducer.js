import { combineReducers } from "redux";
import todoReducer from "./TODO/todo-reducer.js";
const rootReducer = combineReducers({ todo: todoReducer });

export default rootReducer;
