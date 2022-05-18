import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState: [],
  reducers: {
    addInteraction: (state, action) => {
      state.push(action.payload);
    },
    removeInteraction: (state, action) => {
      return state.filter((card, index) => {
        if(index !== action.payload ) {
          return card;
        }
      })
    }
  }
});

export const {addInteraction, removeInteraction} = interactionsSlice.actions;
export default interactionsSlice.reducer;