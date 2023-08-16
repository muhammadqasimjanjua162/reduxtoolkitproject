import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = [];

const todoSlice = createSlice({
  name: "employeeMangement",
  initialState,
  reducers: {
    addData: (state, action) => {
      // state.tasks.push({ id: Date.now(), text: action.payload });
      console.log(state, "state in add", action.payload);
      return [...state, { ...action.payload, id: uuidv4() }];
    },
    deleteData: (state, action) => {
      // console.info(state.length, "state here");
      // console.log(typeof state, "state type");
      return state.filter((todo) => todo.id !== action.payload);
      // console.log(JSON.stringify(state), "in delete");
      //  console.log(Object.values(state), "object");

      //   console.log(action.payload);
      //   console.log(state.values, "values");
      //   let res = state.map((item) => console.log(typeof item));
      //   console.log(res, "res");
      //   const Item = action.payload;
      // state.em
      //  return[...state,state.tasks.filter((task) => task.id !== action.payload];
      //   shows.list = shows.list.filter((show) => show.id !== action.payload.deletedShowId);
      //   return shows;
      // return[...state,{state]
      //   const FilteredArray = state.employees.filter(
      //     (task) => task !== action.payload
      //   );
    },
    editData: (state, action) => {
      // const { id, data } = action.payload;
      console.log(action.payload, "data in redux");
      //     const arr = tableData.map((elem) =>
      //     formInputData.id === elem.id ? formInputData : elem
      //   );
      //   console.log(arr, "oray");
      //using dispatch
      //   setTableData(arr);
      //   console.log(action.payload, "ID");
      //     console.log(state.id, "id");
      // console.log(state);
      const res = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      console.log(res, "o result");
      return res;

      //  console.log(res, "RECORD");
      //  return [...state, { ...action.payload, id: uuidv4() }];
    },
  },
});

export const { addData, deleteData, editData } = todoSlice.actions;

export default todoSlice.reducer;
