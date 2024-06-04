import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  errors: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state = initialState, action) => {
      state.token = action.payload;
      state.errors = null;
    },
    logout: (state = initialState, action) => {
      state.token = action.payload;
      state.errors = action.payload;
    },
    loginFailure: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { loginSuccess, logout, loginFailure } = authSlice.actions;

export default authSlice.reducer;
