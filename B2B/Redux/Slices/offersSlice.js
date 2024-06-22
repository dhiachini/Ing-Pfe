import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_SINGLE_OFFER_REQUEST,
  FETCH_SINGLE_OFFER_SUCCESS,
  FETCH_SINGLE_OFFER_FAILURE,
  fetchSingleOffer,
  fetchOffers,
  DELETE_OFFER_REQUEST,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAILURE,
  DELETE_DEMANDE_REQUEST,
  DELETE_DEMANDE_SUCCESS,
  DELETE_DEMANDE_FAILURE,
} from "../../Redux/Actions/offersActions";

const initialState = {
  stepOneData: {},
  stepTwoData: [],
  stepThreeData: {},
  offers: [],
  demandes: [],
  singleOffer: [],
  loading: false,
  error: null,
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    updateStepOneData(state, action) {
      state.stepOneData = { ...action.payload };
    },
    updateStepTwoData(state, action) {
      state.stepTwoData = [...action.payload];
    },
    updateStepThreeData(state, action) {
      state.stepThreeData = { ...action.payload };
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
    fetchSingleOfferRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleOfferSuccess(state, action) {
      state.loading = false;
      state.singleOffer = action.payload;
      state.error = null; // Reset error on successful fetch
    },
    fetchSingleOfferFailure(state, action) {
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
        state.offers = state.offers.filter(
          (offer) => offer._id !== action.payload
        );
      })
      .addCase(DELETE_OFFER_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DELETE_DEMANDE_REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(DELETE_DEMANDE_SUCCESS, (state, action) => {
        state.loading = false;
        state.demandes = state.demandes.filter(
          (demande) => demande._id !== action.payload
        );
      })
      .addCase(DELETE_DEMANDE_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(FETCH_SINGLE_OFFER_REQUEST, (state, action) => {
        state.loading = true;
        state.singleOffer = state.offers.filter((so) => so._id === action.payload);
        state.error = null;
      })
      .addCase(FETCH_SINGLE_OFFER_SUCCESS, (state, action) => {
        state.loading = false;
        state.singleOffer = action.payload;
        state.error = null; // Reset error on successful fetch
      })
      .addCase(FETCH_SINGLE_OFFER_FAILURE, (state, action) => {
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
  fetchSingleOfferRequest,
  fetchSingleOfferSuccess,
  fetchSingleOfferFailure,
} = offersSlice.actions;

export default offersSlice.reducer;
