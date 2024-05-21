import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  requestDate: [],
  errors: {},
  pop:false
};

export const requestSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    request: (state = initialState, action) => {
      state.requestDate = [...state.requestDate, action.payload];
      state.pop = false;
      state.errors = null;
    },
    errors: (state = initialState, action) => {
      state.pop = false;
      state.errors = action.payload;
    },
    popon: (state = initialState, action) => {
      state.pop = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { request, errors ,popon} = requestSlice.actions;

export default requestSlice.reducer;