import { START_FETCHING, SUCCESS_FETCHING } from '../actions/todoAction';

const initialState = {
  todos: [],
  isLoading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCHING:
      return {
        isLoading: false,
        todos: [...action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
