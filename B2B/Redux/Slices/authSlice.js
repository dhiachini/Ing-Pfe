import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  username: null,
  errors: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state = initialState, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.errors = null;
    },
    logout: (state = initialState) => {
      state.token = null;
      state.username = null;
      state.errors = null;
    },
    loginFailure: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { loginSuccess, logout, loginFailure } = authSlice.actions;

export default authSlice.reducer;