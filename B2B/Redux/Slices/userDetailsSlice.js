// src/store/userDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3700/api/offers/${_id}/user-details`);
      return response.data;
    } catch (error) {
      const response = await axios.get(`http://localhost:3700/api/demandes/${_id}/user-details`);
      return response.data;
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
        state.user = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;
