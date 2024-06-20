import { createSlice } from "@reduxjs/toolkit";
import { fetchOffers } from "../../Redux/Actions/offersActions"; 
import {
  DELETE_OFFER_REQUEST,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAILURE,
} from "../../Redux/Actions/offersActions"; 

const initialState = {
  stepOneData: {},
  stepTwoData: [],
  stepThreeData: {},
  offers: [],
  loading: false,
  error: null,
};

const offersSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    updateStepOneData(state, action) {
      state.stepOneData = action.payload;
      console.log(state.stepOneData);
    },
    updateStepTwoData(state, action) {
      state.stepTwoData = action.payload;
    },
    updateStepThreeData(state, action) {
      state.stepThreeData = action.payload;
    },
    createOfferRequest(state) {
      state.loading = true;
      state.error = null;
    },
    createOfferSuccess(state, action) {
      state.loading = false;
      state.stepOneData = {};
      state.stepTwoData = [];
      state.stepThreeData = {};
    },
    createOfferFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_OFFER_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_OFFER_SUCCESS, (state, action) => {
        state.loading = false;
        state.offers = state.offers.filter((offer) => offer._id !== action.payload);
      })
      .addCase(DELETE_OFFER_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  updateStepOneData,
  updateStepTwoData,
  updateStepThreeData,
  createOfferRequest,
  createOfferSuccess,
  createOfferFailure,
} = offersSlice.actions;

export default offersSlice.reducer;
