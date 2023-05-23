import { ADD_TODO, DELETE_TODO, MARK_COMPLETED } from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((list) => list.id !== action.payload),
      };
    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: true,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
