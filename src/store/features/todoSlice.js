import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoAPI from '../../apis/todo.api';

const initialState = {
  todos: [],
  isLoading: false,
};

export const fetchTodo = createAsyncThunk('getTodos', async () => {
  try {
    const result = await todoAPI.getTodos();
    return result.data;
  } catch (err) {
    console.log(err);
  }
});

export const createTodo = createAsyncThunk('createTodo', async (data) => {
  try {
    const result = await todoAPI.createTodo(data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      });
  },
});

export default todoSlice.reducer;
