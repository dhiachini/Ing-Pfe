import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors: {},
  accountRequests: [],
};

export const accountrequestSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    request: (state = initialState, action) => {
      state.accountRequests = [...state.accountRequests, action.payload];
    },
    errors: (state = initialState, action) => {
      state.errors = action.payload;
    },
  },
});

export const { request, errors } = accountrequestSlice.actions;

export default accountrequestSlice.reducer;
