import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
   
  ],
};

const todoList = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUSer: (state, action) => {
      state.users=[...state.users, action.payload]
      console.log("ww",state.users )
    },
  },
});

export default todoList.reducer;
export const { addUSer } = todoList.actions;
