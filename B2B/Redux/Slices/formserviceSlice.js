import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formserviceDate: [],
  errors: null,
};

export const formserviceSlice = createSlice({
  name: "formservice",
  initialState,
  reducers: {
    formserviceDate: (state, action) => {
      state.formserviceDate = action.payload;
      state.errors = null; // Reset errors on successful fetch
    },
    errors: (state, action) => {
      state.errors = action.payload;
    },
    deleteFormserviceSuccess: (state, action) => {
      state.formserviceDate = state.formserviceDate.filter(
        (formservice) => formservice._id !== action.payload
      );
      state.errors = null; // Reset errors on successful delete
    },
  },
});

export const { formserviceDate, errors, deleteFormserviceSuccess } = formserviceSlice.actions;

export default formserviceSlice.reducer;
