// src/store/userDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/offers/${offerID}/user-details`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = state.action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;
