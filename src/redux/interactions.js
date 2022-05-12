import { createSlice } from "@reduxjs/toolkit";

export const interactionsSlice = createSlice({
  name: "interactions",
  initialState: [{id: 33, prompt: "waddup", response: "nothing"}],
  reducers: {
    addInteraction: (state, id, prompt, response) => {
      state = [...state, 
        {
          id,
          prompt,
          response
        }
      ];
    },
  }
});

export const {addInteraction} = interactionsSlice.actions;
export default interactionsSlice.reducer;