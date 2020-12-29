import { combineReducers } from "redux";
import visibility from "./visibility";
import todos from "./todos";
import projects from '../Project/reducer';

export default combineReducers({ todos, visibility, projects });
