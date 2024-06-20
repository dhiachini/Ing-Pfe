import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formserviceDate: [],
  errors: {},
};

export const formserviceSlice = createSlice({
  name: "formservice",
  initialState,
  reducers: {
    request: (state = initialState, action) => {
      state.formserviceDate = [...state.formserviceDate, action.payload];
      state.errors = null;
    },
    errors: (state = initialState, action) => {
      state.errors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { formserviceDate, errors} = formserviceSlice.actions;

export default formserviceSlice.reducer;
