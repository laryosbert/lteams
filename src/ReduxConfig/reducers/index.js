import { combineReducers } from "redux";
import visibility from "./visibility";
import todos from "./todos";

export default combineReducers({ todos, visibility });
