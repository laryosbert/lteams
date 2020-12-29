import { SET_FILTER } from "../actionTypes";

const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
  };  

const initialState = VISIBILITY_FILTERS.ALL;

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibility;
