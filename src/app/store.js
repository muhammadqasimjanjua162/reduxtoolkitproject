import { configureStore } from "@reduxjs/toolkit";
// import employeeMangementReducer from "./features/todo/todoSlice.js";
import todoSliceReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    emloyees: todoSliceReducer,
  },
});

export default store;
