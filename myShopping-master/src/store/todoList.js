import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    //
    removeTodo(state, action) {
      const id = action.payload;
      return state.filter((todo) => todo.id === id);
    },
    //
    toggleTodo(state, action) {
      const id = action.payload;
      const todo = state.find((todo) => todo);
      todo.completed = !todo.completed;
    },
  },
});
