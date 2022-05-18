import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState: [],
  reducers: {
    addInteraction: (state, action) => {
      state.push(action.payload);
    },
    removeInteraction: (state, action) => {
      state.filter((card, index) => {
        if(index !== action.payload ) {
          return card;
        }
      })
    }
  }
});

export const {addInteraction} = interactionsSlice.actions;
export default interactionsSlice.reducer;