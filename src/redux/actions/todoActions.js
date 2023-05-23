import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  MARK_COMPLETED,
} from './actionTypes';

export const addNewTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const markTodo = (id) => {
  return {
    type: MARK_COMPLETED,
    payload: id,
  };
};
