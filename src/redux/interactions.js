import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState: [],
  reducers: {
    addInteraction: (state, action) => {
      console.log(state)
      state.push(action.payload);
    },
  }
});

export const {addInteraction} = interactionsSlice.actions;
export default interactionsSlice.reducer;