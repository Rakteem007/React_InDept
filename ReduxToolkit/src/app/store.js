import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// it always takes object as input.
export const store = configureStore({
  reducer: todoReducer,
});
