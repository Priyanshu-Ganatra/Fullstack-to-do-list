import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodosAction: (state, action) => {
      // Set the state to the data from the action
      return action.payload;
    },
    addTodoAction: (state, action) => {
      // Add a new todo with a unique id
      state.push({
        _id: action.payload._id,
        data: action.payload.data,
        completed: false
      });
    },
    toggleTodosAction: (state, action) => {
      // Toggle the completion status of a todo item
      const todo = state.find(todo => todo._id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodoAction: (state, action) => {
      // Remove a todo item by id
      return state.filter(todo => todo._id !== action.payload);
    },
    markAllCompleteAction: (state) => {
      // Mark all todos as completed
      state.forEach(todo => {
        todo.completed = true;
      });
    },
    editTodoAction: (state, action) => {
      // Edit a todo item by id
      const todo = state.find(todo => todo._id === action.payload._id);
      if (todo) {
        todo.data = action.payload.data;
      }
    }
  }
});

// Export actions to be used in components
export const { setTodosAction, addTodoAction, toggleTodosAction, removeTodoAction, markAllCompleteAction, editTodoAction } = todoSlice.actions;

// Export the reducer to be included in the store
export default todoSlice.reducer;
